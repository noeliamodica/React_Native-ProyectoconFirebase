import React, { useState } from "react";
import {
    Button,
    View,
    StyleSheet,
    TextInput,
    ScrollView,
  } from "react-native";

const CreateUserScreen =() =>{

    const [state, setState] = useState({
        name: "",
        email: "",
        phone:"",
    })

    const handleChangeText = (value, name) => {
        setState({ ...state, [name]: value });
      };

return(
    <ScrollView style={styles.container} >
    <View style={styles.inputGroup}>
        <TextInput placeholder="Name User" 
        onChangeText={(value) => handleChangeText(value, "name")}
        value={state.name}/>
    </View>
    <View style={styles.inputGroup}>
        <TextInput placeholder="Email User"
        onChangeText={(value) => handleChangeText(value, "email")}
        value={state.email} />
    </View>
    <View style={styles.inputGroup}>
        <TextInput placeholder="Phone User"
        onChangeText={(value) => handleChangeText(value, "phone")}
        value={state.phone} />
    </View>

    <View >
        <Button title="Save User" onPress={() => console.log(state)}/>
    </View>

    </ScrollView>
)
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 35,
    },
    inputGroup: {
      flex: 1,
      padding: 0,
      marginBottom: 15,
      borderBottomWidth: 1,
      borderBottomColor: "#cccccc",
    },
    loader: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      position: "absolute",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  

export default CreateUserScreen