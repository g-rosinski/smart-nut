import { ButtonProps, StyleSheet, Text, TouchableOpacity, } from 'react-native'

import React from 'react'
import theme from '../../contants/theme'

interface ButtonSecondaryProps extends ButtonProps{
    loading?: boolean,
}

const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({title, loading, ...props}) => (
    <TouchableOpacity style={styles.button} {...props}>
        <Text style={styles.buttonText}>
            { title }
        </Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    button: {
        backgroundColor: theme.button.background.secondary,
        color: theme.button.color.secondary,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 5,
        height: 40
    },
    buttonText: {
        color: theme.button.color.secondary,
        fontSize: 14,
    }
})

ButtonSecondary.defaultProps = {
    title: 'Cancelar'
}

export default ButtonSecondary