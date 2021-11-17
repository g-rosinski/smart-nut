import { ButtonMain, ButtonMark, GroupButtons } from '../../../components/Buttons'
import { NativeSyntheticEvent, NativeTouchEvent, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import { Setting } from '../../../App'

interface ObjectiveStepProps{
    onPressContinue(values: Setting, event: NativeSyntheticEvent<NativeTouchEvent>): void,
    objective?: string
}

const ObjectiveStep: React.FC<ObjectiveStepProps> = ({onPressContinue, objective}) => {
    const [option, setOption] = useState<string>(objective || "")

    const handleOnPressObjective = (option: string) => {
        setOption(option)
    }
    return (
        <View style={styles.stepContainer}>
            <Text style={styles.title}>Objetivo</Text>
            <Text style={styles.description}>Seleccione un objetivo deseable</Text>
            <View style={styles.formContainer}>
                <ButtonMark title="Perder peso" check={option === "lost_weight"} onPress={() => handleOnPressObjective("lost_weight")} />
                <ButtonMark title="Mantener peso" check={option === "keep_weight"} onPress={() => handleOnPressObjective("keep_weight")} />
                <ButtonMark title="Ganar peso" check={option === "gain_weight"} onPress={() => handleOnPressObjective("gain_weight")} />
            </View>
            <GroupButtons>
                <ButtonMain title="Continuar" onPress={e => onPressContinue({objective: option}, e)} disabled={!option} />
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
        textAlign: 'center',
        color: '#333333'
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

export default ObjectiveStep