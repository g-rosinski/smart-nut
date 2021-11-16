import { ButtonProps, StyleSheet, View } from 'react-native'

import React from 'react'

interface InputGroupProps{
    loading?: boolean,
}

const InputGroup: React.FC<InputGroupProps> = ({children, ...props}) => (
    <View style={ styles.inputGroup } {...props}>
        { children }
    </View>
)

const styles = StyleSheet.create({
    inputGroup: {
        width: '50%',
        maxWidth: 150
    },
})

export default InputGroup