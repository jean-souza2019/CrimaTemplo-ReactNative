import React, { useLayoutEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList } from 'react-native';

import styles from './Menu.style';
import Header from '../components/Header';
import Cidade from '../components/Cidade'

import cidades from '../services/database/cidades.json';

export default function Home({ navigation }) {
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
                                cidade={{
                                    "nomeCidade": item.nome,
                                    "localidade": item.localidade
                                }}
                                navigation={navigation} />
                        )}

                        keyExtractor={item => item.localidade}

                    />
                </View>

                <StatusBar style="auto" />
            </View>
        </View>
    );
}

