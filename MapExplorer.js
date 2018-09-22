import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { MapView,  } from 'expo';
import { Marker } from 'react-native-maps';

export const houseIcon = require('./assets/house.png');

class MapExplorer extends React.Component {
	render() {
		return (
            <MapView	
            style={styles.container}			
				initialRegion={{
					latitude: 37.78825,
					longitude: -122.4324,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421
				}}>
				<Marker
					coordinate={{
						latitude: 37.78825,
						longitude: -122.4324,
						title: 'Hello Sergii',
						description: 'Hello Sergii World'
					}}
					image={houseIcon}
				/>
			</MapView>
		);
	}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        width: 'auto',
        alignSelf: 'stretch'
    }
});

export default MapExplorer;