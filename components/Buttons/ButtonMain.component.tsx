import { ButtonProps, StyleSheet, Text, TouchableOpacity, } from 'react-native'

import React from 'react'
import theme from '../../contants/theme'

interface ButtonMainProps extends ButtonProps{
    loading?: boolean,
}

const ButtonMain: React.FC<ButtonMainProps> = ({title, loading, ...props}) => (
    <TouchableOpacity style={styles.button} {...props}>
        <Text style={styles.buttonText}>
            { title }
        </Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    button: {
        backgroundColor: theme.button.background.main,
        color: theme.button.color.main,
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
        color: theme.button.color.main,
        fontSize: 14,
    }
})

ButtonMain.defaultProps = {
    title: 'Aceptar'
}

export default ButtonMain