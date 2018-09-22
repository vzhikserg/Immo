import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class SummaryTab extends React.Component {
    render() {
        return (
        <View style={[styles.container, { backgroundColor: '#ff4081' }]} >
            <Text>Hell1</Text>
        </View>
        )
    }    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
  })