import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { MapView,  } from 'expo';
import { Marker } from 'react-native-maps';

import PriceMarker from './PriceMarker'

const renderMarkers = ({ item }) => <Row {...item} 
    onSelectContact={(contact) => props.onSelectContact(contact)} />;

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
					latitude: 45.5553534,
					longitude: 10.5385776,
					latitudeDelta: 0.0322,
					longitudeDelta: 0.0251
				}}>

				{
					this.props.houses.map(house => 
					<Marker key={house.key} 
						onPress= { house.onMarkerPress}
						coordinate={{
						latitude: house.location.latitude,
						longitude: house.location.longitude,
					}}>
	            		<PriceMarker amount={house.price} />
    	      		</Marker>)
				}
                {/* {e => alert(e.nativeEvent)} */}
								
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