import { StyleSheet, View } from 'react-native';

import { ButtonMain } from '../../components/Buttons';
import { EditableSection } from '../../components/Containers';
import Label from '../../components/Label.component';
import React from 'react';

const translation = (key:string|undefined):string => {
    if(!key) return "-"

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

const PlanSettings: React.FC<any> = ({navigation, route}) => {
    
    const settings= {
        objective: "",
        age: "",
        height: "",
        weight: "",
        exercise: "",
        ...route.params
    }
      
    return (
    <View style={styles.container}>
        <EditableSection onPressEdit={() => navigation.navigate("Objetive", settings)}>
            <Label text={`Objetivo: ${translation(settings.objective)}`} />
        </EditableSection>
        <EditableSection onPressEdit={() => navigation.navigate("Measure", settings)}>
            <Label text={`Edad: ` + (settings.age.length? `${settings.age} años` : "-")} />
            <Label text={`Peso: ` + (settings.weight.length? `${settings.weight} kg` : "-")} />
            <Label text={`Altura: ` + (settings.height.length? ` ${settings.height} cm` : "-")} />
        </EditableSection>
        <EditableSection onPressEdit={() => navigation.navigate("Exercise", settings)}>
            <Label text={`Actividad fisica: ${translation(settings.exercise)}`} />
        </EditableSection>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    height: '100%'
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
  }
});

export default PlanSettings