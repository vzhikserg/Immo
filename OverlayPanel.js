import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class OverlayPanel extends React.Component {
    
    constructor() {
        super();
        this.state = this.getInitialState();
    }

    getInitialState() {
        return {
            showPanel: true
        };
    }

    toggleShowPanel() {
        this.setState({
            showPanel: !this.state.showPanel
        });
    }

    _renderPanel() {
        
        if(this.state.showPanel) {
            const {children} = this.props;            
            return (
                <View style={styles.container}>
                {children}
                </View>
            );

        }else{
            return null;
        }
    }

    render() {
        
        const component = this;
        return component._renderPanel();
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,        
        width: 'auto'
    }
});

export default OverlayPanel;