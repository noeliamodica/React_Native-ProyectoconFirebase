import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';  
import React from 'react';

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Components

import Agenda from "./screens/Agenda";
import Agregar from  "./screens/Agregar";
import Listado from "./screens/Listado";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "azure",
        },
        headerTintColor: "black",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
  
      <Stack.Screen
        name="Agenda"
        component={Agenda}
        options={{ title: "Agenda" }}
      />
        <Stack.Screen
        name="Agregar"
        component={Agregar}
        options={{ title: "Agregar" }}
      />

<Stack.Screen
        name="Listado"
        component={Listado}
        options={{ title: "Listado" }}
      />
     
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "coral",
    alignItems: "center",
    justifyContent: "center",
  },
});