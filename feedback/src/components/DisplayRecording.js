import React from 'react';
import { Text, View, Dimensions } from 'react-native';


const textWidth = Dimensions.get('window').width;
const RecordingText = () => {
    const { textStyle, viewStyle, container } = styles;
    return (
    <View style={container}>
    <View style={viewStyle} >
    <Text style={textStyle}>Current Song:'dilvale'</Text>
    <Text style={textStyle}>Album:'shreya goyal' </Text>
    </View>
    </View>
    );
};
const styles = {
    textStyle: {
    fontSize: 20,
    textAlign: 'center',
    color: '#47525E',
    fontWeight: '500',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingTop: 20
    },
    viewStyle: {
        position: 'relative',
        marginTop: 15,
        height: 120,
        width: textWidth - 5,
        backgroundColor: '#DFE6E3',
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    }

};
export default RecordingText;
