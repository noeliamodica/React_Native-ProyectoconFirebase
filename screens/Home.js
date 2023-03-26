import { StatusBar } from 'expo-status-bar';
import  React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import ButtonGradient from './ButtonGradient';



export default function Home(){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}> Bienvenido </Text>
            <Text style={styles.sub}>Ingrese a su cuenta </Text>
            <TextInput style={styles.input} placeholder='ingrese su usuario'/>
            <TextInput 
                style={styles.input} 
                placeholder='ingrese su password'
                secureTextEntry={true}
                />
            <Text style={styles.text} >Olvido su password? </Text>
            <ButtonGradient />
            <TouchableOpacity> 
            <Text style={styles.text} >No tiene cuenta? - CREAR CUENTA </Text>
            </TouchableOpacity>
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
        width: '83%',
        height: 30,
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
        paddingStart: 20,
      },
      text:{
        fontSize: 13,
        color: 'gray',
        marginTop: 16,
        },

  });
  
  