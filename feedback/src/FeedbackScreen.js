import React from 'react';
import { View, KeyboardAvoidingView, Platform } from 'react-native';

import Header from './components/Header';
import RecordingText from './components/DisplayRecording';
import Emoji from './components/Emoji';
import Locations from './components/location';
import FeedbackBox from './components/FeedbackBox';
import Button from './components/Button';

// const TEXTWIDTH = Dimensions.get('window').width;
// const album = { song: 'dilvale', artist: 'shreya goyal' };
const keyboardVerticalOffset = Platform.OS === 'android' ? 45 : 0;


export default class FeedbackScreen extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                emoji: ''
               
            };  
            // this.submit = this.submit.bind(this);     
    }
    // handleEmoji(image) {
    //     this.setState({ emoji: image });
    //     console.log(image);
    // }
    // submit(text) {
    //     console.log(text);
    // //   const location = getLocation();
    // }

  render() {
      return (
        <View>
       
          {/* <Header />  
         <RecordingText /> */}
        <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={keyboardVerticalOffset} >
        <Emoji />
        <Locations />
      
      
        <FeedbackBox />
        </KeyboardAvoidingView>
        </View>
      ); 
    }
}

// handleEmoji={this.handleEmoji.bind(this)

