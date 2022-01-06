import Daily from "../screens/Daily/Daily.component"
import MealCreate from "../screens/MealCreate/MealCreate.component"
import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import moment from "moment"

const DailyNavigator: React.FC<any> = () => {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator initialRouteName="Daily">
            <Stack.Screen name="Daily" component={Daily} options={{title: "Dia"}} initialParams={{ dayNumber: new Date(moment().format('YYYY-MM-DD')).getTime() }} />
            <Stack.Screen name="Meal" component={MealCreate} options={{title: "Alimento"}} />
        </Stack.Navigator>
    )
}

export default DailyNavigator