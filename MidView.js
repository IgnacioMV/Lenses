'use strict';
 
var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Component,
} = React;

var MidMain = require('./MidMain');
var Busqueda1 = require('./Busqueda1');
var Busqueda2 = require('./Busqueda2');
var Busqueda3 = require('./Busqueda3');
var Resultados1 = require('./Resultados1');
var Detalle1 = require('./Detalle1')
var _navigator2;

var androidBackHandler;

class MidView extends Component {
  
  componentWillMount() {
    React.BackAndroid.addEventListener('hardwareBackPress', this.backAndroidHandler);
  }

  componentWillUnmount() {
    React.BackAndroid.removeEventListener('hardwareBackPress', this.backAndroidHandler);
  }


  backAndroidHandler() {
    if (_navigator2.getCurrentRoutes().length === 1  ) {
     return false;
    }
    _navigator2.pop();
    return true;
  }

  render() {
    return (
      
      <React.Navigator
        style={styles.container}
        initialRoute={{id: 'main'}}
        renderScene={this.navigator2RenderScene}/>
    );
  }

  navigator2RenderScene(route, navigator2) {
    _navigator2 = navigator2;
    switch (route.id) {
      case 'main':
        return (<MidMain navigator2={navigator2} title="main"/>);
      case 'busqueda1':
        return (<Busqueda1 navigator2={navigator2} title="busqueda1" />);
      case 'busqueda2':
        return (<Busqueda2 navigator2={navigator2} title="busqueda2" 
          lens={route.lens} lensName={route.lensName}/>);
      case 'busqueda3':
        return (<Busqueda3 navigator2={navigator2} title="busqueda3" 
          lens={route.lens} lensName={route.lensName} lensType={route.lensType}/>);
      case 'resultados1':
        return (<Resultados1 navigator2={navigator2} title="resultados1" 
          lens={route.lens} lensName={route.lensName} lensType={route.lensType} lensFormat={route.lensFormat}/>);
      case 'detalle1':
        return (<Detalle1 navigator2={navigator2} title="detalle1" lens={route.lens}/>);
    }
  }
}

var styles = React.StyleSheet.create({
  container: {
    flex: 1,
  },
});

module.exports = MidView;
    