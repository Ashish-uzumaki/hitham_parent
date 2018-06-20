import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const LoginButton = ({ onPress }) => {
    const { text, layout } = styles;
    return (
        <View>
        <TouchableOpacity style={layout} onPress={onPress}>
              <Text style={text}>LOG IN </Text>
         </TouchableOpacity>
         </View>
    );
};
const styles = {
    text: {
      textAlign: 'center',
      fontSize: 18,
       color: 'white', 
       marginVertical: 13,
       fontWeight: 'bold'
    },
    layout: {
      height: 50,
      width: 200, 
      marginTop: 160,
      backgroundColor: '#48BBEC', 
      borderRadius: 12
  }

  };
export default LoginButton;
