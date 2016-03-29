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

var MidView = require('./MidView');

class MainPage extends Component {
	constructor(props) {
    	super(props);
    	this.state = {
      	username: this.props.username,
    	}
    }

      render() {
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>

          <TouchableHighlight style={styles.topBarButton1}>
            <Text style={styles.topBarText}>Proyectos</Text>
          </TouchableHighlight>

          <TouchableHighlight style={styles.topBarButton2}>
            <Text style={styles.topBarText}>Lista</Text>
          </TouchableHighlight>

          <TouchableHighlight style={styles.topBarButton3}>
            <Text style={styles.topBarText}>Opciones</Text>
          </TouchableHighlight>

        </View>
        <MidView style={styles.mid}></MidView>
        <View style={styles.bottomBar}>

          <TouchableHighlight style={styles.bottomBarButton1}>
            <Text style={styles.bottomBarText}>Comparar</Text>
          </TouchableHighlight>

          <TouchableHighlight style={styles.bottomBarButton2}>
            <Text style={styles.bottomBarText}>Rentals</Text>
          </TouchableHighlight>

        </View>
      </View>
    );
  }

}

var styles = React.StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    flex: 0.1,
    flexDirection: 'row',
  },
  mid: {
    flex: 0.8,
  },
  bottomBar: {
    flex: 0.1,
    flexDirection: 'row',
  },
  topBarButton1: {
    flex: 0.3,
    borderColor: '#000000',
    borderBottomWidth: 1,
    borderRightWidth: 1,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  topBarButton2: {
    flex: 0.3,
    borderColor: '#000000',
    borderBottomWidth: 1,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  topBarButton3: {
    flex: 0.3,
    borderColor: '#000000',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  topBarText: {
    alignSelf: 'center',
  },
  bottomBarButton1: {
    flex: 0.5,
    borderColor: '#000000',
    borderTopWidth: 1,
    borderRightWidth: 1,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  bottomBarButton2: {
    flex: 0.5,
    borderColor: '#000000',
    borderTopWidth: 1,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },

  bottomBarText: {
    alignSelf: 'center',
  },
});

module.exports = MainPage;

