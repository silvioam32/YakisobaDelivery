import React from 'react';
import {useTheme} from 'styled-components';
import {View, Text, Alert} from 'react-native';

import ListItensSimples from '../../components/ListItensSimples';
import ListItensGrande from '../../components/ListItensGrande';
import MenuPng from '../../assets/icons/menu.png';
import Footer from '../../components/Footer';
import {
    Container,
    ViewHeader,
    ButtonIcon,
    ViewTitle,
    ViewIcon,
    ViewContents,
    ViewFooter,
    IconMenu,
    IconPesquisa,
    ViewTitleInfo,
    ViewTitleInfoIcon,
    ViewTitleInfoLocaled,
    ViewTextInfo,
    ViewTitleVoltarIcon,
    ViewIconHome,
    ViewIconHeart,
    ViewIconFilter,
    ViewIconCart,
    ViewBorder,
    Title,
} from './styles';

const Dashboard = () => {
    const theme = useTheme();

    const AlertaIcon = () => {
        Alert.alert('Cliquei no icone...');
    };

    return (
        <Container>
            <ViewHeader>
                <ButtonIcon onPress={AlertaIcon}>
                    <IconMenu source={MenuPng} resizeMode="contain" />
                </ButtonIcon>
                <ButtonIcon onPress={AlertaIcon}>
                    <IconPesquisa name="search" />
                </ButtonIcon>
            </ViewHeader>

            <ViewTitle>
                <ViewTitleInfo>
                    <ViewTitleInfoIcon name="map-pin" />
                    <ViewTitleInfoLocaled> Vilhena-RO</ViewTitleInfoLocaled>
                    <ButtonIcon onPress={AlertaIcon}>
                        <ViewTitleVoltarIcon name="caret-down-outline" />
                    </ButtonIcon>
                </ViewTitleInfo>
                <ViewTextInfo>Escolha sua refeição preferida</ViewTextInfo>
            </ViewTitle>

            <ViewIcon>
                <ButtonIcon>
                    <ViewBorder
                        style={{
                            borderColor: theme.colors.ICON,
                        }}>
                        <ViewIconHome name="home" color={theme.colors.ICON} />
                    </ViewBorder>
                </ButtonIcon>

                <ButtonIcon>
                    <ViewBorder
                        style={{
                            borderColor: theme.colors.ICON,
                        }}>
                        <ViewIconHeart
                            name="hearto"
                            color={theme.colors.ICON}
                        />
                    </ViewBorder>
                </ButtonIcon>

                <ButtonIcon>
                    <ViewBorder
                        style={{
                            borderColor: theme.colors.ICON,
                        }}>
                        <ViewIconFilter
                            name="filter"
                            color={theme.colors.ICON}
                        />
                    </ViewBorder>
                </ButtonIcon>

                <ButtonIcon>
                    <ViewBorder
                        style={{
                            borderColor: theme.colors.ICON,
                        }}>
                        <ViewIconCart
                            name="shoppingcart"
                            color={theme.colors.ICON}
                        />
                    </ViewBorder>
                </ButtonIcon>
            </ViewIcon>
             <Title>Tamanho Medio</Title>
            <ViewContents>
                <ListItensSimples />
                <ListItensSimples />
            </ViewContents>
            <Title>Tamanho Grande</Title>
            <ViewContents>
                <ListItensGrande />
                <ListItensGrande />
            </ViewContents>
            <ViewFooter>
                <Footer/>
            </ViewFooter>
        </Container>
    );
};

export default Dashboard;
