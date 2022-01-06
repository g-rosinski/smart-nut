import { ButtonMain, ButtonSecondary, GroupButtons } from '../../components/Buttons'
import { Keyboard, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getAutocompleteMeals, getMeal } from '../../services/api/nutrition';
import { useDispatch, useSelector } from 'react-redux'

import Autocomplete from 'react-native-autocomplete-input';
import { AxiosResponse } from 'axios';
import ImageSelector from '../../components/ImageSelector.component'
import Input from '../../components/Input.component'
import InputGroup from '../../components/InputGroup.component'
import Label from '../../components/Label.component'
import { MealModel } from '../../types/models'
import { saveMeal } from '../../store/actions/daily/daily.actions'
import theme from '../../contants/theme';

interface MealCreateProps{
    navigation: any,
}

const MealCreate: React.FC<MealCreateProps> = ({route, navigation}) => {
    const { daily_id, dayNumber } = route.params;
    const dispatch = useDispatch();
    const {daily} = useSelector(state => state);
    const [image, setImage] = useState<string | undefined>(undefined)
    const [name, setName] = useState<string>("")
    const [kcal, setKcal] = useState<number>(0)
    const [queryMeal, setQueryMeal] = useState<string>("")
    const [autocompleteData, setAutocompleteData] = useState<string[]>([])
    const [autocompleteFocus, setAutocompleteFocus] = useState<boolean>(false)

    const handleOnPressSave = () => {
        const meal: MealModel = {
            name: name,
            kcal: kcal,
            image_url: image? image : "",
            created_at: Date.now(),
            updated_at: Date.now()
        }
        dispatch(saveMeal(daily_id, meal, daily.meals))
        navigation.navigate("Daily", {dayNumber: dayNumber})
    }
    const handleOnPressReset = () => {
        setImage("")
        setName("")
        setKcal(0)
    }
    const handleOnSelectMeal = (mealName:string) => {
        Keyboard.dismiss()
        setQueryMeal("")
        getMeal({ingr: mealName, nutritionType: 'logging'}).then((response:AxiosResponse) => {
            const [meal] = response.data.hints
            const {image, label, nutrients} = meal.food
            setImage(image)
            setName(label)
            setKcal(nutrients.ENERC_KCAL)
        })
    }
    useEffect(() => {
        if(queryMeal.length > 2){
            const limit = 5
            getAutocompleteMeals(queryMeal, {limit: limit}).then((response:AxiosResponse) => {
                setAutocompleteData(response.data.slice(0, limit))
            })
        }{
            setAutocompleteData([])
        }
    }, [queryMeal]);

    return (
        <SafeAreaView>
            <View style={styles.stepContainer}>
                <Text style={styles.description}>Busque el alimento o ingreselo manualmente</Text>
                <View style={styles.formContainer}>
                    <InputGroup style={styles.autocompleteGroup}>
                        <View style={styles.autocompleteContainer}>
                            <Autocomplete
                                inputContainerStyle={[styles.autocompleteInput, autocompleteFocus? styles.autocompleteInputFocus : null]}
                                data={autocompleteData}
                                value={queryMeal}
                                hideResults={!autocompleteFocus}
                                onBlur={() => setAutocompleteFocus(false)}
                                onFocus={() => setAutocompleteFocus(true)}
                                onChangeText={setQueryMeal}
                                autoCorrect={false}
                                placeholder={'Ejemplo: ice cream, coffee'}
                                flatListProps={{
                                    keyExtractor: (item, index) => String(index),
                                    keyboardShouldPersistTaps: 'always',
                                    renderItem: ({ item }) => (
                                    <TouchableOpacity onPress={() => handleOnSelectMeal(item)}>
                                        <Text style={styles.autocompleteOption}>{item}</Text>
                                    </TouchableOpacity>
                                    ),
                                }}
                            />
                        </View>
                    </InputGroup>
                    <InputGroup>
                        <Label text="Imagen" />
                        <ImageSelector onSelectImage={setImage} imageUrl={image} />
                    </InputGroup>
                    <InputGroup>
                        <Label text="Nombre" />
                        <Input value={name} onChangeText={ setName } />
                    </InputGroup>
                    <InputGroup>
                        <Label text="Calorias (kcal)" />
                        <Input value={String(kcal)} onChangeText={ value => setKcal(Number(value)) } keyboardType='number-pad' />
                    </InputGroup>
                </View>
                <GroupButtons style={styles.footer}>
                    <ButtonSecondary title="Resetear"
                        onPress={handleOnPressReset} 
                    />
                    <ButtonMain title="Registar alimento"
                        onPress={handleOnPressSave} 
                        disabled={!Boolean(image?.length) || !Boolean(name?.length) || !Boolean(kcal)} 
                    />
                </GroupButtons>
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    stepContainer: {
        paddingHorizontal: 30,
        paddingVertical: 15,
        width: '100%',
        height: '85%'
    },
    footer: {
        marginBottom: 30,
    },
    formContainer: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        width: '100%',
    },
    autocompleteGroup: {
        position: 'relative',
        width: '100%',
        height: 60
    },
    autocompleteContainer: {
        width: '100%',
        flex: 1,
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 1,
    },
    autocompleteInput: {
        borderRadius: 3,
        borderWidth: 0,
    },
    autocompleteOption: {
        fontSize: 15,
        margin: 2,
    },
    autocompleteInputFocus: {
        borderBottomWidth: 2,
        borderBottomColor: theme.input.border,
        borderStyle: 'solid'
    },
    title: {
        fontSize: 20,
        fontWeight: '400',
        textAlign: 'center'
    },
    description: {
        fontSize: 16,
        fontWeight: '400',
        textAlign: 'left',
        color: '#333333',
        marginVertical: 5
    },
})


export default MealCreate