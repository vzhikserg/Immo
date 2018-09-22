import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class HouseInfo extends React.Component {

	constructor(props) {
		super(props);
	
		this.state = {
		  amount: 99,
		};
	  }

	render() {
		return (
      <View>
				<Text>Hopala</Text>
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
    }
});

export default HouseInfo;