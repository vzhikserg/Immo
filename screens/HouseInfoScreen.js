import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import HouseInfoTabs from '../components/HouseInfoTabs'
class HouseInfo extends React.Component {

	constructor(props) {
		super(props);
	
		this.state = {
		  amount: 99,
		};
	}

	render() {
		console.log(this.state)
		return (
      <View>
				<Text>Hopala</Text>
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
    }
});

export default HouseInfo;