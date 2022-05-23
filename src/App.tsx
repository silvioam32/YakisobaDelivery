import React from 'react';
import 'react-native-gesture-handler';
import {ThemeProvider} from 'styled-components/native';
import {NavigationContainer} from '@react-navigation/native';
import {View, StatusBar} from 'react-native';

import theme from '../src/styles/theme';
import Routes from './routes';

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <NavigationContainer>
                <StatusBar
                    translucent
                    backgroundColor="transparent"
                    barStyle={'dark-content'}
                />
                <View
                    style={{
                        flex: 1,
                        backgroundColor: theme.colors.BRANCO_GELO,
                    }}>
                    <Routes />
                </View>
            </NavigationContainer>
        </ThemeProvider>
    );
}
