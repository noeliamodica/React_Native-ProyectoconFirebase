import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from "react-native";



export default function Register(){

  

  return (
    
    <ScrollView style={styles.container}>
        <Text style={styles.titulo}>
            Register
        </Text>
        <View style={styles.inputgroup}>
        <TextInput placeholder="Nombre"/>
        </View>
        <View style={styles.inputgroup}>
        <TextInput placeholder="Mail"/>
        </View>
        <View style={styles.inputgroup}>
        <TextInput placeholder="Password"/>
        </View>

        <View style={styles.inputgroup}>
        <Button title="Register" />


        </View>
    </ScrollView>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35
  },
  titulo:{
    textAlign: 'center',
    fontSize: 18,
    marginTop: 12,
    marginBottom: 20,
  }
  ,
  inputgroup:{
    flex: 1,
    padding: 0,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccccc'
  }

});

