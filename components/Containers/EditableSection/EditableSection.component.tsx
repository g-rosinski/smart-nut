import { NativeSyntheticEvent, NativeTouchEvent, StyleSheet, View } from 'react-native'

import { ButtonEdit } from '../../Buttons'
import React from 'react'

interface EditableSectionProps{
    displayDisplayBtn?: boolean,
    onPressEdit(event: NativeSyntheticEvent<NativeTouchEvent>): void,
}

const EditableSection: React.FC<EditableSectionProps> = ({displayDisplayBtn, onPressEdit, children}) => (
    <View style={styles.container}>
        { displayDisplayBtn && <ButtonEdit onPress={ onPressEdit } stylesProp={styles.button} /> }
        { children }
    </View>
)

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        width: "90%",
        marginVertical: 10,
        marginHorizontal: 15,
        borderColor: "#cfcfcf",
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "#fff5ea",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    button:{
        marginLeft: "auto",
        marginRight: 0,
        marginBottom: 5
    }
})

EditableSection.defaultProps = {
    displayDisplayBtn: true
}

export default EditableSection