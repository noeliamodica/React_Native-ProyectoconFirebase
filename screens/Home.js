import { StatusBar } from 'expo-status-bar';
import  React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function Home(){

    const Iniciar = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            console.log('ingreso a la cuenta');
            const user = userCredential.user;
            console.log(user);
          })
          .catch((error) => {
            console.log(error);
            Alert.alert('Error', 'No pudo ingresar a la cuenta', [{text: 'OK'}]);
          });
      };

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}> Bienvenido </Text>
            <Text style={styles.sub}>Ingrese a su cuenta </Text>
            <TextInput style={styles.input} placeholder='ingrese su mail'/>
            <TextInput 
                style={styles.input} 
                placeholder='ingrese su password'
                secureTextEntry={true}
                />
            <Text style={styles.text} >Olvido su password? </Text>
            <TouchableOpacity >
     
              <LinearGradient
                  // Button Linear Gradient
                colors={['#FFB677', '#FF3CBD']}
                start={ { x: 0, y: 0 }}
                end={ { x: 1, y: 1 }}
                style={styles.ButtonGradient}
                  >
                 <Text style={styles.text}>Sign in </Text>
             </LinearGradient>
  
            </TouchableOpacity>
            <TouchableOpacity> 
            <Text style={styles.textButton} >No tiene cuenta? - CREAR CUENTA </Text>
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
    ButtonGradient: {
            width: '160%',
            height: 30,
            borderRadius: 25,
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
          },
    textButton:{
            fontSize: 12,
            color: '#fff',
            marginTop: 16,
            },

  });
  
  