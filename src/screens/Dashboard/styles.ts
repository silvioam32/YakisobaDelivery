import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Platform } from 'react-native';

export const Container = styled.View`
    flex: 1;
    margin-left: 10px;
    margin-right: 10px;
`;

export const ViewHeader = styled.View`
    margin-top: ${ Platform.OS === 'android' ? 20 : 0 }px;
    flex-direction: row;
    padding: 10px;
    align-items: center;
    justify-content: space-between;
`;

export const ButtonIcon = styled.TouchableOpacity``;

export const IconMenu = styled.Image`
    width: 47px;
    height: 22px;
    margin-left: 10px;
`;

export const IconPesquisa = styled(Ionicons)`
    font-size: 25px;
    margin-right: 19px;
    color: ${({theme}) => theme.colors.COLORICON};
`;

export const ViewTitle = styled.View`
    margin-left: 10px;
`;


export const ViewTitleInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const ViewTitleInfoIcon = styled(Feather)`
    font-size: 17px;
    color: ${({theme}) =>theme.colors.BLACK};
`;

export const ViewTitleInfoLocaled = styled.Text`
    font-family: ${({theme}) => theme.fonts.PoppinsBold};
    font-size: 24px;
`;

export const ViewTitleVoltarIcon = styled(Ionicons)`
    font-size: 22px;
    padding: 5px;
    color: ${({theme}) =>theme.colors.BLACK};
`;

export const ViewTextInfo = styled.Text`
    font-family: ${({theme}) => theme.fonts.PoppinsMedium};
    font-size: 12px;
    margin-top: -10px;
`;

export const ViewIcon = styled.View`
    flex-direction: row;
    padding: 15px;
    align-items: center;
    justify-content: space-around;
`;

export const ViewBorder = styled.View`
    border-width: 2px;
    padding: 6px;
    border-radius: 5px;
`;

export const ViewIconHome = styled(AntDesign)`
    font-size: 35px;
    align-items: center;
    justify-content: center;
`;

export const ViewIconHeart = styled(AntDesign)`
    font-size: 35px;
    align-items: center;
    justify-content: center;
`;

export const ViewIconFilter = styled(AntDesign)`
    font-size: 35px;
    align-items: center;
    justify-content: center;
`;

export const ViewIconCart = styled(AntDesign)`
    font-size: 35px;
    align-items: center;
    justify-content: center;
`;

export const ViewContents = styled.View`
    padding: 10px;
    flex-direction: row;
    justify-content: space-between;
`;

export const ViewFooter = styled.View`
    padding: 10px;
`;

export const Title =  styled.Text`
    margin-left: 12px;
    font-size: 15px;
`;
