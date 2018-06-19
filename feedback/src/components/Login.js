import React, { Component } from 'react';
import { View } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import LoginButton from './LoginButton';

class Login extends Component {
  static navigationOptions = {
    title: 'Login',
  };
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleLogin() {
    console.log();
    this.props.doLogin(this.state.username, this.state.password);
  }
   render() {
      return (
          <View style={styles.container}>
             <View style={styles.textBox} >
                <TextField 
                label={'Username'} resizeMode="contain" 
                onChangeText={(text) => this.setState({ username: text })} 
                />
                <TextField
                label={'Password'}
                resizeMode="contain"
                secureTextEntry
                onChangeText={(text) => this.setState({ password: text })}
                />
            </View> 
              <LoginButton onPress={this.handleLogin} />
          </View>       
    );
    }
  }

  const styles = {
    container: {
      padding: 10,
      marginBottom: 5,
      alignItems: 'center'
    },
    textBox: {
      margin: 10,
      height: 15,
      width: 250
    },
    logBox: {
      alignItems: 'center',
    },
  };
 export default Login;

