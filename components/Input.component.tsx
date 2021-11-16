import { StyleSheet, TextInput, TextInputProps } from 'react-native'

import React from 'react'
import theme from '../contants/theme'

interface InputProps extends TextInputProps{
    loading?: boolean,
}

const Input: React.FC<InputProps> = ({...props}) => (
    <TextInput
        style={ styles.input} 
        selectionColor={theme.input.border} 
        underlineColorAndroid={theme.input.border} 
        { ...props }
    />
)

const styles = StyleSheet.create({
    input: {
        height: 30,
        paddingLeft: 5,
        paddingBottom: 0,
        textAlignVertical: 'top',
        fontSize: 16,
        lineHeight: 20,
        textDecorationLine: 'none',
        width: '100%'
    },
})

export default Input