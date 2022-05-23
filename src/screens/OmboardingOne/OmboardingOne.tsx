import React from 'react'
import { View, Text } from 'react-native'
import {useNavigation} from '@react-navigation/native';

import {
    Container,
    HeaderView,
    LogoImage,
    ContentView,
    FooterView,
    Title,
    InfoTitle,
    ButtonLogin,
    ButtonLoginText,
    ButtonCadastro,
    ButtonCadastroText,
    ButtonView,
} from "./styles"
import LogoTop from "../../assets/onboarding1.png";

const OmboardingOne = () => {
    const navigation = useNavigation();

    const toggleLogin = () => {
        navigation.navigate('Login')
    }

    const toggleCadastro = () => {
        navigation.navigate('Cadastro')
    }


    return (
    <Container>
        <HeaderView>
            <LogoImage source={LogoTop} resizeMode='contain'/>
        </HeaderView>

        <ContentView>
            <Title>Yakisoba Delivery</Title>
            <InfoTitle>Peça suas refeições favoritas {'\n'}
                   Aqui!</InfoTitle>
        </ContentView>

        <FooterView>
            <ButtonView>
            <ButtonLogin onPress={toggleLogin}>
                <ButtonLoginText>Entrar</ButtonLoginText>
            </ButtonLogin>

            <ButtonCadastro onPress={toggleCadastro}>
                <ButtonCadastroText>Cadastro</ButtonCadastroText>
            </ButtonCadastro>
            </ButtonView>
        </FooterView>
    </Container>
  )
}

export default OmboardingOne
