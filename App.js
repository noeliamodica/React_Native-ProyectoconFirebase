import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';  
import React from 'react';

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Components

import UsersList from "./screens/UsersList";
import Register from  "./screens/Register";

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
        name="UsersList"
        component={UsersList}
        options={{ title: "Users List" }}
      />
        <Stack.Screen
        name="Register"
        component={Register}
        options={{ title: "Register" }}
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