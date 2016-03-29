'use strict';

var React = require('react-native');
var {
  Component,
  StyleSheet,
  ViewPagerAndroid,
  Text,
  View,
  ListView,
  TouchableHighlight,
  Alert,
} = React;

var Button  = require('react-native-button');
var Modal   = require('react-native-modalbox');
var Slider  = require('react-native-slider');

var lensesData = require('./lenses.json');

class Busqueda1 extends Component {

  constructor(props) {
    super(props);
    var dataSource = new ListView.DataSource(
      {rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: dataSource.cloneWithRows(lensesData.names),
      isOpen: false,
      isDisabled: false,
      swipeToClose: true,
      sliderValue: 0.3,
    }
  }

  onRowPressed(rowData: Obj) {
    var lens = new Object();
    lens.name = rowData.Name;
    this.props.navigator2.push({
          id: 'busqueda2',
          lens: lens,
    });
  }

  onLongPress(id) {
    this.refs.modal.open();
  }

  renderRow(rowData, sectionID, rowID) {
    return (
      <View>
        <TouchableHighlight style={styles.rowContainer}
          onPress={() => this.onRowPressed(rowData)}
          delayLongPress={1000}
          onLongPress={() => this.onLongPress()}>
          <Text style={styles.currency}>{rowData.Name}</Text> 
        </TouchableHighlight>
        <View style={styles.separator}/>
      </View>
    );
  } 

  toggleSwipeToClose() {
    this.setState({swipeToClose: !this.state.swipeToClose});
  }

  render(){
    return(
      <View style={styles.container}>
      <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow.bind(this)}/>
      <Modal style={[styles.modal, styles.modal1]} ref={"modal"} position={"bottom"} swipeToClose={this.state.swipeToClose}
        onClosingState={this.onClosingState} animationDuration={400}>
          <Text style={styles.text}>Basic modal</Text>
          <Button onPress={this.toggleSwipeToClose} style={styles.btn}>Disable swipeToClose({this.state.swipeToClose ? "true" : "false"})</Button>
      </Modal>
      </View>
    );
  }
}

var styles = React.StyleSheet.create({
  container: {
    flex: 1,
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    padding: 10,
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  currency: {
    flex: 1,
    fontSize: 20
  }, 
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
  },
  btn: {
    margin: 10,
    backgroundColor: "#3B5998",
    color: "white",
    padding: 10
  },
});

module.exports = Busqueda1;
