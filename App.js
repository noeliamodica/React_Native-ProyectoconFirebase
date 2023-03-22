import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';  
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";


// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function myStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen />
      <Stack.Screen />
      <Stack.Screen />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>

    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
