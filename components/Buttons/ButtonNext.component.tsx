import { ButtonProps, StyleSheet, Text, TouchableOpacity, ViewStyle, } from 'react-native'

import { Ionicons } from '@expo/vector-icons';
import { Para } from '../Texts';
import React from 'react'
import colors from '../../contants/colors';

interface ButtonNextProps extends Omit<ButtonProps, 'title'>{
    style?: ViewStyle
    title?: string,
    asButton?: boolean
}

const ButtonNext: React.FC<ButtonNextProps> = ({disabled, asButton, style, title, ...props}) => (
    <TouchableOpacity style={[styles.touchable, asButton? styles.button : null, style, disabled? styles.disabled : null]} disabled={disabled} {...props}>
        <Ionicons name="md-caret-forward" size={26} color={ colors.copper } style={styles.icon} />
        { title && <Para style={styles.title}>{title}</Para>}
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    touchable: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        color: colors.copper,
    },
    button: {
        backgroundColor: colors.white,
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

ButtonNext.defaultProps = {
    disabled: false
}

export default ButtonNext