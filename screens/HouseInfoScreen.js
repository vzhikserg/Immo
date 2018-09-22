import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableHighlight } from 'react-native';
import HouseInfoTabs from '../components/HouseInfoTabs';
import ImageSlider from 'react-native-image-slider';

// this data should come from bank's api 
const images = [
	require('../assets/house/1.jpg'), // 0
	require('../assets/house/2.jpg'), // 1
	require('../assets/house/3.jpg'), // 2
	require('../assets/house/x/2/CasaDORO1.jpg'), // 3
	require('../assets/house/x/2/CasaDORO2.jpg'), // 4
	require('../assets/house/x/2/CasaDORO3.jpg'), // 5
	require('../assets/house/x/3/CasaRosario1.jpg'), // 6
	require('../assets/house/x/3/CasaRosario2.jpg'), // 7
	require('../assets/house/x/3/CasaRosario3.jpg'), // 8
	require('../assets/house/x/4FincaBianca.jpg'), // 9
	require('../assets/house/x/5RossoAragosta.jpg'), // 10
	require('../assets/house/x/6CasaDiGiuseppe.jpg'), // 11
	require('../assets/house/x/7VillaDeiCampi.jpg'), // 12
	require('../assets/house/x/8CasaModerna.jpg'), // 13
];

class HouseInfo extends React.Component {
	static navigationOptions = ({ navigation }) => ({
		headerTitle: navigation.getParam('house').name,
		headerTintColor: 'white',
		headerStyle: {
			backgroundColor: '#007F32'
		},
		headerTitleStyle: {
			fontWeight: 'bold'
		}
	});

	constructor(props) {
		super(props);
		this.state = { house: props.navigation.state.params.house };
	}

	render() {
		currentImages = images.filter((image, ind) => this.state.house.images.includes(ind));
		return (

			<View style={styles.container}>
				<ImageSlider
					loopBothSides
					images={ currentImages }
					style={styles.slider}
					customSlide={({ index, item, style, width }) => (
						// It's important to put style here because it's got offset inside
						<View key={index} style={[ style, styles.customSlide ]}>
							<Image source={item} style={styles.customImage} resizeMode="contain" />
						</View>
					)}
					customButtons={(position, move) => (
						<View style={styles.buttons}>
							{currentImages.map((image, index) => {
								return (
									<TouchableHighlight key={index} onPress={() => move(index)} style={styles.button}>
										<Text style={(position === index && styles.buttonSelected) || styles.bullet}>
											•
										</Text>
									</TouchableHighlight>
								);
							})}
						</View>
					)}
				/>
				<HouseInfoTabs house={this.state.house} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFF',
		width: 'auto',
		alignSelf: 'stretch'
	},
	slider: {
		padding: 0,
		margin: 0,
		backgroundColor: '#333',
		height: 330,
		flex: 0.5
	},
	buttons: {
		zIndex: 1,
		height: 15,
		marginTop: -8,
		marginBottom: 4,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		opacity: 0.8
	},
	button: {
		margin: 15,
		width: 15,
		height: 15,
		opacity: 0.9,
		alignItems: 'center',
		justifyContent: 'center'
	},
	bullet: {
		fontSize: 48,
		color: '#fff',
		opacity: 0.2
	},
	buttonSelected: {
		opacity: 1,
		fontSize: 48,
		color: '#007F32'
	},
	customSlide: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	customImage: {
		width: '100%',
		height: 420
	}
});

export default HouseInfo;
