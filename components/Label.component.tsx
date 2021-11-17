import { ButtonProps, StyleSheet, Text } from 'react-native'

import React from 'react'

interface LabelProps{
    text: string,
}

const Label: React.FC<LabelProps> = ({text, ...props}) => (
    <Text style={styles.label} { ...props}>{ text }</Text>
)

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        fontWeight: '700',
        alignItems: 'flex-start',
        textAlign: 'left',
        color: '#38231c'
    },
})

export default Label