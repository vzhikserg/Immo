import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class OverlayPanel extends React.Component {
    
    constructor() {
        super();
    }

    render() {        
        const {children} = this.props;            
        return (
            <View style={styles.container}>
            {children}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,        
        width: 'auto'
    }
});

export default OverlayPanel;