import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState, useLayoutEffect } from 'react'

export default function Cidade({ nomeCidade, navigation }) {
    const [nome, setNome] = useState("tester")

    useLayoutEffect(() => {
        if (nomeCidade) {
            setNome(nomeCidade)
        }

    }, [])


    return (

        <TouchableOpacity
            onPress={() => navigation.navigate("CidadeDetalhada", nomeCidade)}
        >
            <View style={styles.container}>
                <Text style={styles.lineText}>{nome}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "gray",
        margin: 5,
    }, lineText: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold'
    }
});
