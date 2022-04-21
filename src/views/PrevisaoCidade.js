import React, { useEffect, useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import moment from 'moment'

import styles from './PrevisaoCidade.style'

import { ConsultaPrevisao } from '../services/ConsultaPrevisao'
import Previsao from '../components/Previsao'

export default function PrevisaoCidade(props) {
  const { nomeCidade, localidade } = props.route.params
  const [temperaturaHoje, setTemperaturaHoje] = useState({})

  useEffect(async () => {
    const dataHoje = moment(new Date()).format('DD/MM/YYYY');
    let previsaoHoje = await ConsultaPrevisao(localidade);
    previsaoHoje = previsaoHoje[localidade][dataHoje];
    
    // setTemperaturaHoje(previsaoHoje[localidade][dataHoje]['manha']);
    
    var result = Object.keys(previsaoHoje).map(function(key) {
      return [key, previsaoHoje[key]];
    });

    setTemperaturaHoje(result)

  }, [])

  return (
    <View style={styles.container}>

      <View style={styles.linha}>
        <View style={styles.coluna}>
          <Text style={styles.fontTextoTitulo}>Cidade:</Text>
        </View>
        <View style={styles.valor}>
          <Text style={styles.fontTextoCorpo}>{nomeCidade}</Text>
        </View>
      </View>


      <FlatList
        data={temperaturaHoje}
        renderItem={({ item }) =>
          <Previsao
            dados={item}
          />
        }
        keyExtractor={item => item.resumo}

      />



    </View>
  )
}