import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { fetchSetting, newSetting, refreshSetting } from '../../store/actions/settings/settins.actions';
import { useDispatch, useSelector } from 'react-redux';

import { EditableSection } from '../../components/Containers';
import Label from '../../components/Label.component';
import translate from '../../utils/translate';

const PlanSettings: React.FC<any> = ({navigation}) => {
  const dispatch = useDispatch();
  const settings = useSelector(state => state?.settings);
  useEffect(() => {
    dispatch(fetchSetting());
    if(!settings.id){
      dispatch(newSetting({}))
    }
}, []);
      
  return (
    <View style={styles.container}>
        <EditableSection onPressEdit={() => navigation.navigate("Objetive")}>
            <Label text={`Objetivo: ${translate(settings.objective)}`} />
        </EditableSection>
        <EditableSection onPressEdit={() => navigation.navigate("Measure")}>
            <Label text={`Edad: ` + (settings.age.length? `${settings.age} años` : "-")} />
            <Label text={`Peso: ` + (settings.weight.length? `${settings.weight} kg` : "-")} />
            <Label text={`Altura: ` + (settings.height.length? ` ${settings.height} cm` : "-")} />
        </EditableSection>
        <EditableSection onPressEdit={() => navigation.navigate("Exercise")}>
            <Label text={`Actividad fisica: ${translate(settings.exercise)}`} />
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