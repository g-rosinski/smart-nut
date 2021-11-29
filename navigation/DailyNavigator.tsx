import Daily from "../screens/Daily/Daily.component"
import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const DailyNavigator: React.FC<any> = () => {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator initialRouteName="Daily">
            <Stack.Screen name="Daily" component={Daily} options={{title: "Dia"}} />
        </Stack.Navigator>
    )
}

export default DailyNavigator