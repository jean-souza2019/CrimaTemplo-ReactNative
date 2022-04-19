import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import moment from 'moment'

import { ConsultaPrevisao } from '../services/ConsultaPrevisao'

export default function PrevisaoCidade(props) {
    const { nomeCidade, localidade } = props.route.params
    const [temperaturaManha, setTemperaturaManha] = useState({})
    const [temperaturaTarde, setTemperaturaTarde] = useState({})
    const [temperaturaNoite, setTemperaturaNoite] = useState({})

    useEffect(async () => {
        const dataHoje = moment(new Date()).format('DD/MM/YYYY');
        const previsaoHoje = await ConsultaPrevisao(localidade);
        setTemperaturaManha(previsaoHoje[localidade][dataHoje]['manha']);
        setTemperaturaTarde(previsaoHoje[localidade][dataHoje]['tarde']);
        setTemperaturaNoite(previsaoHoje[localidade][dataHoje]['noite']);
    }, [])

    return (
        <View style={styles.container}>
            <View>


                <View style={styles.linha}>
                    <View style={styles.coluna}><Text style={styles.fontTextoTitulo}>Cidade:</Text></View>
                    <View style={styles.valor}>
                        <Text style={styles.fontTextoCorpo}>{nomeCidade}</Text>
                    </View>
                </View>

                <View style={styles.container}>
                    <View style={styles.linha}>
                        <View style={styles.coluna} >
                            <Text style={styles.fontTextoTituloCard}>Manha
                                <Image
                                    style={styles.imagem}
                                    source={{
                                        uri: temperaturaManha.icone
                                    }}
                                />
                            </Text>
                        </View>
                    </View>
                    <View style={styles.linha}>
                        <View style={styles.coluna} ><Text style={styles.fontTextoTitulo}>Resumo:</Text></View>
                        <View style={styles.valor}>
                            <Text style={styles.fontTextoCorpo}>{temperaturaManha.resumo}</Text></View>
                    </View>

                    <View style={styles.linha}>
                        <View style={styles.coluna} ><Text style={styles.fontTextoTitulo}>Temp. Max:</Text></View>
                        <View style={styles.valor}>
                            <Text style={styles.fontTextoCorpo}>{temperaturaManha.temp_max} °C</Text></View>
                    </View>

                    <View style={styles.linha}>
                        <View style={styles.coluna} ><Text style={styles.fontTextoTitulo}>Temp. Min:</Text></View>
                        <View style={styles.valor}>
                            <Text style={styles.fontTextoCorpo}>{temperaturaManha.temp_min}°C</Text></View>
                    </View>
                </View>

                <View style={styles.container}>
                    <View style={styles.linha}>
                        <View style={styles.coluna} >
                            <Text style={styles.fontTextoTituloCard}>Tarde
                                <Image
                                    style={styles.imagem}
                                    source={{
                                        uri: temperaturaTarde.icone
                                    }}
                                />
                            </Text>
                        </View>
                    </View>
                    <View style={styles.linha}>
                        <View style={styles.coluna} ><Text style={styles.fontTextoTitulo}>Resumo:</Text></View>
                        <View style={styles.valor}>
                            <Text style={styles.fontTextoCorpo}>{temperaturaTarde.resumo}</Text></View>
                    </View>

                    <View style={styles.linha}>
                        <View style={styles.coluna} ><Text style={styles.fontTextoTitulo}>Temp. Max:</Text></View>
                        <View style={styles.valor}>
                            <Text style={styles.fontTextoCorpo}>{temperaturaTarde.temp_max} °C</Text></View>
                    </View>

                    <View style={styles.linha}>
                        <View style={styles.coluna} ><Text style={styles.fontTextoTitulo}>Temp. Min:</Text></View>
                        <View style={styles.valor}>
                            <Text style={styles.fontTextoCorpo}>{temperaturaTarde.temp_min}°C</Text></View>
                    </View>
                </View>

                <View style={styles.container}>
                    <View style={styles.linha}>
                        <View style={styles.coluna} >
                            <Text style={styles.fontTextoTituloCard}>Noite
                                <Image
                                    style={styles.imagem}
                                    source={{
                                        uri: temperaturaNoite.icone
                                    }}
                                />
                            </Text>
                        </View>
                    </View>
                    <View style={styles.linha}>
                        <View style={styles.coluna} ><Text style={styles.fontTextoTitulo}>Resumo:</Text></View>
                        <View style={styles.valor}>
                            <Text style={styles.fontTextoCorpo}>{temperaturaNoite.resumo}</Text></View>
                    </View>

                    <View style={styles.linha}>
                        <View style={styles.coluna} ><Text style={styles.fontTextoTitulo}>Temp. Max:</Text></View>
                        <View style={styles.valor}>
                            <Text style={styles.fontTextoCorpo}>{temperaturaNoite.temp_max} °C</Text></View>
                    </View>

                    <View style={styles.linha}>
                        <View style={styles.coluna} ><Text style={styles.fontTextoTitulo}>Temp. Min:</Text></View>
                        <View style={styles.valor}>
                            <Text style={styles.fontTextoCorpo}>{temperaturaNoite.temp_min}°C</Text></View>
                    </View>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "gray",
        margin: 5,
    }, fontTextoTitulo: {
        fontSize: 20
    }, fontTextoCorpo: {
        fontSize: 25,
        fontWeight: 'bold'
    }, linha: {
        flexDirection: "row",
        margin: 5
    }, coluna: {
        flex: 2
    }, valor: {
        flex: 4
    }, imagem: {
        width: 50,
        height: 50,
        alignSelf: "center"
    }, fontTextoTituloCard: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20
    }
});
