// import { AppRegistry } from 'react-native';
// import App from './App';

// AppRegistry.registerComponent('feedback', () => App);
import React from 'react';
import { AppRegistry, View } from 'react-native';
// import Header from './src/components/Header';
// import text from './src/components/text';
// import TextFeedback from './src/components/text';
// import Button from './src/components/Button';
// import Appli from './src/app';
// import RecordingText from './src/Recording';
// import FeedbackBox from './src/components/FeedbackBox';
// import RefreshButton from './src/components/RefreshButton';
// import Emoji from './src/components/Emoji';
import FeeedbackScreen from './src/FeedbackScreen';

const Appl = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#ffffff' }} >    
           <FeeedbackScreen />

        </View>
    );
};

AppRegistry.registerComponent('feedback', () => Appl);
