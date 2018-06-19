import React from 'react';
import { TextInput, View, Dimensions,
  Image } from 'react-native';
import Button from './Button';

const textWidth = Dimensions.get('window').width;

class FeedbackBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      height: 60,
    };
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleLogin() {
    this.props.sumbit(this.state.text);
  }
  updateSize = (height) => {
    this.setState({
      height
    });
  }
  
   render() {
      return ( 
          <View>
          <View style={styles.container}>
          <TextInput 
            {...this.props}
              placeholder='Type a feedback'
              multiline={true}
              style={{ height: this.state.height,
              backgroundColor: '#E7EBED',
              color: '#47525E',
              borderRadius: 15,
              fontSize: 25,
              paddingLeft: 18,
              lineSpacing: 5,

             }}
              value={this.state.text}
              autoCorrect={false}
              
              underlineColorAndroid='transparent'
              onChangeText={(text) => this.setState({ text })}
              onContentSizeChange={(e) => this.updateSize(e.nativeEvent.contentSize.height)}  
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
        marginTop: 10,
        width: textWidth - 20,
        justifyContent: 'center',
        alignSelf: 'center', 
        },

        // feedbackBox: {
        // // position: 'relative',
        // // marginTop: 10,
        // // alignSelf: 'center',
        // // justifyContent: 'center',
        // width: textWidth - 20,
        // backgroundColor: '#E7EBED',
        // borderRadius: 15,
        // flex: 1,
        // fontSize: 20,
        // // contentSize: 10,
        // lineSpacing: 5,
        // color: '#47525E',
        // paddingLeft: 20, 
        // // height: 60,
        // },

        // SectionStyle: {
        //     position: 'relative',
        //     marginTop: 20,
        //     // flexDirection: 'row',
        //     // justifyContent: 'space-around',
        //     alignItems: 'center',
        //     backgroundColor: '#E7EBED',
        //     borderWidth: 0.5,
        //     width: textWidth - 20,
        //     borderRadius: 40,
        //     marginLeft: 18,
        //     textAlignVertical: 'top'
        // },
        // ImageStyle: {
        //     padding: 10,
        //     margin: 5,
        //     height: 35,
        //     width: 35,
        //     resizeMode: 'stretch',
        //     alignItems: 'center',
        //     marginRight: 15
        // },
};
export default FeedbackBox;
