/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var React = require('react-native');
var LoginPage = require('./LoginPage');
var MainPage = require('./MainPage');

var _navigator;

/*React.BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator.getCurrentRoutes().length < 3  ) {
     return false;
  }
  _navigator.pop();
  return true;
});*/

class Lenses extends React.Component {

  render() {
    return (
      
      <React.Navigator
        style={styles.container}
        initialRoute={{id: 'login'}}
        renderScene={this.navigatorRenderScene}/>
    );
  }

  navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    switch (route.id) {
      case 'login':
        return (<LoginPage navigator={navigator} title="login"/>);
      case 'mainPage':
        return (<MainPage navigator={navigator} title="mainPage" />);
      case 'busqueda1':
        return (<MyCurrencies navigator={navigator} title="third" />);
      case 'fourth':
        return (<MakeOffer navigator={navigator} title="fourth" />);
    }
  }

}

var styles = React.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }
});

React.AppRegistry.registerComponent('Lenses', () => Lenses);
