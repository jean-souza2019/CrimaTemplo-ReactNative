import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from '../views/PrevisaoCidade.style'

export default function Previsao({ dados }) {
    return (
        <View style={styles.container}>
            <View style={styles.linha}>
                <View style={styles.coluna} >
                    <Text style={styles.fontTextoTituloCard}>{dados[0].toUpperCase()}
                        <Image
                            style={styles.imagem}
                            source={{
                                uri: dados[1].icone
                            }}
                        />
                    </Text>
                </View>
            </View>
            <View style={styles.linha}>
                <View style={styles.coluna} ><Text style={styles.fontTextoTitulo}>Resumo:</Text></View>
                <View style={styles.valor}>
                    <Text style={styles.fontTextoCorpo}>{dados[1].resumo}</Text></View>
            </View>

            <View style={styles.linha}>
                <View style={styles.coluna} ><Text style={styles.fontTextoTitulo}>Temp. Max:</Text></View>
                <View style={styles.valor}>
                    <Text style={styles.fontTextoCorpo}>{dados[1].temp_max} °C</Text></View>
            </View>

            <View style={styles.linha}>
                <View style={styles.coluna} ><Text style={styles.fontTextoTitulo}>Temp. Min:</Text></View>
                <View style={styles.valor}>
                    <Text style={styles.fontTextoCorpo}>{dados[1].temp_min}°C</Text></View>
            </View>
        </View>
    )
}