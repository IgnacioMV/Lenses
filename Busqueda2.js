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
} = React;

var lensesData = require('./lenses.json');

class Busqueda2 extends Component {

  constructor(props) {
    super(props);
    var dataSource = new ListView.DataSource(
      {rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: dataSource.cloneWithRows(lensesData.types)
    }
  }

  onRowPressed(rowData: Obj) {
    var lens = this.props.lens;
    lens.type = rowData.Type;
    this.props.navigator2.push({
          id: 'busqueda3',
          lens: lens,
    });
  }

  renderRow(rowData, sectionID, rowID) {
    return (
      <View>
        <TouchableHighlight style={styles.rowContainer}
          onPress={() => this.onRowPressed(rowData)}>
          <Text style={styles.currency}>{rowData.Type}</Text> 
        </TouchableHighlight>
        <View style={styles.separator}/>
      </View>
    );
  } 

  render(){
    return(
      <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow.bind(this)}
      />
    );
  }
}

var styles = React.StyleSheet.create({
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
});

module.exports = Busqueda2;