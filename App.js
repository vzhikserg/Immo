import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

import MapExplorer from './MapExplorer';
import OverlayPanel from './OverlayPanel';

export default class App extends React.Component {

  constructor() {
    super();
    
  }

  _click() {
    Alert.alert('Sergiiiiiiiiiiiiii');
  }

  render() {



    return (
      <View style={styles.container}>        
        <MapExplorer style={styles.mapStyle}></MapExplorer>
        <View style={styles.topBar}>
          <Button onPress={() => this._click()} color="#007F32" title="MENU" style={styles.topBarButton}></Button>                  
        </View>
        
        <OverlayPanel style={styles.filterPanel} showPanel={true}>
          <Button title="Hello"></Button>            
        </OverlayPanel>
        
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00FF00',            
    
  },
  topBar: {
    height: 70,
    width: '100%', 
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    position: 'absolute',
    paddingRight: 16,
    zIndex: 2    
    
  },
  topBarButton: {
    color: '#ff0000',
    backgroundColor: '#007F32',         
  },  
  text: {    
    color: '#fff',            
    padding: 20
  },
  mapStyle: {
    marginTop: -700,
    flex: 1,
    width: 'auto',
    alignSelf: 'stretch'    
  },
  filterPanel: {
    position: 'absolute',
    backgroundColor: '#007F32',
    height: 'auto',
    width: '100%',
    zIndex: 4,
    opacity: 0.9,
    padding: 40
  }
});
