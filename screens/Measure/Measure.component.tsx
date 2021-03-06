import { ButtonMain, GroupButtons } from '../../components/Buttons'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { refreshSetting, updateMeasures } from '../../store/actions/settings/settins.actions'
import { useDispatch, useSelector } from 'react-redux'

import Input from '../../components/Input.component'
import InputGroup from '../../components/InputGroup.component'
import Label from '../../components/Label.component'

interface MeasureProps{
    navigation: any,
}


const Measure: React.FC<MeasureProps> = ({ navigation}) => {
    const dispatch = useDispatch();
    const { settings } = useSelector(state => state);
    const [height, setHeight] = useState<string>(String(settings.height) || "")
    const [weight, setWeight] = useState<string>(String(settings.weight) || "")
    const [age, setAge] = useState<string>(String(settings.age) || "")

    const handleOnPressSave = () => {
        dispatch(updateMeasures({age: age, weight: weight, height: height}))
        dispatch(refreshSetting(settings.id, {age: Number(age), weight: Number(weight), height: Number(height)}))
        navigation.navigate("Settings")
    }

    return (
        <View style={styles.stepContainer}>
            <Text style={styles.description}>Por favor ingrese sus datos para armar un plan a tu medida</Text>
            <View style={styles.formContainer}>
                <InputGroup>
                    <Label text="Edad" />
                    <Input value={age} onChangeText={ setAge } keyboardType='number-pad' />
                </InputGroup>
                <InputGroup>
                    <Label text="Altura (cm)" />
                    <Input value={height} onChangeText={ setHeight } keyboardType='number-pad' />
                </InputGroup>
                <InputGroup>
                    <Label text="Peso (kg)" />
                    <Input value={weight} onChangeText={ setWeight } keyboardType='decimal-pad' />
                </InputGroup>
            </View>
            <GroupButtons>
                <ButtonMain title="Guardar cambios"
                    onPress={handleOnPressSave} 
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