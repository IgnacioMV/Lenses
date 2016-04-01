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


class Detalle1 extends Component {

	constructor(props) {
    	super(props);
  }


	render(){
    var lens = this.props.lens;

		return(
    	<View style={styles.container}>

        <View style={styles.column}>
          <Text style={styles.row}>Nombre</Text>
          <Text style={styles.row}>Tipo</Text>
          <Text style={styles.row}>Lente</Text>
          <Text style={styles.row}>Formato</Text>
          <Text style={styles.row}>Modelo</Text>
          <Text style={styles.row}>Distancia Focal</Text>
          <Text style={styles.row}>T</Text>
          <Text style={styles.row}>Close Focus</Text>
          <Text style={styles.row}>Image Circle</Text>
          <Text style={styles.row}>Front Diameter</Text>
          <Text style={styles.row}>Peso</Text>
          <Text style={styles.row}>Longitud</Text>
          <Text style={styles.row}>Original Mount</Text>
          <Text style={styles.row}>Iris Blades</Text>
          <Text style={styles.row}>Entrance Pupil</Text>
          <Text style={styles.row}>Magnification Ratio</Text>
          <Text style={styles.row}>Filter Thread</Text>
          <Text style={styles.row}>Comentarios</Text>
        </View>

        <View style={styles.column}>
    	 	  <Text style={styles.row}>{lens.Name}</Text>
          <Text style={styles.row}>{lens.Type}</Text>
          <Text style={styles.row}>{lens.Lens}</Text>
          <Text style={styles.row}>{lens.Formato}</Text>
          <Text style={styles.row}>{lens.Model}</Text>
          <Text style={styles.row}>{lens.Focal_Length}</Text>
          <Text style={styles.row}>{lens.T}</Text>
          <Text style={styles.row}>{lens.Close_Focus}</Text>
          <Text style={styles.row}>{lens.Image_Circle}</Text>
          <Text style={styles.row}>{lens.Front_Diameter}</Text>
          <Text style={styles.row}>{lens.Weight}</Text>
          <Text style={styles.row}>{lens.Length}</Text>
          <Text style={styles.row}>{lens.Original_Mount}</Text>
          <Text style={styles.row}>{lens.Iris_Blades}</Text>
          <Text style={styles.row}>{lens.Entrance_pupil}</Text>
          <Text style={styles.row}>{lens.Magnification_Ratio}</Text>
          <Text style={styles.row}>{lens.Filter_Thread}</Text>
          <Text style={styles.row}>{lens.Coments}</Text>
        </View>

      </View>
   	);
 	}	
}

var styles = React.StyleSheet.create({
	container: {
		flex: 1,
    flexDirection: 'row',
	},
	separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  column: {
    flex: 1,
  },
  row: {
    borderBottomWidth: 1,
    borderColor: '#eeeeee',
    height: 20,
  }
});

module.exports = Detalle1;