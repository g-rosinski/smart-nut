import { FlatList, NativeSyntheticEvent, NativeTouchEvent, StyleSheet, Text, View, ViewStyle } from 'react-native'
import { Para, Title } from '../../Texts'

import { ButtonAdd } from '../../Buttons'
import { CardContainer } from '../../Containers'
import { ID } from '../../../types'
import { Ionicons } from '@expo/vector-icons';
import { MealListItem } from '..'
import { MealModel } from '../../../types/models'
import React from 'react'
import colors from '../../../contants/colors';

interface MealListProps{
    onPressAdd(event: NativeSyntheticEvent<NativeTouchEvent>): void,
    onPressDeleteItem(id: ID): void,
    meals: MealModel[],
    style?: ViewStyle
    title?: string,
    editable?: boolean,
    daily_kcal?: number,
    total_meal_kcal?: number
}

const MealList: React.FC<MealListProps> = ({editable, style, title, daily_kcal, total_meal_kcal, onPressAdd, meals, onPressDeleteItem}) => (
    <CardContainer style={style || styles.meal_container}>
        <View style={styles.meal_header}>
            { title && <Title style={styles.meal_title}>{title}</Title>}
            <Para style={styles.kcal_title}>{total_meal_kcal} / {daily_kcal} kcal</Para>
        </View>
        <View style={styles.meal_body}>
            {meals.length > 0 &&
                <FlatList
                    data={meals}
                    // keyExtractor={item => String(item.id)}
                    renderItem={({item, index}) => (<MealListItem onPressDelete={onPressDeleteItem} index={index} {...item} />)}
                />
            }
            {!editable && !meals.length && (
                <View style={styles.row}>
                    <Ionicons name="md-information-circle" size={26} color={ colors.copper } style={styles.icon} />
                    <Para style={styles.message_info}>No se cargaron alimentos para este día.</Para>
                </View>
            )}
        </View>
        { editable && 
            <View style={styles.meal_footer}>
                <ButtonAdd onPress={onPressAdd} title='Agrega alimento' />
            </View>
        }
    </CardContainer>
)

MealList.defaultProps = {
    daily_kcal: 0,
    total_meal_kcal: 0
}

const styles = StyleSheet.create({
    meal_container: {
        paddingVertical: 15,
    },
    message_info: {
        textAlign: 'left',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
      },
    icon: {
        paddingRight: 5,
        paddingBottom: 2
    },
    meal_header: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        paddingBottom: 5,
        marginBottom: 10,
    },
    meal_footer: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginTop: 10,
    },
    meal_body: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    meal_title: {
        textAlign: 'left',
    },
    kcal_title: {
        marginLeft: 'auto',
        textAlign: 'left',
    },
})

MealList.defaultProps = {
    editable: true
}

export default MealList