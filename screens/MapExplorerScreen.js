import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

import MapExplorer from '../components/MapExplorer'
import OverlayPanel from '../components/OverlayPanel';
import RangeSlider from 'react-native-range-slider';



export default class MapExplorerScreen extends React.Component {

	constructor() {
		super();
		this.state = this._getInitialState();
	}

	static navigationOptions = {
		header: null
	}
	
	_getInitialState() {
		return {
			showFilterPanel: false
		};
	}

	_getFilterButtonLabel() {
		return this.state.showFilterPanel 
			? 'Close' : 'Filter';
	}

	_toggleFilterPanel() {
		this.setState({
			...this.state,
			showFilterPanel: !this.state.showFilterPanel
		});
	}

	_renderOverlayPanel(showPanel) {
		
		if( !showPanel ) {
			return null;
		}

		
		return (
			<View style={styles.filterPanel}>
            <OverlayPanel>
              <Button title="Filter Knob" onPress={() => {}}></Button>     
							<RangeSlider
								minValue={0}
								maxValue={100}
								tintColor={'#da0f22'}
								handleBorderWidth={1}
								handleBorderColor="#454d55"
								selectedMinimum={20}
								selectedMaximum={40}
								style={{ flex: 1, height: 70, padding: 10, backgroundColor: '#ddd' }}
								onChange={ (data)=>{ console.log(data);} }
							/>       
              <Button title="Close" onPress={() => this._toggleFilterPanel()}></Button>            
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
				<MapExplorer style={styles.mapStyle} onMarkerPress={() => {this.props.navigation.navigate('HouseInfo')}}></MapExplorer>
				<View style={styles.topBar}>
					<Button 
					onPress={() => this._toggleFilterPanel()} 
					color="#007F32" 
					title={filterButtonLabel}
					style={styles.topBarButton}></Button>                  
				</View>   
				{renderOverlayPanel(showFilterPanel)}
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
			zIndex: 2    
			
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
		},
		filterPanel: {
			position: 'absolute',
			backgroundColor: '#007F32',
			height: 'auto',
			width: '100%',
			zIndex: 4,
			opacity: 0.9,
			padding: 40,
			top: 0
		}
	});
