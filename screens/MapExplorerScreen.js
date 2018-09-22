import React from 'react';
import { StyleSheet, View, Button, Slider, Text } from 'react-native';

import MapExplorer from '../components/MapExplorer';
import OverlayPanel from '../components/OverlayPanel';
import RangeSlider from 'react-native-range-slider';

import houses from '../houses';

export default class MapExplorerScreen extends React.Component {
	constructor() {
		super();
		this.state = this._getInitialState();
	}

	static navigationOptions = {
		header: null
	};

	_getInitialState() {
		return {
			showFilterPanel: false,
			houses: houses
		};
	}

	_getFilterButtonLabel() {
		return this.state.showFilterPanel ? 'Apply' : 'Immo Agent';
	}

	_toggleFilterPanel() {
		this.setState({
			...this.state,
			showFilterPanel: !this.state.showFilterPanel
		});
	}

	_change(value) {
		this.setState(() => {
		  return {
			...this.state,
			sliderValue: parseFloat(value),
		  };
		});
	}

	_renderOverlayPanel() {
		
		console.log(this.state);

		if (!this.state.showFilterPanel) {
			return null;
		}

		const {value} = this.state;

		return (
			<View style={styles.filterPanel}>
				<OverlayPanel>	
					<View>
						<Text style={styles.maxPriceLabel}>Maximum Price:</Text>
						<Text style={styles.maxPriceLabel}>€ 950,-</Text>
					</View>				
					<Slider 
					thumbTintColor="#9bc31c"
					maximumTrackTintColor="#9bc31c"
					minimumTrackTintColor="white"
					style={styles.maxPriceSlider} 
					step={100} maximumValue={950} 
					onValueChange={this._change.bind(this)} 
					value={value} />					
					
				</OverlayPanel>
			</View>
		);
	}
	
	render() {
		const { showFilterPanel } = this.state;
		const filterButtonLabel = this._getFilterButtonLabel();
		const renderOverlayPanel = this._renderOverlayPanel.bind(this);

		return (
			<View style={styles.container}>
				<MapExplorer
					style={styles.mapStyle}
					onMarkerPress={(house) => {
						this.props.navigation.navigate('HouseInfo', { house: house});
					}}
					houses={this.state.houses}
				/>
				<View style={styles.topBar}>
					<Button
						onPress={() => this._toggleFilterPanel()}
						color="#007F32"
						title={filterButtonLabel}
						style={styles.topBarButton}
					/>
				</View>
				{renderOverlayPanel()}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#00FF00'
	},
	brand: {
		fontSize: 24,
		color: 'white',
		textAlign: 'center'		
	},
	topBar: {
		height: 70,
		width: '100%',
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
		position: 'absolute',
		paddingRight: 10,
		zIndex: 2
	},
	topBarButton: {
		color: '#ff0000',
		backgroundColor: '#007F32'
	},
	text: {
		color: '#fff',
		padding: 20,
		fontWeight: 'bold'
	},
	closePanelButton: {
		marginTop: 20
	},
	mapStyle: {
		marginTop: -700,
		flex: 1,
		width: 'auto',
		alignSelf: 'stretch'
	},
	maxPriceSlider: {		
		marginTop: 20
	},
	maxPriceLabel: {
		color: '#fff',
		marginTop: 10
	},
	filterPanel: {
		position: 'absolute',
		backgroundColor: '#007F32',
		height: 'auto',
		width: '100%',
		zIndex: 4,
		opacity: 1,
		padding: 40,
		top: 0
	}
});
