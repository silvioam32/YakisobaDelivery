import React from 'react'
import { View, Text } from 'react-native'
import {
    Container,
    ViewTitle,
    QtdeItems,
    PriceItems,
} from './style'

const footer = () => {
  return (
    <Container>
        <ViewTitle>
            <QtdeItems>3 itens</QtdeItems>
            <PriceItems>R$ 75,00</PriceItems>
        </ViewTitle>
    </Container>
  )
}

export default footer
