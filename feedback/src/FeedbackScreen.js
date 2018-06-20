import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Header from './components/Header';
import RecordingText from './components/DisplayRecording';
import Emoji from './components/Emoji';
import Locations from './components/location';
import FeedbackBox from './components/FeedbackBox';

export default class FeedbackScreen extends React.Component {
  
    constructor(props) {
        super(props);
            this.state = {
              Emoji_pic_url: '',
              Enviorment_pic_url: ''
               
            };  
            this.submit = this.submit.bind(this);
            this.updateEmoji = this.updateEmoji.bind(this); 
            this.updateLocation = this.updateLocation.bind(this);        
    }
    updateEmoji(image) {
      this.setState({ Emoji_pic_url: image });
    }
    updateLocation(loc) {
        this.setState({ Enviorment_pic_url: loc });
    }
    submit(text) {
        console.log(text);
    }
  render() {
    const { state } = this.props.navigation;
      return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
         <View style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
        <ScrollView >
        <KeyboardAwareScrollView>
        <Header />   
         <RecordingText recording={state.params.recording} artist={state.params.artist} />
        <Emoji updateEmoji={this.updateEmoji} />
        <Locations updateLocation={this.updateLocation} />
        <FeedbackBox submit={this.submit} />
        </KeyboardAwareScrollView>
        </ScrollView>
        </View> 
        </TouchableWithoutFeedback>    
      ); 
    }
}
