import React from 'react';
import {ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
    Container,
    HeaderView,
    ImputEmail,
    LogoImage,
    InfoTitle,
    FooterView,
    ButtonContinue,
    ButtonContinueText,
    ImputView,
} from './styles';
import LogoTopo from '../../assets/cadastro.png';

const RecuperarSenha = () => {
    const navigation = useNavigation()

    const toggleLogin = () => {
        navigation.navigate('Login');
    }

    return (
        <Container>
            <HeaderView>
                <LogoImage source={LogoTopo} resizeMode="contain" />
            </HeaderView>

            <ImputView>
            <ImputEmail placeholder='Nome de usuário ou e-mail'/>
            </ImputView>

            <InfoTitle onPress={toggleLogin}>
                    Voltar para login
                </InfoTitle>

            <FooterView>
                <ButtonContinue>
                    <ButtonContinueText>Recuperar Senha</ButtonContinueText>
                </ButtonContinue>
            </FooterView>
        </Container>
    );
};

export default RecuperarSenha;
