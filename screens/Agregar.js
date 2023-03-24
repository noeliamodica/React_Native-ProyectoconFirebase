import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, TextInput, Button , Alert} from "react-native";
import appFirebase from "../credenciales";
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc } from 'firebase/firestore'


const db = getFirestore(appFirebase)


export default function Agregar(props){

    const initialState ={
        Tarea: '',
        Prioridad: '',
    }
    

  const [state, setState] = useState(initialState)

  const handleChangeText= (value, name )=>{
        setState({...state, [name]:value })
  }

  const saveToDo =async()=>{
    try {
        await addDoc(collection(db, 'tareas'),{
            ...state
        })
        
        props.navigation.navigate('Agenda')
    } catch  {
        console.error(error)
    }
  }

  return (
    
    <ScrollView style={styles.container}>
        <Text style={styles.titulo}>
            Agregar
        </Text>
       
        <View style={styles.inputgroup}>
        <TextInput placeholder="Tarea"
           onChangeText={(value)=>handleChangeText(value, 'Tarea') }
           value={state.Tarea}
        />
        </View>
        <View style={styles.inputgroup}>
        <TextInput placeholder="Prioridad"
            onChangeText={(value)=>handleChangeText(value, 'Prioridad') }
            value={state.Prioridad}
        />
        </View>

        <View style={styles.inputgroup}>
        <Button title="Agregar" onPress={saveToDo} />


        </View>
    </ScrollView>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35
  },
  titulo:{
    textAlign: 'center',
    fontSize: 18,
    marginTop: 12,
    marginBottom: 20,
  }
  ,
  inputgroup:{
    flex: 1,
    padding: 0,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccccc'
  }

});

