import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableHighlight } from 'react-native';
import HouseInfoTabs from '../components/HouseInfoTabs';
import ImageSlider from 'react-native-image-slider';

class HouseInfo extends React.Component {
	static navigationOptions =({navigation}) => ({
        headerTitle: navigation.getParam('house').name
	})
	// navigation.getParam('name')
	
	constructor(props) {
		super(props);
	}

	render() {
		const images = [
			require('../assets/house/1.jpg'),
			require('../assets/house/2.jpg'),
			require('../assets/house/3.jpg')
		];

		return (
			<View style={styles.container}>
				<ImageSlider
					loopBothSides
					images={images}
					style={styles.slider}
					customSlide={({ index, item, style, width }) => (
						// It's important to put style here because it's got offset inside
						<View key={index} style={[ style, styles.customSlide ]}>
							<Image source={item} style={styles.customImage} resizeMode="contain" />
						</View>
					)}
					customButtons={(position, move) => (
						<View style={styles.buttons}>
							{images.map((image, index) => {
								return (
									<TouchableHighlight
										key={index}										
										onPress={() => move(index)}
										style={styles.button}
									>
										<Text style={position === index && styles.buttonSelected || styles.bullet}>•</Text>
									</TouchableHighlight>
								);
							})}
						</View>
					)}
				/>
				<HouseInfoTabs />
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
