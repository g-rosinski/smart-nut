import Daily from "../screens/Daily/Daily.component"
import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const ProjectNavigator: React.FC<any> = () => {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator initialRouteName="Project">
            <Stack.Screen name="Project" component={Daily} options={{title: "Proyecto"}} />
        </Stack.Navigator>
    )
}

export default ProjectNavigator