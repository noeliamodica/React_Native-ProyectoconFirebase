import  React, { useEffect, useState } from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import appFirebase from "../credenciales";
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc, gotRef, updateDoc } from 'firebase/firestore'
import { StatusBar } from 'expo-status-bar';
import Ionicons from '@expo/vector-icons/Ionicons';
import { CheckBox } from 'react-native-elements';

const db = getFirestore(appFirebase)


export default function Listado(props){

    const [user, setUser] = useState({})

    const [isChecked, setIsChecked] = useState(false);

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
        const docRef = await doc(db, 'tareas', id)
        updateDoc (docRef )
      
        props.navigation.navigate('Agenda')
    }
   

    const deleteTask = async(id)=>{
        await deleteDoc(doc(db, 'tareas', id))
      
        props.navigation.navigate('Agenda')
    }
   
    
return(
    <View style={styles.container}>
    
        <Text style={styles.titulo}> Detalle de tareas </Text>

        <View>
      <CheckBox
        title='Realizado'
        checked={isChecked}
        onPress={() => setIsChecked(!isChecked)}
      />
    </View>
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
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      },
    titulo: {
      textAlign: 'center',
      marginTop: 10,
      marginBottom: 10,
      fontSize:20,
      fontWeight: 'bold',
    },
    sub:{
        fontSize:16,
        marginBottom: 5,
    },
      BotonLista:{    
        backgroundColor: '#eee',
        padding: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        marginLeft:3,
    }

  });
  