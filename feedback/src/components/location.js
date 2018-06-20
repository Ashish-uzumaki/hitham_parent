import React, { Component } from 'react';
import {
    Text, 
    View,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import { RadioButtons } from 'react-native-radio-buttons';

let num = 0;

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
        {
        url: './locationImage/family.png',
        image: require('./locationImage/family.png')
        },
        {
            url: './locationImage/home.png',
            image: require('./locationImage/home.png')
        },
        {
            url: './locationImage/institution.png',
            image: require('./locationImage/institution.png')
        },
        {
            url: './locationImage/users-group.png',
            image: require('./locationImage/users-group.png')
        },
     
    ];
   
    function setSelectedOption(selectedOpt) {
      this.setState({
        selectedOption: selectedOpt.image
      });
      num = selectedOpt.image;
      this.props.updateLocation(selectedOpt.url);
    }
   
    function renderOption(option, selected, onSelect, index) {
        const style = ((num - 14) === index) ? imageStyle1 : imageStyle;
   
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
        marginTop: 3,
        backgroundColor: '#DFE6E3', 
        height: 110,
        width: TEXTWIDTH - 10,
        elevation: 3,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    imageStyle: {
        marginTop: 10,
        height: 60,
        width: 72
    },
    imageStyle1: {
        marginTop: 10,
        height: 65,
        width: 75,
        borderWidth: 0.5,
        borderRadius: 5,
        borderColor: '#000000',
    },
    textStyle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#00A6FF',
        textAlign: 'left',
        paddingTop: 3,
        paddingLeft: 4,
 },
};

