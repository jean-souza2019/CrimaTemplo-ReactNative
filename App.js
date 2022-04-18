import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Button, Image } from 'react-native';

import Menu from './src/views/Menu';
import PrevisaoCidade from './src/views/PrevisaoCidade';
import Sobre from './src/views/Sobre';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Menu'
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#0080CD',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitle: () => (
            <Image style={{ width: 190, height: 30 }} source={require("./assets/logo.png")} />
          ),
        }
        }
      >

        {

        }
        <Stack.Screen
          name="Menu"
          component={Menu} />

        <Stack.Screen
          name="PrevisaoCidade"
          component={PrevisaoCidade} />

        <Stack.Screen
          name="Sobre"
          component={Sobre} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};
