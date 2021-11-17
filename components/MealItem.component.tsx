import { StyleSheet, Text, View } from 'react-native'

import ButtonMain from './Buttons/ButtonMain.component'
import ButtonSecondary from './Buttons/ButtonSecondary.component'
import React from 'react'

interface MealItemProps{
    meal: Meal,
    onPressRemove(id:number): void
    onPressReady(id:number): void,
    ready?: boolean,
}

export type Meal = {
    id:number,
    name:string
  }

const MealItem: React.FC<MealItemProps> = ({meal, ready,  onPressRemove, onPressReady}) => (
    <View key={meal.id} style={styles.container}>
        <Text style={styles.label}>{meal.name}</Text>
        <View style={styles.group_buttons}>
            {ready?
                <Text style={styles.label_disabled}>Listo</Text>
            :
                <>
                    <ButtonMain title="Listo" onPress={ () => onPressReady(meal.id) } />
                    <ButtonSecondary title="Eliminar" onPress={ () => onPressRemove(meal.id) } />
                </>
        }
        </View>
    </View>
)

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        borderTopColor: '#616161',
        borderTopWidth: 1,
        borderStyle: 'solid',
        paddingVertical: 10
    },
    label: {
        fontSize: 16,
        lineHeight: 40,
        textTransform: 'capitalize',
        fontWeight: '700',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#38231c',
        marginRight: 30
    },
    label_disabled: {
        fontSize: 16,
        lineHeight: 40,
        textTransform: 'capitalize',
        fontWeight: '700',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#818181',
        marginRight: 30
    },
    group_buttons: {
        flexDirection: 'row',
        width: 210,
        justifyContent: 'space-between',
      },
})

MealItem.defaultProps = {
    ready: false
}

export default MealItem