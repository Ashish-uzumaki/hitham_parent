import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';

export default class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = { pressStatus: false };
      }
      onPress = () => {
            this.setState({ pressStatus: true });
            this.props.onpress();
      }
      _onHideUnderlay() {
        setTimeout(() => {
            this.setState({ pressStatus: false });
          }, 140);   
      }
      
    render() {
        const { buttonStyle, buttonStyle1, textstyle, textstyle1, container } = styles;
        return (
            <View style={container}>
            <TouchableHighlight 
            activeOpacity={1} 
            style={this.state.pressStatus ? buttonStyle1 : buttonStyle}
            underlayColor='#FFFFFF'
            onHideUnderlay={this._onHideUnderlay.bind(this)}
            onPress={this.onPress}
            >
            <Text style={this.state.pressStatus ? textstyle1 : textstyle} >Submit</Text>       
            </TouchableHighlight >
            </View>
        );
    }
}
const styles = {
    container: {
        height: 45,
        marginTop: 2,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textstyle: {
         color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 23,
        fontWeight: '700',
    },
    textstyle1: {
         color: '#00A6FF',
       textAlign: 'center',
        fontSize: 23,
        fontWeight: '700',
    },
    buttonStyle: {
        height: 42,
        width: 160,
        marginTop: 4,
        backgroundColor: '#00A6FF',
        borderColor: '#00A6FF',
        borderRadius: 10,
        borderWidth: 1,
        elevation: 4,
        
    },
    buttonStyle1: {
        height: 42,
        width: 160,
        marginTop: 3,
        borderColor: '#00A6FF',
        borderRadius: 10,
        borderWidth: 1,
        elevation: 2,
    },
};

