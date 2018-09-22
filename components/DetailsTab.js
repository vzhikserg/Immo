import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { MapView, } from 'expo';
import { Marker } from 'react-native-maps';

import PriceMarker from './PriceMarker'

export default class DetailsTab extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[styles.container, { backgroundColor: 'white' }]} >
                <MapView
                    style={styles.container}
                    initialRegion={{
                        latitude: this.props.house.location.latitude,
                        longitude: this.props.house.location.longitude,
                        latitudeDelta: 0.0322,
                        longitudeDelta: 0.0251
                    }}>

                    {
                        <Marker key={this.props.house.key}
                            onPress={() => { }}
                            coordinate={{
                                latitude: this.props.house.location.latitude,
                                longitude: this.props.house.location.longitude,
                            }}>
                            <PriceMarker amount={this.props.house.price} />
                        </Marker>
                    }
                </MapView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})