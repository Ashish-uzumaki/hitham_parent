import React, { Component } from 'react';
import {
    Text, 
    View,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import { RadioButtons } from 'react-native-radio-buttons';

const TEXTWIDTH = Dimensions.get('window').width;
export default class Locations extends Component {
    constructor(props) {
        super(props);
        this.state = {
         selectedOption: ''
        };   
    }
   render() {
    const { textStyle, conatiner, imageStyle, imageStyle1, imageContainer } = styles;
    const options = [
        require('./locationImage/family.png'),
        require('./locationImage/home.png'),
        require('./locationImage/institution.png'),
        require('./locationImage/users-group.png'),
     
    ];
   
    function setSelectedOption(selectedOption) {
      this.setState({
        selectedOption
      });
    }
   
    function renderOption(option, selected, onSelect, index) {
      const style = selected ? imageStyle1 : imageStyle;
   
      return (
        <TouchableOpacity onPress={onSelect} key={index} activeOpacity={0.7} style={imageContainer} >
          <Image source={option} style={style} />   
        </TouchableOpacity>
      );
    }
    return (
        <View style={conatiner} >
        <Text style={textStyle}>More information</Text>
        <RadioButtons
          options={options}
          onSelection={setSelectedOption.bind(this)}
          selectedOption={this.state.selectedOption}
          renderOption={renderOption}
          renderContainer={RadioButtons.getViewContainerRenderer({
            marginLeft: 5,
            marginRight: 5,
           flexDirection: 'row',
            justifyContent: 'space-around',
          })}
        />
      </View>
      );
  }
}

const styles = {
    conatiner: {
        position: 'relative',
        marginTop: 5,
        backgroundColor: '#DFE6E3', 
        height: 120,
        width: TEXTWIDTH - 5,
        elevation: 3,
    },
    imageStyle: {
        marginTop: 10,
        height: 60,
        width: 72,
        elevation: 5,
          
    },
    imageStyle1: {
        marginTop: 10,
        height: 65,
        width: 75,
        borderWidth: 0.5,
        borderRadius: 5,
        borderColor: '#000000',
        elevation: 10,
    },
    textStyle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#00A6FF',
        lineSpacing: 30,
        textAlign: 'left',
        paddingTop: 3,
        paddingLeft: 4,
 },
};

