import { FlatList, Keyboard, Modal, StyleSheet, Text, View } from 'react-native';
import MealItem, { Meal } from './components/MealItem.component';
import React, { useState } from 'react';

import ButtonMain from './components/Buttons/ButtonMain.component';
import ButtonSecondary from './components/Buttons/ButtonSecondary.component';
import { DailyMealForm } from './components/Header/Forms';
import Header from './components/Header/Header.component';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [newMeal, setNewMeal] = useState<string>("")
  const [meals, setMeals] = useState<Meal[]>([])
  const [mealSelected, setMealSelected] = useState<Meal>()
  const [mealReady, setMealReady] = useState<Meal[]>([])
  const [displayModal, setDisplayModal] = useState<string>("")
  
  const handleOnChangeText = (value:string) => setNewMeal(value)
  const handleOnPressAdd = () => {
    if(newMeal){
      const meal = {
        name: newMeal,
        id: Math.random()
      }
      setMeals([...meals, meal])
      setNewMeal("")
    }
    Keyboard.dismiss()
  }

  const openRemoveMealModal = (id:number) => {
    setDisplayModal("remove")
    setMealSelected(meals.find(meal => meal.id == id))
  }
  const openReadyMealModal = (id:number) => {
    setDisplayModal("ready")
    setMealSelected(meals.find(meal => meal.id == id))
  }

  const handleOnPressRemove = (id:number) => {
    setMeals(meals.filter(meal => meal.id !== id))
    setMealSelected(undefined)
    setDisplayModal("")
  }

  const handleOnPressReady = (id:number) => {
    const markedMeal = meals.find(meal => meal.id === id)
    setMealReady(markedMeal? [...mealReady,markedMeal] : mealReady)
    setMealSelected(undefined)
    setDisplayModal("")
  }

  return (
    <View style={styles.container}>
      <Header>
        <Text style={styles.title_app}>Smart Nut</Text>
      </Header>
      <DailyMealForm value={ newMeal } onChangeInput={ handleOnChangeText } onPressAdd={ handleOnPressAdd } />
      <FlatList 
        style={styles.list}
        data={meals} 
        keyExtractor={item => item.id.toString()} 
        renderItem={({item}: {item: Meal}) => <MealItem 
          meal={item} 
          ready={mealReady.includes(item)}
          onPressRemove={ openRemoveMealModal } 
          onPressReady={ openReadyMealModal }
          />
        } 
      />
      <Modal visible={displayModal==="remove"} animationType="slide">
        <View>
          <View style={styles.modal_body}>
            <Text style={styles.title_coder}>{`Quiere borrar la comida ' ${mealSelected?.name} ' del dia de hoy ?`}</Text>
          </View>
          <View style={styles.group_buttons}>
            <ButtonSecondary title="Cancelar"  onPress={ () => setDisplayModal("") } />
            <ButtonMain title="Aceptar" onPress={ () => handleOnPressRemove(mealSelected?.id ? mealSelected.id : 1) } />
        </View>
        </View>
      </Modal>
      <Modal visible={displayModal==="ready"} animationType="slide">
        <View>
          <View style={styles.modal_body}>
            <Text style={styles.title_coder}>{`Quiere marcar la comida ' ${mealSelected?.name} ' como listo ?`}</Text>
          </View>
          <View style={styles.group_buttons}>
            <ButtonSecondary title="Cancelar"  onPress={ () => setDisplayModal("") } />
            <ButtonMain title="Aceptar" onPress={ () => handleOnPressReady(mealSelected?.id ? mealSelected.id : 1) } />
        </View>
        </View>
      </Modal>
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
    fontWeight: '400',
    color: '#fff'
  },
  title_coder: {
    fontSize: 18,
    fontWeight: '700',
    alignItems: 'center',
    color: '#38231c'
  },
  modal_body: {
    padding: 15,
  },
  group_buttons: {
    flexDirection: 'row',
    width: 400,
    justifyContent: 'space-around',
  },
  list:{
    width: '100%',
    paddingHorizontal: 15,
  }
});
