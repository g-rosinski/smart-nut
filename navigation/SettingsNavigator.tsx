import Exercise from "../screens/Exercise/Exercise.component"
import Measure from "../screens/Measure/Measure.component"
import Objective from "../screens/Objective/Objective.component"
import PlanSettings from "../screens/PlanSettings/PlanSettings.component"
import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const SettingsNavigator: React.FC<any> = () => {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator initialRouteName="Settings">
            <Stack.Screen name="Settings" component={PlanSettings} options={{title: "Plan"}} />
            <Stack.Screen name="Objetive" component={Objective} options={{title: "Objetivo"}} />
            <Stack.Screen name="Measure" component={Measure} options={{title: "Medidas"}} />
            <Stack.Screen name="Exercise" component={Exercise} options={{title: "Actividad fisica"}} />
            {/* <Stack.Screen name="Nutritional" component={} options={{title: "Alimentación"}} /> */}
        </Stack.Navigator>
    )
}

export default SettingsNavigator