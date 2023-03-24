import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, TextInput, Button , Alert} from "react-native";
import appFirebase from "../credenciales";
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc } from 'firebase/firestore'


const db = getFirestore(appFirebase)


export default function Register(props){

    const initialState ={
        Name:'',
        Mail: '',
        Password: '',
    }
    

  const [state, setState] = useState(initialState)

  const handleChangeText= (value, name )=>{
        setState({...state, [name]:value })
  }

  const saveUser =async()=>{
    try {
        await addDoc(collection(db, 'users'),{
            ...state
        })
        Alert.alert('Alerta', 'usuario registrado')
        props.navigation.navigate('UsersList')
    } catch  {
        console.error(error)
    }
  }

  return (
    
    <ScrollView style={styles.container}>
        <Text style={styles.titulo}>
            Inscribirse
        </Text>
        <View style={styles.inputgroup}>
        <TextInput placeholder="Name" 
            onChangeText={(value)=>handleChangeText(value, 'Name') }
            value={state.Name}
            />
        </View>
        <View style={styles.inputgroup}>
        <TextInput placeholder="Mail"
           onChangeText={(value)=>handleChangeText(value, 'Mail') }
           value={state.Mail}
        />
        </View>
        <View style={styles.inputgroup}>
        <TextInput placeholder="Password"
            onChangeText={(value)=>handleChangeText(value, 'Password') }
            value={state.Password}
        />
        </View>

        <View style={styles.inputgroup}>
        <Button title="Register" onPress={saveUser} />


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

