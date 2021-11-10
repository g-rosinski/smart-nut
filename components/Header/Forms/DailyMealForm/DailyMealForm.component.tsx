import { StyleSheet, Text, TextInput, View } from 'react-native'

import ButtonMain from '../../../Buttons/ButtonMain.component'
import React from 'react'
import theme from '../../../../contants/theme'

interface DailyMealProps{
    value?: string,
    onPressAdd: Function,
    onChangeInput?: Function,
}

const DailyMealForm: React.FC<DailyMealProps> = ({value, onPressAdd, onChangeInput}) => (
    <View style={ styles.container }>
        <View style={ styles.inputGroup }>
            <Text style={styles.label}>Que comiste hoy?</Text>
            <TextInput
                style={ styles.input} 
                onChangeText={ onChangeInput } 
                value={value} 
                selectionColor={theme.input.border} 
                underlineColorAndroid={theme.input.border} 
            />
        </View>
        <ButtonMain onPress={ onPressAdd } title="Agregar" />
    </View>
)

const styles = StyleSheet.create({
    container: {
        paddingVertical: 15,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center'
    },
    inputGroup: {
        width: '50%',
        maxWidth: 150
    },
    label: {
        fontSize: 16,
        fontWeight: '700',
        alignItems: 'flex-start',
        textAlign: 'left',
        color: '#38231c'
    },
    input: {
        height: 30,
        paddingLeft: 5,
        paddingBottom: 0,
        textAlignVertical: 'top',
        fontSize: 16,
        lineHeight: 20,
        textDecorationLine: 'none',
    },
})

export default DailyMealForm