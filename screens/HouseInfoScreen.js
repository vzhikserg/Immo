import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableHighlight } from 'react-native';
import HouseInfoTabs from '../components/HouseInfoTabs'
import ImageSlider from 'react-native-image-slider';
class HouseInfo extends React.Component {

	static navigationOptions =({navigation}) => ({
        headerTitle: "Villa Nuova"
	})
	// navigation.getParam('name')

	constructor(props) {
		super(props);
	
		this.state = {
		  amount: 99,
		};
	}

	render() {

		const images = [
			'https://placeimg.com/640/640/nature',
			'https://placeimg.com/640/640/people',
			'https://placeimg.com/640/640/animals',
			'https://placeimg.com/640/640/beer',
		  ];

		return (
      		<View style={styles.container}>
				<ImageSlider
          			loopBothSides
          			images={images}
          			customSlide={({ index, item, style, width }) => (
            // It's important to put style here because it's got offset inside
            <View key={index} style={[style, styles.customSlide]}>
              <Image source={{ uri: item }} style={styles.customImage} />
            </View>
          )}
          customButtons={(position, move) => (
            <View style={styles.buttons}>
              {images.map((image, index) => {
                return (
                  <TouchableHighlight
                    key={index}
                    underlayColor="#ccc"
                    onPress={() => move(index)}
                    style={styles.button}
                  >
                    <Text style={position === index && styles.buttonSelected}>
                      o
                    </Text>
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
	slider: { backgroundColor: '#000', height: 350 },
	buttons: {
	  zIndex: 1,
	  height: 15,
	  marginTop: -25,
	  marginBottom: 10,
	  justifyContent: 'center',
	  alignItems: 'center',
	  flexDirection: 'row',
	},
	button: {
	  margin: 3,
	  width: 15,
	  height: 15,
	  opacity: 0.9,
	  alignItems: 'center',
	  justifyContent: 'center',	  
	},
	buttonSelected: {
	  opacity: 1,
	  color: 'red',	  
	},
	customSlide: {
	  backgroundColor: 'green',
	  alignItems: 'center',
	  justifyContent: 'center',
	},
	customImage: {
	  width: 600,
	  height: 600,
	},
  });

export default HouseInfo;