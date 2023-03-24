import  React, { useEffect, useState } from 'react';
import {Text, View} from 'react-native';
import appFirebase from "../credenciales";
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc } from 'firebase/firestore'

const db = getFirestore(appFirebase)

const RegisterList =() =>{

    const [lista, setLista] = useState([])

    useEffect

return(
    <View>
        <Text> Users Detail </Text>
    </View>
)
}

export default RegisterList