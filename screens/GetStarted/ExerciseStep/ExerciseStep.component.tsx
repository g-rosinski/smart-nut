import { ButtonMain, ButtonMark, ButtonSecondary, GroupButtons } from '../../../components/Buttons'
import { NativeSyntheticEvent, NativeTouchEvent, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import { Setting } from '../../../App'

interface ExerciseStepProps{
    onPressContinue(values: Setting, event: NativeSyntheticEvent<NativeTouchEvent>): void,
    onPressBack(event: NativeSyntheticEvent<NativeTouchEvent>): void,
    exercise?: string
}

const ExerciseStep: React.FC<ExerciseStepProps> = ({onPressContinue, onPressBack, exercise}) => {
    const [option, setOption] = useState<string>(exercise || "")

    const handleOnPressOption = (option: string) => {
        setOption(option)
    }
    return (
        <View style={styles.stepContainer}>
            <Text style={styles.title}>Actividad fisica</Text>
            <Text style={styles.description}>Realizas actividad fisica? Cuantas veces a la semana?</Text>
            <View style={styles.formContainer}>
                    <ButtonMark title="Sedentario" check={option === "none"} onPress={() => handleOnPressOption("none")} />
                    <ButtonMark title="2 veces por semana" check={option === "twice"} onPress={() => handleOnPressOption("twice")} />
                    <ButtonMark title="Mas de 2 veces por semana" check={option === "sport"} onPress={() => handleOnPressOption("sport")} />
                    <ButtonMark title="5 a 7 veces por semana" check={option === "atlethic"} onPress={() => handleOnPressOption("atlethic")} />
                </View>
            <GroupButtons>
                <ButtonSecondary title="Volver" onPress={onPressBack} />
                <ButtonMain title="Finalizar" onPress={e => onPressContinue({exercise: option}, e)} disabled={!option} />
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

export default ExerciseStep