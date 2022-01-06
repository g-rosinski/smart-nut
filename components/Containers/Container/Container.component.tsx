import { StyleSheet, View } from 'react-native'

import React from 'react'

interface ContainerProps{
}

const Container: React.FC<ContainerProps> = ({children}) => (
    <View style={styles.container}>
        { children }
    </View>
)

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        width: "100%",
        marginVertical: 10,
        marginHorizontal: 15,
        borderRadius: 10,
    }
})

export default Container