import { ButtonMain, ButtonMark, GroupButtons } from '../../components/Buttons'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { refreshSetting, updateExercise } from '../../store/actions/settings/settins.actions';
import { useDispatch, useSelector } from 'react-redux';

interface ExerciseProps{
    navigation: any,
}

const Exercise: React.FC<ExerciseProps> = ({ navigation}) => {
    const dispatch = useDispatch();
    const { settings } = useSelector(state => state);
    const [option, setOption] = useState<string>(settings.exercise || "")

    const handleOnPressOption = (optionSelected: string) => {
        setOption(optionSelected)
    }

    const handleOnPressSave = () => {
        dispatch(updateExercise(option))
        dispatch(refreshSetting(settings.id, {exercise: option}))
        navigation.navigate("Settings")
    }

    return (
        <View style={styles.stepContainer}>
            <Text style={styles.description}>Realizas actividad fisica? Cuantas veces a la semana?</Text>
            <View style={styles.formContainer}>
                    <ButtonMark title="Sedentario" check={option === "sendetary"} onPress={() => handleOnPressOption("sendetary")} />
                    <ButtonMark title="2 veces por semana" check={option === "low_exercise"} onPress={() => handleOnPressOption("low_exercise")} />
                    <ButtonMark title="3 a 4 veces por semana" check={option === "medium_exercise"} onPress={() => handleOnPressOption("medium_exercise")} />
                    <ButtonMark title="5 a 6 veces por semana" check={option === "highly_exercise"} onPress={() => handleOnPressOption("highly_exercise")} />
                    <ButtonMark title="Todos los días" check={option === "vigorous_exercise"} onPress={() => handleOnPressOption("vigorous_exercise")} />
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