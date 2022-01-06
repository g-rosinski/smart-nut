import { StyleSheet, View, ViewStyle } from 'react-native'

import React from 'react'

interface GroupButtonsProps{
    style?: ViewStyle
}

const GroupButtons: React.FC<GroupButtonsProps> = ({children, style,  ...props}) => (
    <View style={[styles.group_buttons, style]} {...props}>
        { children }
    </View>
)

const styles = StyleSheet.create({
    group_buttons: {
        flexDirection: 'row',
        width: "100%",
        minWidth: 150,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
})

export default GroupButtons