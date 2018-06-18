import React from 'react';
import { Text, View, Image } from 'react-native';

const Header = () => {
    const { textStyle, viewStyle, imageStyle, profileStyle } = styles;
    return (
    <View style={viewStyle} >
     <Image source={require('./images/hithamlogo.png')} style={imageStyle} />
     <Text style={textStyle}>HITHAM</Text>
     <Image source={require('./images/profile.png')} style={profileStyle} />
    </View>
    );
};
const styles = {
    viewStyle: { 
        backgroundColor: '#ffffff', 
        height: 68,
        borderColor: '#DFE6E3',
        borderWidth: 2,
        elevation: 3,
         flexDirection: 'row',
    },
    imageStyle: {
        height: 65,
        width: 80,
    },
    profileStyle: {
        height: 46,
        width: 46,
        alignItem: 'flex-end',
        position: 'absolute',
        right: 0, 
        bottom: 0,
        marginBottom: 10,
        marginRight: 12
        

    },
    textStyle: {
        fontSize: 30,
        fontWeight: '700',
        color: '#3898CC',
        lineSpacing: 30,
        textAlign: 'left',
        textShadowColor: '#3898CC',
        paddingTop: 10,
 },
};
export default Header;
