
import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, TextInput, Button , Alert} from "react-native";
import { BlurView } from 'expo-blur';
import { TouchableOpacity } from "react-native-gesture-handler";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { appFirebase } from '../credenciales'

export default function Register(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const auth = getAuth();

  
    const registro = () => {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log('cuenta creada');
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          console.log(error);
          Alert.alert('Error', 'No se pudo crear la cuenta', [{text: 'OK'}]);
        });
    };
    

    return (
        <View style={styles.container}> 
        <ScrollView contentContainerStyle={ {
                flex: 1,
                width:"100%",
                height: "100%",
                alignItems: 'center',
                justifyContent: 'center',
        }} >
            <BlurView intensity={90}>
                <View style={styles.register}>
                <Text style={styles.sub}>Ingrese a su cuenta </Text>
                
                 <View> 
                 <Text style={styles.text}> Ingrese su email </Text>
                 <TextInput onChangeText={(text)=> setEmail(text) } style={styles.input} placeholder='email'/>

                 </View>
                 <View> 
                 <Text style={styles.text}> Ingrese su password </Text>   
                 <TextInput onChangeText={(text)=> setPassword(text) }
                style={styles.input} 
                placeholder='password'
                secureTextEntry={true}
                />
                </View>

                <TouchableOpacity
                 onPress={registro}
                 style={styles.button}>
                <Text style={styles.text}> REGISTRARSE </Text>
                </TouchableOpacity>
                </View>
            </BlurView>
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f1f1f1",
      width: '100%',
      height: '100%',
      alignItems: "center",
      justifyContent: "center",
    },
    register:{
        backgroundColor: '#FFA07A90',  
        width: 270,
        height: 350,
        borderColor: "black",
        borderRadius: 10,
        borderWidth: 1.5,
        padding: 10,
        alignItems: 'stretch'
      },
      sub:{
        color: 'gray',
        fontSize: 18,   
        paddingTop: 20,   
      },
      input:{
        padding: 10,
        width: '73%',
        height: 30,
        marginTop: 10,
        borderRadius: 10,
        paddingStart: 5,
        borderWidth: 2,
        padding: 10,
        backgroundColor: '#fff',
      },
      text:{
        fontSize: 16,
        fontWeight:"300",
        color: 'grey',
        alignContent: 'center',
        marginTop: 16,
      },
      button:{
        width: 250,
        height: 30,
        borderRadius: 10,
        alignItems: 'center',
       
      }
  });
  
  