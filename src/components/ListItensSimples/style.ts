import styled from 'styled-components/native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'

export const Container = styled.View`
    width: 165px;
    height: 215px;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.colors.BACKGROUND_ITENS};
`;

export const ImageItens = styled.Image`
    width: 110px;
    height: 110px;
`;

export const IconHeart = styled(AntDesign)`
    font-size: 25px;
`;

export const ButtonIcon = styled.TouchableOpacity`
    top: 5px;
    right: 5px;
    padding: 5px;
    position: absolute;
    align-items: center;
    justify-content: center;
`;

export const IconAdd = styled(Ionicons)`
    font-size: 30px;
`;

export const ButtonAdd = styled.TouchableOpacity`
    bottom: 5px;
    right: 5px;
    padding: 5px;
    position: absolute;
    align-items: center;
    justify-content: center;
`;

export const ViewText = styled.View`
    position: absolute;
    bottom: 5px;
    left: 10px;
`;
export const ViewTextName = styled.Text`
    font-size: 13px;
    margin-bottom: -5px;
    font-family: ${({theme}) => theme.fonts.PoppinsBold};
`;
export const ViewTextPrice = styled.Text`
    font-size: 16px;
    color: ${({theme}) => theme.colors.VERDE_TURQUESA_ESCURO};
    font-family: ${({theme}) => theme.fonts.PoppinsBold};
`;
