import { ButtonMain, ButtonMark, ButtonSecondary, GroupButtons } from '../../../components/Buttons'
import { NativeSyntheticEvent, NativeTouchEvent, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

import Input from '../../../components/Input.component'
import InputGroup from '../../../components/InputGroup.component'
import Label from '../../../components/Label.component'
import { Setting } from '../../../App'

interface MeasureStepProps{
    onPressContinue(values: Setting, event: NativeSyntheticEvent<NativeTouchEvent>): void,
    onPressBack(event: NativeSyntheticEvent<NativeTouchEvent>): void,
    measures: Setting
}

const MeasureStep: React.FC<MeasureStepProps> = ({onPressContinue, onPressBack, measures}) => {
    const [height, setHeight] = useState<string>(measures.height || "")
    const [weight, setWeight] = useState<string>(measures.weight || "")
    const [age, setAge] = useState<string>(measures.age || "")

    return (
        <View style={styles.stepContainer}>
            <Text style={styles.title}>Medidas</Text>
            <Text style={styles.description}>Por favor ingrese sus datos para armar un plan a tu medida</Text>
            <View style={styles.formContainer}>
                <InputGroup>
                    <Label text="Edad" />
                    <Input value={age} onChangeText={ setAge } keyboardType='numeric' />
                </InputGroup>
                <InputGroup>
                    <Label text="Altura" />
                    <Input value={height} onChangeText={ setHeight } keyboardType='decimal-pad' />
                </InputGroup>
                <InputGroup>
                    <Label text="Peso" />
                    <Input value={weight} onChangeText={ setWeight } keyboardType='decimal-pad' />
                </InputGroup>
            </View>
            <GroupButtons>
                <ButtonSecondary title="Volver" onPress={onPressBack} />
                <ButtonMain title="Continuar"
                    onPress={e => onPressContinue({age: age, weight: weight, height: height}, e)} 
                    disabled={!Boolean(age?.length) || !Boolean(height?.length) || !Boolean(weight?.length)} 
                />
            </GroupButtons>
        </View>
    )
}

const styles = StyleSheet.create({
    stepContainer: {
        paddingHorizontal: 30,
        paddingVertical: 15,
    },
    formContainer: {
        paddingHorizontal: 30,
        paddingVertical: 15,
    },
    title: {
        fontSize: 20,
        fontWeight: '400',
        textAlign: 'center'
    },
    description: {
        fontSize: 16,
        fontWeight: '400',
        textAlign: 'left',
        color: '#333333',
        marginHorizontal: 30,
        marginVertical: 5
    },
})


export default MeasureStep