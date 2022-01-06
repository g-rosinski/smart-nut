import { ButtonProps, StyleSheet, Text, TouchableOpacity, ViewStyle, } from 'react-native'

import { Ionicons } from '@expo/vector-icons';
import { Para } from '../Texts';
import React from 'react'
import colors from '../../contants/colors';

interface ButtonDeleteProps extends Omit<ButtonProps, 'title'>{
    style?: ViewStyle
    title?: string
}

const ButtonDelete: React.FC<ButtonDeleteProps> = ({disabled, style, title, ...props}) => (
    <TouchableOpacity style={[styles.button, style, disabled? styles.disabled : null]} disabled={disabled} {...props}>
        <Ionicons name="md-trash" size={24} color={ colors.copper } style={styles.icon} />
        { title && <Para style={styles.title}>{title}</Para>}
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: colors.white,
        color: colors.copper,
        minWidth: 45,
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

        elevation: 2,
    },
    disabled: {
        opacity: 0.8,
    },
    icon: {
        paddingLeft: 5,
        paddingBottom: 2
    },
    title: {
        paddingRight: 5,
    },
})

ButtonDelete.defaultProps = {
    disabled: false
}

export default ButtonDelete