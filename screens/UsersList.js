import React, { useState, useEffect } from "react";
import {Text, View} from 'react-native';
import { app} from "../database/firebase";


const UserList =() =>{

    useEffect(() => {
        firebase.db.collection("users").onSnapshot((querySnapshot) => {
          const users = [];
          querySnapshot.docs.forEach((doc) => {
            const { name, email, phone } = doc.data();
            users.push({
              id: doc.id,
              name,
              email,
              phone,
            });
          });
          setUsers(users);
        });
      }, []);

return(
    <View>
        <Text> Users List </Text>
    </View>
)
}

export default UserList