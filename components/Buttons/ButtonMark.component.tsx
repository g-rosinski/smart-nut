import { ButtonProps, StyleSheet, Text, TouchableOpacity, } from 'react-native'

import React from 'react'
import colors from '../../contants/colors'
import theme from '../../contants/theme'

interface ButtonMarkProps extends ButtonProps{
    check?: boolean,
}

const ButtonMark: React.FC<ButtonMarkProps> = ({title, check, ...props}) => (
    <TouchableOpacity style={[styles.button, check? styles.checked: null]} {...props}>
        <Text style={styles.buttonText}>
            { title }
        </Text>
        {check && 
            <Text style={styles.checkedText}>X</Text>
        }
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.copper,
        color: theme.button.color.main,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginVertical: 5,
        height: 40
    },
    checked: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    checkedText: {
        color: theme.button.color.main,
        marginLeft: 'auto',
        fontSize: 14,
        paddingHorizontal: 10
    },
    buttonText: {
        color: theme.button.color.main,
        fontSize: 14,
    }
})

ButtonMark.defaultProps = {
    check: false
}

export default ButtonMark