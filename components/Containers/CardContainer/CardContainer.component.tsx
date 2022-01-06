import { StyleSheet, View, ViewStyle } from 'react-native'

import React from 'react'

interface CardContainerProps{
    style?: ViewStyle
}

const CardContainer: React.FC<CardContainerProps> = ({children, style}) => (
    <View style={[styles.CardContainer, style]}>
        { children }
    </View>
)

const styles = StyleSheet.create({
    CardContainer: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: "100%",
        marginVertical: 10,
        // marginHorizontal: 15,
        borderRadius: 10,
        backgroundColor: "#fff5ea",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 1,
    }
})

export default CardContainer