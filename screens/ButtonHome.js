
import  React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function ButtonHome() {
    return (
        <TouchableOpacity style={styles.button}>
    
        <LinearGradient
          // Button Linear Gradient
          colors={['#4c669f', '#3b5998', '#192f6a']}>
          <Text style={styles.text}>Sign in with Facebook</Text>
        </LinearGradient>
      
      </TouchableOpacity>
    );
  }

  const styles = StyleSheet.create({
    button:{
      width: '80%',
      height: 50,
    }, 
    text:{
        fontSize: 14,
        color: 'gray',
        marginTop: 20,
    }
  
  });
  
  