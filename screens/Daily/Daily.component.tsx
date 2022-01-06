import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { ButtonNext, ButtonPrev, ButtonRefresh } from '../../components/Buttons';
import { Para, Title } from '../../components/Texts';
import React, { useEffect } from 'react';
import { clearDay, createDay, fetchDaily, updateMeals } from '../../store/actions/daily/daily.actions';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from '../../components/Containers';
import { ID } from '../../types';
import { MealList } from '../../components/Meal';
import { MealModel } from '../../types/models';
import calculateDailyKcal from '../../services/caloricService';
import colors from '../../contants/colors';
import { todayTitle } from '../../utils/parser';

const Daily: React.FC<any> = ({ route, navigation}) => {
  const dispatch  = useDispatch()
  const { dayNumber } = route.params
  const {settings, daily} = useSelector(state => state);
  const dailyKcal  = calculateDailyKcal("m", Number(settings.age), Number(settings.weight), settings.exercise)
  const formattedDate = todayTitle(dayNumber)
  useEffect(() => {
    if(settings.id){
      dispatch(fetchDaily(settings.id, dayNumber))
    }
  }, []);
  
  useEffect(() => {
    if(!daily.loading && !daily.id){
      dispatch(createDay({
        updated_at: Date.now(),
        created_at: Date.now(),
        meals: [],
        daily_kcal: dailyKcal,
        total_meal_kcal: 0,
        settings_id: settings.id,
        date: dayNumber,
      }));
    }
  }, [daily]);

  const handlePresRefresh = () => {
    dispatch(fetchDaily(settings.id, dayNumber))
  }
  const handlePressAdd = () => {
    navigation.navigate("Meal",{daily_id: daily.id, dayNumber: dayNumber})
  }
  const handlePressDelete = (id: ID) => {
    const meals:MealModel[] = daily.meals.filter((meal: MealModel, index:number) => index !== id) 
    dispatch(updateMeals(daily.id, meals))
  }

  const handleOnPressPrev = () => {
    const date = new Date(dayNumber)
    date.setDate(date.getDate() - 1)
    dispatch(fetchDaily(settings.id, date.getTime()))
    navigation.navigate("Daily",{dayNumber: date.getTime()})
  }
  const handleOnPressNext = () => {
    const date = new Date(dayNumber)
    date.setDate(date.getDate() + 1)
    dispatch(fetchDaily(settings.id, date.getTime()))
    navigation.navigate("Daily",{dayNumber: date.getTime()})
  }

  return (
    <View style={styles.container}>
      <Container>
        <View style={styles.row}>
          <ButtonPrev onPress={handleOnPressPrev} />
          <Title style={styles.daily_title}>{formattedDate}</Title>
          <ButtonNext onPress={handleOnPressNext} />
        </View>
        <View style={styles.row}>
          <Para style={styles.daily_description}>Objetivo diario: {daily.total_meal_kcal} / {dailyKcal} kcal</Para>
          { daily.loading ? <ActivityIndicator color={colors.copper} /> : <ButtonRefresh onPress={handlePresRefresh} asButton={false} />}
        </View>
        { daily.loading ?
          <ActivityIndicator size="large" color={colors.copper} style={styles.loading} />
         :
          <MealList 
            title={"Comidas"}
            meals={daily.meals}
            onPressAdd={handlePressAdd}
            onPressDeleteItem={handlePressDelete}
          />
        }
      </Container>
    </View>
  );
}

const styles = StyleSheet.create({
    loading:{
      marginVertical: 100,
    },
    container: {
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'column',
      height: '100%',
      minHeight: 100
    },
    row: {
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      paddingVertical: 5
    },
    daily_title: {
      marginBottom: 15,
      fontSize: 24
    },
    daily_description: {
      marginBottom: 5,
      fontSize: 16
    }
});

export default Daily