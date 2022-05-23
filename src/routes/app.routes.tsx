import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import OmboardingOne from '../screens/OmboardingOne';
import Cadastro from '../screens/Cadastro';
import OmboardingTwo from '../screens/OmboardingTwo';
import Login from '../screens/Login';
import RecuperarSenha from '../screens/RecuperarSenha';
import Dashboard from '../screens/Dashboard';

const Stack = createNativeStackNavigator();

const AppRoutes: React.FC = () => {
    return (
        <Stack.Navigator
            initialRouteName="OmboardingOne"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="OmboardingOne" component={OmboardingOne} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
            <Stack.Screen name="OmboardingTwo" component={OmboardingTwo} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Navigator>
    );
};

export default AppRoutes;
