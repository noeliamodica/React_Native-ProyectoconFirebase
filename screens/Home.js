import { StatusBar } from 'expo-status-bar';
import  React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';



export default function Home(){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}> Bienvenido </Text>
            <Text style={styles.sub}>Ingrese a su cuenta </Text>
            <TextInput style={styles.input} placeholder='ingrese su usuario'/>
            <TextInput style={styles.input} placeholder='ingrese su password'/>

            <StatusBar style='auto' />
        </View>
    ) 
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f1f1f1",
      alignItems: "center",
      justifyContent: "center",
    },
    titulo:{
      color: 'coral',
      fontSize: 43,
      fontWeight: 'bold'
    },
    sub:{
        color: 'gray',
        fontSize: 21,      
      },
      input:{
        padding: 10,
        width: '73%',
        height: 30,
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
        paddingStart: 20,
      }

  });
  
  