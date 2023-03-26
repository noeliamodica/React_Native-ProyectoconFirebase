
import React from "react";
import { StyleSheet, Text, View, ScrollView, TextInput, Button , Alert} from "react-native";
import { BlurView } from 'expo-blur';



export default function Register(){
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
      color: 'coral',
        width: 350,
        height: 500,
       
      },
    
  });
  
  