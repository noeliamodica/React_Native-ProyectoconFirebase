import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Entypo } from '@expo/vector-icons'; 
import { Foundation } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Components
import Home from "./screens/Home";
import Agenda from "./screens/Agenda";
import Agregar from  "./screens/Agregar";
import Listado from "./screens/Listado";
import Notes from "./screens/Notes";
import Register from "./screens/Register";

const HomeStackNavigator = createNativeStackNavigator();

function MyStack(){
    return(
        <HomeStackNavigator.Navigator>
            <HomeStackNavigator.Screen 
                name="Home"
                component={Home}
            />
        </HomeStackNavigator.Navigator>
    )
}

const Tab = createBottomTabNavigator();


function MyTabs(){
    return(
        <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
            tabBarActiveTintColor: 'coral',
            tabBarLabelStyle: { fontWeight: 'bold' },
                    }

        }>
            <Tab.Screen 
                name="Home" 
                component={MyStack}
                options={
                    {
                        tabBarIcon: ({ color, size }) =>(
                            <Entypo name="home" size={31} color={color}/>
                        ),
                        headerShown: false

                    }
                } />
            <Tab.Screen 
                name="Agenda" 
                component={Agenda} 
                options={
                    {
                        tabBarIcon: ({ color, size }) =>(
                            <MaterialIcons name="notes" size={31} color={color}  />
                        ),
                     
                    }
                }
                />
            <Tab.Screen 
                name="Register" 
                component={Register} 
                options={
                    {
                        tabBarIcon: ({ color, size }) =>(
                            <MaterialIcons name="notes" size={31} color={color}  />
                        ),
                     
                    }
                }
                />  
            <Tab.Screen 
                name="Notes" 
                component={Notes}
                options={
                    {
                        tabBarIcon: ({ color, size }) =>(
                            <Foundation name="clipboard-notes" size={31} color={color}  />
                        )
                    }
                }
                 />
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