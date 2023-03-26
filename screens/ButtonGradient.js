
import  React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function ButtonGradient() {
    return (
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
      
    );
  }
  
  const styles = StyleSheet.create({
    
    ButtonGradient: {
      width: '160%',
      height: 30,
      borderRadius: 25,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
    },
    text:{
      fontSize: 12,
      color: '#fff',
      marginTop: 16,
      },
    });
  