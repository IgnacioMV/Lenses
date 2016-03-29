  'use strict';
 
var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Component,
} = React;

var lensesData = require('./lenses.json');

class MidMain extends Component {

  onBusquedaPressed() {
    this.props.navigator2.push({
          id: 'busqueda1',
    });
  }

  render() {
    return(
      <View style={styles.container}>
        <TouchableHighlight style={styles.midButton1}
          onPress={this.onBusquedaPressed.bind(this)}>
          <Text style={styles.midButtonText}>Búsqueda</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.midButton2}>
          <Text style={styles.midButtonText}>Búsqueda restrictiva</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.midButton3}>
          <Text style={styles.midButtonText}>Voy a tener suerte</Text>
        </TouchableHighlight>
      </View>

    );
  }
}

var styles = React.StyleSheet.create({
  container: {
    flex: 1,
  },
  midButton1: {
    flex: 0.3,
    marginBottom: 10,
    marginRight: 10,
    marginLeft: 10,
    borderColor: '#000000',
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    justifyContent: 'center',
  },
  midButton2: {
    flex: 0.3,
    margin: 10,
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
  },
  midButton3: {
    flex: 0.3,
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    borderColor: '#000000',
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    justifyContent: 'center',
  },
  midButtonText: {
    fontSize: 30,
    alignSelf: 'center',
  },
});

module.exports = MidMain;