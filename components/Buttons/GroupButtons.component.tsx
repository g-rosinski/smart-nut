import { StyleSheet, View } from 'react-native'

import React from 'react'

interface GroupButtonsProps{
}

const GroupButtons: React.FC<GroupButtonsProps> = ({children, ...props}) => (
    <View style={styles.group_buttons} {...props}>
        { children }
    </View>
)

const styles = StyleSheet.create({
    group_buttons: {
        flexDirection: 'row',
        width: 400,
        justifyContent: 'space-around',
    },
})

export default GroupButtons