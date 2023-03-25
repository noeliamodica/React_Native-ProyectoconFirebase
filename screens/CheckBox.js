import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, TextInput, Button , Alert} from "react-native";
import { CheckBox } from 'react-native-elements';

const MyCheckBox = () => {
    const [isChecked, setIsChecked] = useState(false);
  
    return (
      <View>
        <CheckBox
          title='Check me!'
          checked={isChecked}
          onPress={() => setIsChecked(!isChecked)}
        />
      </View>
    );
  };
  
  export default MyCheckBox;