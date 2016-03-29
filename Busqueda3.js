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

class Busqueda3 extends Component {

  constructor(props) {
    super(props);
    var dataSource = new ListView.DataSource(
      {rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: dataSource.cloneWithRows(lensesData.formats)
    }
  }

  onRowPressed(rowData: Obj) {
    var lens = this.props.lens;
    lens.format = rowData.Format;
    this.props.navigator2.push({
          id: 'resultados1',
          lens: lens,
    });
  }

  renderRow(rowData, sectionID, rowID) {
    return (
      <View>
        <TouchableHighlight style={styles.rowContainer}
          onPress={() => this.onRowPressed(rowData)}>
          <Text style={styles.currency}>{rowData.Format}</Text> 
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

module.exports = Busqueda3;