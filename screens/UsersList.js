import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";


export default function UsersList(props){


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
    textAlign: 'center'
  }

});

