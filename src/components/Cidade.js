import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState, useLayoutEffect } from 'react'

export default function Cidade({ cidade, navigation }) {
    const [nome, setNome] = useState("")

    const {nomeCidade} = cidade;
    
    useLayoutEffect(() => {
        if (nomeCidade) {
            setNome(nomeCidade)
        }

    }, [])


    return (

        <TouchableOpacity
            onPress={() => navigation.navigate("PrevisaoCidade", cidade)}
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
