import { ActivityIndicator, StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import { fetchDaily, fetchDailys } from '../../store/actions/daily/daily.actions';
import { useDispatch, useSelector } from 'react-redux';

import { ButtonRefresh } from '../../components/Buttons';
import { Container } from '../../components/Containers';
import { DailyModel } from '../../types/models';
import { ID } from '../../types';
import { MealList } from '../../components/Meal';
import colors from '../../contants/colors';
import { todayTitle } from '../../utils/parser';

const Daily: React.FC<any> = ({ route, navigation}) => {
  const dispatch  = useDispatch()
  const {settings, project} = useSelector(state => state);
  useEffect(() => {
    if(settings.id){
      dispatch(fetchDailys(settings.id))
    }
  }, []);

  const handlePresRefresh = () => {
    dispatch(fetchDailys(settings.id))
  }

  return (
    <View style={styles.container}>
      <Container>
        <View style={styles.row}>
          { project.loading ? <ActivityIndicator color={colors.copper} /> : <ButtonRefresh onPress={handlePresRefresh} asButton={false} />}
        </View>
        { project.loading ?
          <ActivityIndicator size="large" color={colors.copper} style={styles.loading} />
         :
          <>{project.dailys.map((daily:Required<DailyModel> & {id:ID}) => (
            <MealList 
              key={daily.id}
              title={todayTitle(daily.date)}
              meals={daily.meals}
              onPressAdd={ console.log }
              onPressDeleteItem={console.log}
              daily_kcal={daily.daily_kcal}
              total_meal_kcal={daily.total_meal_kcal}
              editable={false}
            />
          ))}
          </>
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