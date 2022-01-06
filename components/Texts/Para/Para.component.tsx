import { StyleSheet, Text, TextStyle } from 'react-native'

import React from 'react'

interface ParaProps{
    style?: TextStyle
}

const Para: React.FC<ParaProps> = ({children, style}) => (
    <Text style={[styles.para, style]}>
        { children }
    </Text>
)

const styles = StyleSheet.create({
    para: {
        fontSize: 14,
        fontWeight: '400',
        fontFamily: 'RubikRegular',
    }
})

export default Para