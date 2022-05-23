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
    justify-content: center;
    align-items: center;
`;

export const LogoImage = styled.Image`
    /* margin-left: 75px; */
`;

export const Title = styled.Text`
    font-size: 30px;
    text-align: center;
    color: ${({theme}) => theme.colors.TEXTCOLOR};
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
    width: 100%;
    align-items: center;
    flex-direction: row;
    justify-content: center;

`;

export const ButtonView = styled.View`
    border-width: 1px;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    border-color: ${({theme}) => theme.colors.BUTTON2};
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

