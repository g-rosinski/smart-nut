import { ButtonMain, GroupButtons } from '../../components/Buttons'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Input from '../../components/Input.component'
import InputGroup from '../../components/InputGroup.component'
import Label from '../../components/Label.component'
import { Setting } from '../GetStarted/GetStarted.component'

interface MeasureProps{
    measures?: Setting,
    navigation: any,
    route: any,
}


const Measure: React.FC<MeasureProps> = ({ measures, navigation, route}) => {
    const [height, setHeight] = useState<string>(route.params.height || "")
    const [weight, setWeight] = useState<string>(route.params.weight || "")
    const [age, setAge] = useState<string>(route.params.age || "")

    return (
        <View style={styles.stepContainer}>
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
                <ButtonMain title="Guardar cambios"
                    onPress={e => navigation.navigate("Settings",{age: age, weight: weight, height: height})} 
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


export default Measure