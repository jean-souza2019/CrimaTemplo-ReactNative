import React from 'react'
import { View, StyleSheet, Button } from 'react-native'

export default function Header({ tela, navigation }) {
    const moveToSobre = () => {
        navigation.replace("Sobre")
    }

    const moveToMenu = () => {
        navigation.replace("Menu")
    }

    return (
        <View>
            <View style={styles.row}>
                <View style={[styles.btnCalcular, tela === "Menu" && { backgroundColor: "gray" }]}>
                    <Button
                        title='Menu'
                        color="#FFF"
                        onPress={() => tela !== "Menu" && moveToMenu()}
                    />
                </View>
                <View style={[styles.btnCalcular, tela === "Sobre" && { backgroundColor: "gray" }]}>
                    <Button
                        title='Sobre'
                        color="#FFF"
                        onPress={() => tela !== "Sobre" && moveToSobre()}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        flexWrap: "wrap-reverse",
        textAlign: "center",
        backgroundColor: "#0080CD",
    }, btnCalcular: {
        margin: 5,
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: '#1D983A',
        marginLeft: 10
    },
});
