'use strict';
 
var React = require('react-native');
var {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableHighlight,
  Component,
  ToolbarAndroid
} = React;

var MainPage = require('./MainPage');

class LoginPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }

  render() {
    return (
    	<View style={styles.container}>
      <ToolbarAndroid style={styles.toolbar}
                        title={this.props.title}
                        titleColor={'#000000'}/>

    		<View style={styles.header}>
    			<Image style={styles.logo} 
    				source={require('./logo.png')}
    			/>
    		</View>
    		<View style={styles.inputs}>
 	   			<View style={styles.top_container}>
   	 				<Text style={styles.text}>Username</Text>
    				<TextInput style={styles.username}
    				placeholder='Username'
            value={this.state.username}
            onChange={this.onUsernameChanged.bind(this)}
    				/>
    			</View>
    			<View style={styles.bottom_container}>
    				<Text style={styles.text}>Password</Text>
    				<TextInput style={styles.password}
            password={true}
    				placeholder='Password'
            value={this.state.password}
            onChange={this.onPasswordChanged.bind(this)}
    				/>
    			</View>
    		</View>
        <View style={styles.signIn}>
    		  <TouchableHighlight style={styles.button}
            onPress={this.onSignInPressed.bind(this)}>
    	 		  <Text style={styles.buttonText}>Sign In</Text>
    		  </TouchableHighlight>
        </View>
    	</View>
    );
  }

  onUsernameChanged(event) {
    this.setState( {
      username: event.nativeEvent.text
    });
  }

  onPasswordChanged(event) {
    this.setState( {
      password: event.nativeEvent.text
    });
  }

  onSignInPressed() {
    if (this.state.username == ''){
      if (this.state.password == '') {
        this.props.navigator.push({
          id: 'mainPage',
          passProps: {username: this.state.username}
        });
      } else {
        Alert.alert('Error', 'Contraseña incorrecta');
      }
    } else {
      Alert.alert('Error', 'El usuario no existe');
    }
  }
}

var styles = React.StyleSheet.create({
  text: {
  	flex: 1,
  	flexDirection: 'row',
    color: 'black',
    alignSelf: 'center'
  },
  container: {
  	flex: 1,
    margin: 10,
  },
  header: {
  	justifyContent: 'center',
  	alignItems: 'center',
  	flex: 0.5,
  },
  logo: {
  	width: 200,
  	height: 150,
  },
  inputs: {
  	flex: 0.25,
  },
  top_container: {
  	flexDirection: 'row',
  },
  bottom_container: {
  	flexDirection: 'row',
  },
  username: {
  	flex: 3,
  	height: 40, 
  	borderColor: 'gray', 
  	borderWidth: 1
  },
  password: {
  	flex: 3,
  	height: 40, 
  	borderColor: 'gray', 
  	borderWidth: 1
  },
  signIn: {
    flex: 0.25,
  },
  button: {
    height: 36,
  flexDirection: 'row',
  backgroundColor: '#48BBEC',
  borderColor: '#48BBEC',
  borderWidth: 1,
  borderRadius: 8,
  marginBottom: 10,
  alignSelf: 'stretch',
  justifyContent: 'center'
  },
  buttonText: {
fontSize: 18,
  color: 'white',
  alignSelf: 'center'
  },
});

module.exports = LoginPage;