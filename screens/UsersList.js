import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import appFirebase from "../credenciales";
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc } from 'firebase/firestore'

const db = getFirestore(appFirebase)


export default function UsersList(props){

  const [lista, setLista] = useState([])

    useEffect(()=>{
        const getLista = async ()=>{
            try {
                const querySnapshot = await getDocs (collection(db, 'users') )
                const docs = []
                querySnapshot.forEach((doc)=>{
                    const {Name, Mail, Password} = doc.data()
                    docs.push({
                        id: doc.id,
                        Name,
                        Mail,
                        Password,
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
      <TouchableOpacity style={styles.Boton} onPress={() => props.navigation.navigate('Register')}>
        <Text style={styles.TextoBoton}>
          Inscribirse
        </Text>
      </TouchableOpacity>
      <View>
        <Text>
          Lista de inscriptos
        </Text>
      </View>

    <View>
      {
        lista.map((list)=>(
          <TouchableOpacity key={list.id} style={styles.BotonLista} 
            onPress={()=>props.navigation.navigate('Show', {userId:list.id}) }>
            <Text style={styles.TextoNombre} >
              {list.Name}
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
  }

});

