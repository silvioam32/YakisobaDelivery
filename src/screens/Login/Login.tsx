import React from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
    Container,
    HeaderView,
    ImputEmail,
    ImputSenha,
    LogoImage,
    ContentView,
    Title,
    InfoTitle,
    FooterView,
    ButtonContinue,
    ButtonContinueText,
    ImputView,
    ViewText,
    TextCadastro,
    TexTRecuperarSenha,
} from './styles';
import LogoTopo from '../../assets/login.png';

const Login = () => {
    const navigation = useNavigation()

    const toggleCadastro = () => {
        navigation.navigate('Cadastro')
    }

    const toggleRecuperarSenha = () => {
        navigation.navigate('RecuperarSenha')
    }

    const toggleDashboarding = () => {
            navigation.navigate('Dashboard')
    }

    return (
        <Container>
            <HeaderView>
                <LogoImage source={LogoTopo} resizeMode="contain" />
            </HeaderView>

            <ContentView>
                <Title>Bem-Vindo de Volta</Title>
                <InfoTitle>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Diam maecenas mi non sed ut odio. Non, justo, sed facilisi
                    et.
                </InfoTitle>
            </ContentView>
            <ImputView>
                <ImputEmail placeholder="Nome de usuário ou e-mail" />
                <ImputSenha placeholder="Digite sua senha" />
            </ImputView>

            <ViewText>
                <TouchableOpacity onPress={toggleCadastro}>
                    <TextCadastro>Cadastro</TextCadastro>
                </TouchableOpacity>

                <TouchableOpacity onPress={toggleRecuperarSenha}>
                    <TexTRecuperarSenha>Recuperar Senha</TexTRecuperarSenha>
                </TouchableOpacity>
            </ViewText>

            <FooterView>
                <ButtonContinue onPress={toggleDashboarding}>
                    <ButtonContinueText>Entrar</ButtonContinueText>
                </ButtonContinue>
            </FooterView>
        </Container>
    );
};

export default Login;
