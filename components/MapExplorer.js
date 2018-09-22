import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { MapView,  } from 'expo';
import { Marker } from 'react-native-maps';

import PriceMarker from './PriceMarker'

class MapExplorer extends React.Component {

	constructor(props) {
		super(props);
        this.state = {amount: 99};
	  }

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
                {/* {e => alert(e.nativeEvent)} */}
				<Marker onPress= { this.props.onMarkerPress}
						coordinate={{
						latitude: 37.78825,
						longitude: -122.4324,
					}}>
            		<PriceMarker amount={this.state.amount} />
          		</Marker>				
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