import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";


export default function Register(){

  

  return (
    
    
      <View>
        <Text>
          Register
        </Text>
        <StatusBar style="auto" />
      </View>
    
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
    textAlign: 'center'
  }

});

