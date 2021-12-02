import { ButtonMain, ButtonMark } from '../../components/Buttons'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';

import { updateObjective } from '../../store/actions/settings/settins.actions';

interface ObjectiveProps{
    navigation: any,
    route: any,
}

const Objective: React.FC<ObjectiveProps> = ({navigation, route}) => {
    const dispatch = useDispatch();
    const objective = useSelector(state => state?.settings?.objective);
    const [option, setOption] = useState<string>(objective || "")

    const handleOnPressObjective = (optionSelected: string) => {
        setOption(optionSelected)
    }
    
    const handleOnPressSave = () => {
        dispatch(updateObjective(option))
        navigation.navigate("Settings")
    }
    
    return (
        <View style={styles.stepContainer}>
            <Text style={styles.description}>Seleccione un objetivo deseable</Text>
            <View style={styles.formContainer}>
                <ButtonMark title="Perder peso" check={option === "lost_weight"} onPress={() => handleOnPressObjective("lost_weight")} />
                <ButtonMark title="Mantener peso" check={option === "keep_weight"} onPress={() => handleOnPressObjective("keep_weight")} />
                <ButtonMark title="Ganar peso" check={option === "gain_weight"} onPress={() => handleOnPressObjective("gain_weight")} />
            </View>
            <ButtonMain title="Guardar cambios" onPress={ handleOnPressSave } disabled={!option} />
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

export default Objective