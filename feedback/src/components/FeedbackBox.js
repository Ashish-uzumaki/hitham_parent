import React from 'react';
import { TextInput, View, Dimensions } from 'react-native';
import Button from './Button';

const textWidth = Dimensions.get('window').width;

class FeedbackBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      // height: 60,
    };
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleLogin() {
    this.props.sumbitted(this.state.text);
  }
  // updateSize = (height) => {
  //   this.setState({
  //     height
  //   });
  // }
  
   render() {
      return ( 
          <View>
          <View style={styles.container}>
          <TextInput 
            {...this.props}
              placeholder='Type a feedback'
              multiline={true}
              style={{
              backgroundColor: '#E7EBED',
              color: '#47525E',
              borderRadius: 15,
              fontSize: 25,
              paddingLeft: 18,
              borderBottomWidth: 2,
              borderBottomColor: '#999',

             }}
              value={this.state.text}
              autoCorrect={false}
              
              underlineColorAndroid='transparent'
              onChangeText={(text) => this.setState({ text })}
              // onContentSizeChange={(e) => this.updateSize(e.nativeEvent.contentSize.height)}  
          />
          </View>
          <Button onpress={this.handleLogin} />
          </View>
    );
    }
  }
const styles = {
        container: {
        position: 'relative',
        marginTop: 12,
        width: textWidth - 20,
        justifyContent: 'center',
        alignSelf: 'center', 
        },
};
export default FeedbackBox;
