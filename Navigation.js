import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";




// Components
import Home from "./screens/Home";
import Agenda from "./screens/Agenda";
import Agregar from  "./screens/Agregar";
import Listado from "./screens/Listado";
import Notes from "./screens/Notes";

const Tab = createMaterialBottomTabNavigator();

function MyTabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Agenda" component={Agenda} />
            <Tab.Screen name="Notes" component={Notes} />
        </Tab.Navigator>
    )
}

export default function Navigation(){
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}