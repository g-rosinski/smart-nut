import { ButtonProps, StyleSheet, Text, TouchableOpacity, ViewStyle, } from 'react-native'

import { Ionicons } from '@expo/vector-icons';
import React from 'react'
import colors from '../../contants/colors';

interface ButtonEditProps extends Omit<ButtonProps, 'title'>{
    stylesProp?: ViewStyle
}

const ButtonEdit: React.FC<ButtonEditProps> = ({disabled, stylesProp, ...props}) => (
    <TouchableOpacity style={[styles.button, stylesProp, disabled? styles.disabled : null]} disabled={disabled} {...props}>
        <Ionicons name="md-create-outline" size={26} color={ colors.copper } style={styles.icon} />
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
        color: colors.copper,
        width: 45,
        height: 45,
        padding: 5,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    disabled: {
        opacity: 0.8,
    },
    icon: {
        paddingLeft: 3,
        paddingBottom: 2
    },
})

ButtonEdit.defaultProps = {
    disabled: false
}

export default ButtonEdit