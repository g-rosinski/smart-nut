import { StyleSheet, Text, TextStyle } from 'react-native'

import React from 'react'

interface TitleProps{
    style?: TextStyle
}

const Title: React.FC<TitleProps> = ({children, style}) => (
    <Text style={[styles.title, style]}>
        { children }
    </Text>
)

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center',
        fontFamily: 'RubikRegular',
    }
})

export default Title