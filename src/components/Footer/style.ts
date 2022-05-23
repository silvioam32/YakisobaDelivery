import styled from 'styled-components/native';

export const Container = styled.View`
    height: 59px;
    width: 100%;
    padding: 10px 0;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.colors.BACKGROUND};

    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
`;

export const ViewTitle = styled.View`
    flex-direction: row;
    width: 60%;
    justify-content: space-between;
`;

export const QtdeItems = styled.Text`
    font-size: 15px;
    color: ${({theme}) => theme.colors.BRANCO};
`;

export const PriceItems = styled.Text`
    font-size: 15px;
    color: ${({theme}) => theme.colors.BRANCO};
`;
