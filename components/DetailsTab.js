import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class DetailsTab extends React.Component {
    render() {
        return (
        <View style={[styles.container, { backgroundColor: '#673ab7' }]} >
            <Text>Hell2</Text>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
  })