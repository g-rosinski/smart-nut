import { Image, NativeSyntheticEvent, NativeTouchEvent, StyleSheet, View, ViewStyle, } from 'react-native'
import { Para, Title } from '../../Texts'

import { ButtonDelete } from '../../Buttons'
import { ID } from '../../../types'
import React from 'react'

interface MealListItemProps{
    onPressDelete(id: ID): void,
    index: ID,
    image_url: string,
    name?: string,
    kcal?: number,
    style?: ViewStyle
    editable?: boolean
}

const MealListItem: React.FC<MealListItemProps> = ({editable, style, index, image_url, kcal, name, onPressDelete}) => (
    <View style={style || styles.meal_container}>
        <Image style={styles.meal_image} source={{ uri: image_url }} />
        <View style={styles.meal_body}>
            <Title style={styles.meal_name}>{name}</Title>
            <Para style={styles.meal_description}>{kcal} kcal</Para>
        </View>
        { editable && 
            <View style={styles.meal_footer}>
                <ButtonDelete onPress={() => onPressDelete(index)} />
            </View>
        }
    </View>
)

const styles = StyleSheet.create({
    meal_container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: "100%",
        paddingVertical: 10,
        borderTopWidth: 1,
        borderColor: '#dfdfdf'
    },
    meal_body: {
        justifyContent: 'flex-start',
        flexDirection: 'column',
        paddingBottom: 5,
    },
    meal_description: {
        textAlign: 'left',
    },
    meal_footer: {
        marginLeft: "auto",
        marginRight: 0,
    },
    meal_name: {
        textAlign: 'left',
        fontSize: 16
    },
    meal_image: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10
    },
})

MealListItem.defaultProps = {
    editable: true
}

export default MealListItem