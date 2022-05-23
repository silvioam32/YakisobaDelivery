import React from 'react';
import {View, Text} from 'react-native';

import Pizza from '../../assets/image/pizza01.png';
import {
    Container,
    ImageItens,
    IconHeart,
    ButtonIcon,
    IconAdd,
    ButtonAdd,
    ViewText,
    ViewTextName,
    ViewTextPrice,
} from './style';

const ListItensSimples = () => {
    return (
        <Container>
            <ButtonIcon>
                <IconHeart name="hearto" />
            </ButtonIcon>
            <ImageItens source={Pizza} resizeMode="contain" />
            <ViewText>
                <ViewTextName>Yakisoba M</ViewTextName>
                <ViewTextPrice>R$ 25,00</ViewTextPrice>
            </ViewText>
            <ButtonAdd>
                <IconAdd name="add-circle-outline" />
            </ButtonAdd>
        </Container>
    );
};

export default ListItensSimples;
