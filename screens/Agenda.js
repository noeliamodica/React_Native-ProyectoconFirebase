import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import appFirebase from "../credenciales";
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc } from 'firebase/firestore'

const db = getFirestore(appFirebase)


export default function Agenda(props){

  const [lista, setLista] = useState([])

    useEffect(()=>{
        const getLista = async ()=>{
            try {
                const querySnapshot = await getDocs (collection(db, 'tareas') )
                const docs = []
                querySnapshot.forEach((doc)=>{
                    const {Tarea, Prioridad} = doc.data()
                    docs.push({
                        id: doc.id,
                        Tarea,
                        Prioridad,
                    })
                })
                setLista(docs);
            } catch (error) {
                console.log(error)
            }
        }
            getLista()
    },[])

  return (
    <ScrollView>
      <TouchableOpacity style={styles.Boton} onPress={() => props.navigation.navigate('Agregar')}>
        <Text style={styles.TextoBoton}>
          Agregar
        </Text>
      </TouchableOpacity>
      <View>
        <Text>
          Cosas por hacer
        </Text>
      </View>

    <View >
      {
        lista.map((lista)=>(
          <TouchableOpacity key={lista.id} style={styles.BotonLista} 
            onPress={()=>props.navigation.navigate('Listado', {userId:lista.id}) }>
            <Text style={styles.TextoNombre} >
              {lista.Tarea}
            </Text>
          </TouchableOpacity>
        ))
      }
    </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  Boton:{
    backgroundColor: 'linen',
    height: 35,
    borderColor: 'black',
    borderWidth: 1
  }
  ,
  TextoBoton:{
    fontSize: 18,
    textAlign: 'center',
  }, 
  TextoTitulo:{
    textAlign: 'center',
    marginTop: 20,
  },
  BotonLista:{
    flex: 1,
    padding: 5,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccccc'
  }

});

