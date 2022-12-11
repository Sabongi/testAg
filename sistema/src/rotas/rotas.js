import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Editar from '../editar/index'
import Main from '../main/index'
import Motorista from '../motorista/index'
import Veiculos from '../veiculos/index'

const Stack = createNativeStackNavigator();


export default function Rotas() {
    return (
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            >
                <Stack.Screen name="Main" component={Main} />
                <Stack.Screen name="Motorista" component={Motorista} /> 
                <Stack.Screen name="Veiculos" component={Veiculos} /> 
                <Stack.Screen name="Editar" component={Editar} /> 
            </Stack.Navigator>
        </NavigationContainer>
    );

}