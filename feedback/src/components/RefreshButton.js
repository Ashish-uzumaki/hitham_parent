import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Button = () => {
    // const { buttonStyle, textstyle } = styles;
    return (
        <View style={styles.container}>
        <TouchableOpacity style={styles.buttonStyle} />
        </View>
    );
};
const styles = {
    textstyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    container: {
        // // alignSelf: 'flex-end',
        // justifyContent: 'flex-end',
    },
    buttonStyle: {
        
         height: 60,
         width: 60,
        backgroundColor: '#fff',
        borderRadius: 30,
        borderWidth: 1,
        position: 'absolute', 
        elevation: 2,
        bottom: 0,
        left: 0
    },
};

export default Button;
