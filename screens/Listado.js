import  React, { useEffect, useState } from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import appFirebase from "../credenciales";
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc, gotRef } from 'firebase/firestore'
import { StatusBar } from 'expo-status-bar';
import Ionicons from '@expo/vector-icons/Ionicons';


const db = getFirestore(appFirebase)


export default function Listado(props){

    const [user, setUser] = useState({})

    const getOneProduct = async(id)=>{
        try {
            const docRef = doc(db, 'tareas', id )
            const docSnap = await getDoc(docRef)
            setUser(docSnap.data())
        } catch {
            console.error(error)
        }
    }

    useEffect(()=>{
        getOneProduct(props.route.params.userId)
    },[setUser])

    const updateTask = async(id)=>{
        await getDoc(doc(db, 'tareas', id))
      
        props.navigation.navigate('Agenda')
    }
   

    const deleteTask = async(id)=>{
        await deleteDoc(doc(db, 'tareas', id))
      
        props.navigation.navigate('Agenda')
    }
   
    
return(
    <View>
        <Text style={styles.titulo}> Detalle de tareas </Text>
        <Text style={styles.sub}>Tarea: {user.Tarea} </Text>
        <Text style={styles.sub}>Prioridad: {user.Prioridad} </Text>

        <TouchableOpacity style={styles.BotonLista} onPress={ ()=>updateTask(props.route.params.userId)   } >
           
         <Ionicons name="md-create" size={23} color="green" />
      </TouchableOpacity>

        <TouchableOpacity style={styles.BotonLista} onPress={ ()=>deleteTask(props.route.params.userId)   } >
        <Ionicons name="md-trash" size={23} color="red" />
        </TouchableOpacity>


        <StatusBar style='auto'/>
    </View>
)
}



const styles = StyleSheet.create({
    titulo: {
      textAlign: 'center',
      marginTop: 10,
      marginBottom: 10,
      fontSize:20,
    },
    sub:{
        fontSize:16,
    },
    TextoNombre:{
      textAlign: 'center',
      fontSize:16,
      color: 'white',
    },
    BotonLista:{
        
        marginLeft:3,
    }

  });
  