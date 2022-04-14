import React, { useLayoutEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList } from 'react-native';

import styles from './Menu.style';
import Header from '../components/Header';
import Cidade from '../components/Cidade'

export default function Home({ navigation }) {

    const [cidades, setCidades] = useState(["Passo Fundo", "Marau",
        "Carazinho", "Soledade", "Erechim"])

    useLayoutEffect(() => {
        // console.log(cidades);
    }, [])


    return (
        <View style={styles.background}>
            <Header tela={"Menu"} navigation={navigation} />
            <Text style={styles.headerHome}>Selecione a cidade para ver a previsão do tempo detalhada</Text>
            <View style={styles.container}>
                <View>
                    {/* <FlatList
                        data={cidades}
                        renderItem={({ cidade }) =>
                            <Cidade
                                dados={cidade}
                                navigation={navigation}
                            />
                        }
                        keyExtractor={cidade => cidade.email}

                    /> */}
                </View>

                <StatusBar style="auto" />
            </View>
        </View>
    );
}

