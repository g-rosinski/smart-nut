import { ButtonMain, ButtonMark } from '../../components/Buttons'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { refreshSetting, updateObjective } from '../../store/actions/settings/settins.actions';
import { useDispatch, useSelector } from 'react-redux';

interface ObjectiveProps{
    navigation: any,
}

const Objective: React.FC<ObjectiveProps> = ({navigation}) => {
    const dispatch = useDispatch();
    const { settings } = useSelector(state => state);
    const [option, setOption] = useState<string>(settings.objective || "")

    const handleOnPressObjective = (optionSelected: string) => {
        setOption(optionSelected)
    }
    
    const handleOnPressSave = () => {
        dispatch(updateObjective(option))
        dispatch(refreshSetting(settings.id, {objective: option}))
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