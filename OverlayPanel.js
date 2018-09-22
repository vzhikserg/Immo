import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class OverlayPanel extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                {props.children}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
        widht: 'auto'
    }
});