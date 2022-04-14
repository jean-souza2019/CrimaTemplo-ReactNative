import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';

export default function Home({ navigation }) {

    const [litrosConsumidos, setLitrosConsumidos] = useState()
    const [kmsRodados, setKmsRodados] = useState()



    return (
        <View style={styles.background}>
            <View style={styles.row}>
                <View style={styles.btnCalcular}>
                    <Button
                        title='Menu'
                        color="#FFF"
                    />
                </View>
                <View style={[styles.btnCalcular,{backgroundColor: "gray"}]}>
                    <Button
                        title='Sobre'
                        color="#FFF"
                    />
                </View>
            </View>
            <Text style={styles.headerHome}>Informe abaixo os dados parar realizar o calculo do consumo do seu veículo</Text>
            <View style={styles.container}>
                <View>
                    <Text style={{ margin: 10 }}>Quantidade Litros Consumido:</Text>
                    <TextInput
                        // value={litrosConsumidos}
                        // onChangeText={setLitrosConsumidos}
                        style={styles.txtInp}
                        keyboardType="numeric"
                    />
                    <Text style={{ margin: 10 }}>Quantidade KMs Rodados:</Text>
                    <TextInput
                        // value={kmsRodados}
                        // onChangeText={setKmsRodados}
                        style={styles.txtInp}
                        keyboardType="numeric"
                    />
                </View>

                <StatusBar style="auto" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#E1F4FF",
        height: 600
    },
    container: {
        borderWidth: 1,
        padding: 3,
        borderRadius: 10,
        margin: 5,
        textAlign: 'center',
        alignItems: 'center'
    }, headerHome: {
        marginTop: 20,
        padding: 10,
        fontSize: 20,
        textAlign: 'center'
    }, txtInp: {
        textAlign: 'center',
        backgroundColor: '#E4E4E4',
        borderRadius: 10,
        borderWidth: 1,
        height: 30,
        width: 200
    }, btnCalcular: {
        margin: 5,
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: '#1D983A',
        marginLeft: 10
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap-reverse",
        textAlign: "center",
        backgroundColor: "#0080CD",
    },
});