import React from 'react';
import {ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
    Container,
    HeaderView,
    ImputEmail,
    ImputUseName,
    ImputSenha,
    LogoImage,
    ContentView,
    Title,
    InfoTitle,
    FooterView,
    ButtonContinue,
    ButtonContinueText,
    ImputView,
} from './styles';
import LogoTopo from '../../assets/cadastro.png';

const Cadastro = () => {
    const navigation = useNavigation()

    const toggleOmboardingOne = () => {
        navigation.navigate('OmboardingOne');
    }

    return (
        <Container>
            <HeaderView>
                <LogoImage source={LogoTopo} resizeMode="contain" />
            </HeaderView>

            <ImputView>
            <ImputEmail placeholder='Nome de usuário ou e-mail'/>
            <ImputUseName placeholder='Digite seu nome'/>
                <ImputSenha placeholder='Digite sua senha'/>
            </ImputView>

            <InfoTitle onPress={toggleOmboardingOne}>
                    Voltar a pagina inicial
                </InfoTitle>

            <FooterView>
                <ButtonContinue>
                    <ButtonContinueText>Cadastrar</ButtonContinueText>
                </ButtonContinue>
            </FooterView>
        </Container>
    );
};

export default Cadastro;
