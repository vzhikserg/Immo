import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import MapExplorer from '../components/MapExplorer'

export default class MapExplorerScreen extends React.Component {
	static navigationOptions = {
		header: null
	}

	render() {
	  return (
		<View style={styles.container}>        
		  <MapExplorer style={styles.mapStyle} onMarkerPress={() => {this.props.navigation.navigate('HouseInfo')}} ></MapExplorer>
		  <View style={styles.topBar}>
			<Button color="#007F32" title="MENU" style={styles.topBarButton}></Button>         
		  </View>
		</View>
	  );
	}
  }
  
  const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  backgroundColor: '#00FF00',            
	  
	},
	topBar: {
	  height: 70,
	  width: '100%', 
	  justifyContent: 'flex-end',
	  alignItems: 'flex-end',
	  position: 'absolute',
	  paddingRight: 16,
	},
	topBarButton: {
	  color: '#ff0000',
	  backgroundColor: '#007F32',         
	},  
	text: {    
	  color: '#fff',            
	  padding: 20
	},
	mapStyle: {
	  marginTop: -700,
	  flex: 1,
	  width: 'auto',
	  alignSelf: 'stretch'    
	}
  });
