import React from 'react';
import { StyleSheet, View, Button, Slider, Text } from 'react-native';

import MapExplorer from '../components/MapExplorer';
import OverlayPanel from '../components/OverlayPanel';
import RangeSlider from 'react-native-range-slider';

import houses from '../houses';

export class  HeaderTitle extends React.Component {
	constructor(props) {
		super();
		
	}
	render() {
		return (
			<View style={{flex: 1, flexDirection: 'row', paddingLeft: 12}}>
				<Text style={{ color: 'white', fontSize: 24, paddingLeft: 40, textAlign: 'center', width: '100%'}}>Immo Agent</Text>								
			</View>
		);
	}
}


export default class MapExplorerScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = this._getInitialState();		
	}

	static navigationOptions = ({navigation}) =>  {		
		
		let params = navigation.getParam('togglePanel');
		if(!params) {
			params = () => {};
		}

		return {
			headerTitle: <HeaderTitle />,
			headerTintColor: 'white',
			headerStyle: {
				backgroundColor: '#007F32',			
			},
			headerTitleStyle: {
				fontWeight: 'bold'
			},
			headerRight: (
				<Button onPress={params}
				title="Filter"
				color="#007F32" />
			)
		}
	} 

	componentDidMount() {
		this.props.navigation.setParams({ togglePanel: this._toggleFilterPanel.bind(this)})
	}

	_getInitialState() {
		return {
			showFilterPanel: false,
			houses: houses.filter((house) => house.price < 1000),
			sliderValue: 1000			
		};
	}

	_getFilterButtonLabel() {
		return this.state.showFilterPanel ? 'Apply' : 'Immo Agent';
	}

	_toggleFilterPanel() {
		this.setState({
			showFilterPanel: !this.state.showFilterPanel
		});
	}

	_change(value) {
		this.setState(() => {
		  return {
			sliderValue: parseFloat(value),
			houses: houses.filter((house) => house.price < parseFloat(value))
		  };
		});		
	}

	_renderOverlayPanel() {
		
		if (!this.state.showFilterPanel) {
			return null;
		}

		const {sliderValue} = this.state;

		return (
			<View style={styles.filterPanel}>
				<OverlayPanel>	
					<View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
						<Text style={styles.maxPriceLabel}>Maximum Rate:</Text>
						<Text style={styles.maxPriceLabel}>€ {sliderValue}</Text>
					</View>				
					<Slider 
					thumbTintColor="#9bc31c"
					maximumTrackTintColor="#9bc31c"
					minimumTrackTintColor="white"
					style={styles.maxPriceSlider} 
					step={100} 
					minimumValue={500}
					maximumValue={1500} 
					onValueChange={this._change.bind(this)} 
					value={sliderValue} />					
					
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
						this._toggleFilterPanel()
						this.props.navigation.navigate('HouseInfo', { house: house});
					}}
					houses={this.state.houses}
				/>				
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
		zIndex: 4
	},
	topBarButton: {
		color: '#ff0000',
		width: '100%',
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
		marginTop: 10,
		fontWeight: 'bold'
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
