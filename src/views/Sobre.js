import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import Header from '../components/Header';

export default function Sobre({ navigation }) {
    return (
        <View>
            <Header tela={"Sobre"} navigation={navigation} />
            <View style={styles.container}>
                <Text style={styles.headerHome}>Developed by Jean Marcos de Souza</Text>
                <View style={styles.container}>
                    <View>
                        <Text style={{ margin: 10 }}>RA: 1116403</Text>
                        <Text style={{ margin: 10 }}>E-mail: jiamarcos@outlook.com.br</Text>
                        <Text style={{ margin: 10 }}>Linkedin: /jean-souza16</Text>
                        <Text style={{ margin: 10 }}>Github: /jean-souza2019</Text>

                    </View>
                    <StatusBar style="auto" />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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
    }

});