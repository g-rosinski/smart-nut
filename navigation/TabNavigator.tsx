import { StyleSheet, Text, View } from "react-native"

import DailyNavigator from "./DailyNavigator";
import { Ionicons } from '@expo/vector-icons';
import ProjectNavigator from "./ProjectNavigator";
import React from "react";
import SettingsNavigator from "./SettingsNavigator";
import colors from "../contants/colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomTabs = createBottomTabNavigator()

const TabNavigator: React.FC = () => {

    return (
        <BottomTabs.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBar,
            }}>
            <BottomTabs.Screen name="Settings" component={SettingsNavigator} options={{
                tabBarIcon: ({focused}) => (
                    <View style={styles.item}>
                        <Ionicons name="md-clipboard" size={24} color={focused? colors.copper  : colors.walnut} />
                        <Text>Plan</Text>
                    </View>
                )
            }} />
            <BottomTabs.Screen name="Daily" component={DailyNavigator} options={{
                tabBarIcon: ({focused}) => (
                    <View style={styles.item}>
                        <Ionicons name="calendar" size={24} color={focused? colors.copper  : colors.walnut} />
                        <Text>Diario</Text>
                    </View>
                )
            }} />
            <BottomTabs.Screen name="Project" component={ProjectNavigator} options={{
                tabBarIcon: ({focused}) => (
                    <View style={styles.item}>
                        <Ionicons name="trending-up" size={24} color={focused? colors.copper  : colors.walnut} />
                        <Text style={styles.itemLabel}>Proyecto</Text>
                    </View>
                )
            }} />
        </BottomTabs.Navigator>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        position: "absolute",
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 70,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    item:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    itemLabel:{
        fontFamily: 'RubikRegular',
        paddingTop:5,
        fontSize: 14
    }
})

export default TabNavigator