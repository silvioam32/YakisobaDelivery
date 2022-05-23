import React from 'react'
import { View, Text } from 'react-native'

import {
    Container,
    HeaderView,
    ContentView,
    FooterView,
    LogoImage,
    Title,
    InfoTitle,
    ButtonContinue,
    ButtonContinueText,
    ButtonView,
} from "./styles"
import LogoTop from "../../assets/onboarding2.png";

const OmboardingTwo = () => {
  return (
    <Container>
        <HeaderView>
            <LogoImage source={LogoTop} resizeMode='contain'/>
        </HeaderView>

        <ContentView>
            <Title>Registro {'\n'} Completo</Title>
        </ContentView>

        <FooterView>
            <ButtonContinue>
                <ButtonContinueText>Continue</ButtonContinueText>
            </ButtonContinue>
        </FooterView>
    </Container>
  )
}

export default OmboardingTwo
