import React, { useLayoutEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList } from 'react-native';

import styles from './Menu.style';
import Header from '../components/Header';
import Cidade from '../components/Cidade'

export default function Home({ navigation }) {

    const cidades = [
        {
            id: 1,
            nome: "Passo Fundo"
        },
        {
            id: 2,
            nome: "Marau"
        },
        {
            id: 3,
            nome: "Carazinho"
        },
        {
            id: 4,
            nome: "Soledade"
        },
        {
            id: 5,
            nome: "Erechim"
        },
        {
            id: 6,
            nome: "Marau"
        }];

    useLayoutEffect(() => {
        // console.log(cidades);
    }, [])

    const Item = ({ title }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );

    return (
        <View style={styles.background}>
            <Header tela={"Menu"} navigation={navigation} />
            <Text style={styles.headerHome}>Selecione a cidade para ver a previsão do tempo detalhada</Text>
            <View style={styles.container}>
                <View>
                    <FlatList
                        data={cidades}
                        renderItem={({ item }) => (
                            <Cidade
                                nomeCidade={item.nome}
                                navigation={navigation} />
                        )}

                        keyExtractor={item => item.id}

                    />
                </View>

                <StatusBar style="auto" />
            </View>
        </View>
    );
}

