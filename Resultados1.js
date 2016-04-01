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

class Resultados1 extends Component {

	constructor(props) {
    	super(props);
    	var results = [];
  		var searchField1 = "Name";
  		var searchField2 = "Model";
  		var searchField3 = "Formato";

  		for (var i=0 ; i < lensesData.lenses.length ; i++) {
    		if (lensesData.lenses[i][searchField1] == this.props.lens.name && 
    			lensesData.lenses[i][searchField2] == this.props.lens.model && 
    			lensesData.lenses[i][searchField3] == this.props.lens.format) {
        		results.push(lensesData.lenses[i]);
    		}
		}
    	var dataSource = new ListView.DataSource(
      	{rowHasChanged: (r1, r2) => r1 !== r2});
    	this.state = {
     		dataSource: dataSource.cloneWithRows(results),
     		length: results.length,
    	}
  	}

  	onRowPressed(rowData: Obj){
  		var lens = rowData;
    	this.props.navigator2.push({
          id: 'detalle1',
          lens: lens,
    });
  	}

  	renderRow(rowData, sectionID, rowID) {
    	return (
    		<View>
      			<TouchableHighlight
      			onPress={() => this.onRowPressed(rowData)}>
      			<View style={styles.section}>
        			<Text style={styles.tableSection}>{rowData.Focal_Length}</Text>
        			<Text style={styles.tableSection}>{rowData.T}</Text> 
        			<Text style={styles.tableSection}>{rowData.Close_Focus}</Text> 
        			<Text style={styles.tableSection}>{rowData.Weight}</Text> 
        		</View>
        		</TouchableHighlight>
        		<View style={styles.separator}/>
      		</View>
    	);
  	} 

	render(){
		if (this.state. length == 0) {
			var string = "No se han encontrado resultados";
		} else{
			var string = this.state.length + " resultados.";
		}
		var searched = this.props.lens.name + ", " + this.props.lens.model + ", " + this.props.lens.format;
    	return(
    	<View style={styles.container}>
    		<Text style={{backgroundColor: '#eeeeee'}}>{searched}</Text>
    		<Text style={{backgroundColor: '#eeeeee'}}>{string}</Text>
    		<View style={styles.header}>
    			<Text style={styles.tableSection}>Distancia Focal</Text>
    			<Text style={styles.tableSection}>T</Text>
    			<Text style={styles.tableSection}>Close Focus</Text>
    			<Text style={styles.tableSection}>Peso</Text>
    		</View>
        	<ListView
            	dataSource={this.state.dataSource}
            	renderRow={this.renderRow.bind(this)}
      		/>
      	</View>
    	);
  	}	
}

var styles = React.StyleSheet.create({
	container: {
		flex: 1,
	},
	header: {
    	flexDirection: 'row',
    	alignSelf: 'stretch',
    	padding: 10,
    	borderBottomWidth: 1,
    	borderTopWidth: 1,
    	borderColor: '#dddddd',
    	backgroundColor: '#eeeeee'
	},
	section: {
    	flexDirection: 'row',
    	alignSelf: 'stretch',
    	padding: 10,
	},
	tableSection: {
		flex: 0.25
	},
	separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
});

module.exports = Resultados1;