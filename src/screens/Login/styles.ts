import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.BACKGROUND};
`;

export const HeaderView = styled.View`
    width: 100%;
    height: 400px;
    align-items: center;
    justify-content: center;
    margin-top: ${Platform.OS === 'android' ? 10 : 0}px;
`;

export const LogoImage = styled.Image`
    /* margin-left: 75px; */
`;

export const ContentView = styled.View`
    height: 130px;
    align-items: center;
    margin-top: -25px;
`;

export const Title = styled.Text`
    font-size: 30px;
    color: ${({theme}) => theme.colors.BRANCO};
    font-family: ${({theme}) => theme.fonts.PoppinsBold};

`;

export const InfoTitle = styled.Text`
    font-size: 15px;
    text-align: center;
    color: ${({theme}) => theme.colors.BRANCO};
    font-family: ${({theme}) => theme.fonts.PoppinsLight};
`;

export const ImputView = styled.View`
width: 100%;
align-items: center;
`;

export const ImputEmail = styled.TextInput`
width: 340px;
height: 60px;
border-radius: 15px;
margin-bottom: 10px;
padding-left: 20px;
background-color: ${({theme}) => theme.colors.BACKGROUND_IMPUT};
`;

export const ImputSenha = styled.TextInput`
width: 340px;
height: 60px;
border-radius: 15px;
padding-left: 20px;
background-color: ${({theme}) => theme.colors.BACKGROUND_IMPUT};
`;

export const FooterView = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    flex-direction: row;
    justify-content: center;

`;

export const ButtonContinue = styled.TouchableOpacity`
    height: 60px;
    width: 320px;
    padding: 15px;
    align-items: center;
    border-radius: 30px;
    justify-content: center;
    background-color: ${({theme}) => theme.colors.BUTTON2 };
`;

export const ButtonContinueText = styled.Text`
    font-size: 22px;
    color: ${({theme}) => theme.colors.BRANCO};
    font-family: ${({theme}) => theme.fonts.PoppinsBold};
`;


export const ViewText = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 85%;
    padding: 8px;
`;

export const TextCadastro = styled.Text`
    font-size: 15px;
    color: ${({theme}) => theme.colors.BRANCO};
`;

export const TexTRecuperarSenha = styled.Text`
    font-size: 15px;
`;
