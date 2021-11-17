import { ExerciseStep, MeasureStep, NutritionalPlanStep, ObjectiveStep } from './screens/GetStarted';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppLoading from 'expo-app-loading';
import Header from './components/Header/Header.component';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

export interface Setting{
  objective?: string,
  age?: string,
  height?: string,
  weight?: string,
  exercise?: string,
}

const initialSetting:Setting = {
  objective: "",
  age: "",
  height: "",
  weight: "",
  exercise: "",
}

export default function App() {
  const [loaded] = useFonts({
    RubikRegular: require('./assets/fonts/Rubik/static/Rubik-Regular.ttf'),
    RubikBold: require('./assets/fonts/Rubik/static/Rubik-Bold.ttf')
  });
  const [currentStep, setCurrentStep] = useState<number>(1)
  const [settings, setSettings] = useState<Setting>(initialSetting)

  if(!loaded) return <AppLoading />

  const handlePressContinue = (values: Setting, e) => {
    const nextStep = currentStep + 1
    setSettings({...settings, ...values})
    if(nextStep <= 4){
      setCurrentStep(nextStep)
    }
  }

  const handlePressBack = () => {
    const nextStep = currentStep - 1
    if(nextStep > 0){
      setCurrentStep(nextStep)
    }
  }

  const handleRestart = () => {
    setCurrentStep(1)
    setSettings(initialSetting)
  }

  const renderCurrentStep = () => {
    switch(currentStep){
      case 1: return <ObjectiveStep onPressContinue={handlePressContinue} objective={settings.objective} />; break;
      case 2: return <MeasureStep onPressContinue={handlePressContinue} onPressBack={handlePressBack} measures={settings} />; break;
      case 3: return <ExerciseStep onPressContinue={handlePressContinue} onPressBack={handlePressBack} exercise={settings.exercise} />; break;
      case 4: return <NutritionalPlanStep settings={settings} onPressRestart={handleRestart} />; break;
    }
  }


  return (
    <View style={styles.container}>
      <Header>
        <Text style={styles.title_app}>Smart Nut</Text>
      </Header>
      { renderCurrentStep() }
      <StatusBar style="auto" />
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
  title_app: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
    fontFamily: 'RubikBold'
  }
});
