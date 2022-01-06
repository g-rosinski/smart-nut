import { ButtonProps, StyleSheet, View, ViewStyle } from 'react-native'

import React from 'react'

interface InputGroupProps{
    loading?: boolean,
    style?: ViewStyle
}

const InputGroup: React.FC<InputGroupProps> = ({children, style,  ...props}) => (
    <View style={ [styles.inputGroup, style] } {...props}>
        { children }
    </View>
)

const styles = StyleSheet.create({
    inputGroup: {
        width: '100%',
        minWidth: 50,
        maxWidth: 300
    },
})

export default InputGroup