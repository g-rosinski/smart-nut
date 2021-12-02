import { ButtonMain, ButtonMark, GroupButtons } from '../../components/Buttons'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';

import { updateExercise } from '../../store/actions/settings/settins.actions';

interface ExerciseProps{
    navigation: any,
}

const Exercise: React.FC<ExerciseProps> = ({ navigation}) => {
    const dispatch = useDispatch();
    const exercise = useSelector(state => state?.settings?.exercise);
    const [option, setOption] = useState<string>(exercise || "")

    const handleOnPressOption = (optionSelected: string) => {
        setOption(optionSelected)
    }

    const handleOnPressSave = () => {
        dispatch(updateExercise(option))
        navigation.navigate("Settings")
    }

    return (
        <View style={styles.stepContainer}>
            <Text style={styles.description}>Realizas actividad fisica? Cuantas veces a la semana?</Text>
            <View style={styles.formContainer}>
                    <ButtonMark title="Sedentario" check={option === "none"} onPress={() => handleOnPressOption("none")} />
                    <ButtonMark title="2 veces por semana" check={option === "twice"} onPress={() => handleOnPressOption("twice")} />
                    <ButtonMark title="Mas de 2 veces por semana" check={option === "sport"} onPress={() => handleOnPressOption("sport")} />
                    <ButtonMark title="5 a 7 veces por semana" check={option === "atlethic"} onPress={() => handleOnPressOption("atlethic")} />
                </View>
            <GroupButtons>
                <ButtonMain title="Guardar cambios" onPress={ handleOnPressSave } disabled={!option} />
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

export default Exercise