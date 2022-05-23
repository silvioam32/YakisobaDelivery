import styled from 'styled-components/native';
import { Platform } from 'react-native'

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
    margin-top: ${Platform.OS === 'android' ? 35 : 0}px;
`;

export const ContentView = styled.View`
    height: 200px;
    align-items: center;
`;

export const LogoImage = styled.Image`
    margin-left: 75px;
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

export const FooterView = styled.View`
    flex: 1;
    flex-direction: row;
`;

export const ButtonView = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-width: 1px;
    border-color: ${({theme}) => theme.colors.BORDER_COLOR};
    height: 65px;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
`;

export const ButtonLogin = styled.TouchableOpacity`
    padding: 15px;
    width: 160px;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    background-color: ${({theme}) => theme.colors.VERDE_TURQUESA_ESCURO };
`;

export const ButtonLoginText = styled.Text`
    font-size: 22px;
    color: ${({theme}) => theme.colors.BRANCO};
    font-family: ${({theme}) => theme.fonts.PoppinsBold};
`;

export const ButtonCadastro = styled.TouchableOpacity`
    padding: 15px;
    width: 160px;
    align-items: center;
    justify-content: center;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    background-color: ${({theme}) => theme.colors.BORDER_COLOR };
`;

export const ButtonCadastroText = styled.Text`
    font-size: 22px;
    color: ${({theme}) => theme.colors.BLACK};
    font-family: ${({theme}) => theme.fonts.PoppinsBold};
`;

