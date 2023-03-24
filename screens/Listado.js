import  React, { useEffect, useState } from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import appFirebase from "../credenciales";
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc, gotRef } from 'firebase/firestore'
import { StatusBar } from 'expo-status-bar';



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

    const deleteUser = async(id)=>{
        await deleteDoc(doc(db, 'tareas', id))
      
        props.navigation.navigate('Agenda')
    }
   
    
return(
    <View>
        <Text style={styles.titulo}> Detalle de tareas </Text>
        <Text style={styles.sub}>Tarea: {user.Tarea} </Text>
        <Text style={styles.sub}>Prioridad: {user.Prioridad} </Text>

        <TouchableOpacity style={styles.BotonLista} onPress={ ()=>deleteUser(props.route.params.userId)   } >
            <Text style={styles.TextoNombre}> Eliminar</Text>
      
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
        backgroundColor: 'red',
        marginBottom:3,
        padding:5,
        marginTop:5,
    }

  });
  