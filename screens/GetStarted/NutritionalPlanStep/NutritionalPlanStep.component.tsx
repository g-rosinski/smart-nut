import { ButtonMain, ButtonSecondary, GroupButtons } from '../../../components/Buttons'
import { NativeSyntheticEvent, NativeTouchEvent, StyleSheet, Text, View } from 'react-native'

import Label from '../../../components/Label.component'
import React from 'react'
import { Setting } from '../GetStarted.component'

interface NutritionalPlanStepProps{
    settings: Setting,
    onPressRestart(event: NativeSyntheticEvent<NativeTouchEvent>): void,
    onPressConfirm(event: NativeSyntheticEvent<NativeTouchEvent>): void,
}

const NutritionalPlanStep: React.FC<NutritionalPlanStepProps> = ({settings, onPressRestart, onPressConfirm}) => {

    const translation = (key:string|undefined):string => {
        if(!key) return ""

        const translate = {
            none: "Sedentario",
            twice: "2 veces por semana",
            sport: "Mas de 2 veces por semana",
            atlethic: "5 a 7 veces por semana",
            lost_weight: "Perder peso",
            keep_weight: "Mantener peso",
            gain_weight: "Ganar peso",
        }
        return translate[key];
    }

    return (
        <View style={styles.stepContainer}>
            <Text style={styles.title}>Plan nutricional</Text>
            <Text style={styles.description}>Proximamente organizaremos tu plan en base a tus datos.</Text>
            <View style={styles.reportContainer}>
                <Label text={`Objetivo: ${translation(settings.objective)}`} />
                <Label text={`Edad: ${settings.age} años`} />
                <Label text={`Peso: ${settings.weight} kg`} />
                <Label text={`Altura: ${settings.height} cm`} />
                <Label text={`Actividad fisica: ${translation(settings.exercise)}`} />
            </View>
            <Text style={styles.description}>En caso que quieras comenzar de vuelta puedes reiniciar</Text>
            <GroupButtons>
                <ButtonSecondary title="Reiniciar" onPress={onPressRestart} />
                <ButtonMain title="Confirmar" onPress={onPressConfirm} />
            </GroupButtons>
        </View>
    )
}

const styles = StyleSheet.create({
    stepContainer: {
        paddingHorizontal: 30,
        paddingVertical: 15,
    },
    reportContainer: {
        paddingHorizontal: 30,
        paddingVertical: 15,
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
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

export default NutritionalPlanStep