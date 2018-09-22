import React from 'react';
import MapExplorerScreen from './screens/MapExplorerScreen';
import HouseInfoScreen from './screens/HouseInfoScreen';
import {createStackNavigator} from 'react-navigation';

const AppNavigator = createStackNavigator({
  MapExplorer: MapExplorerScreen,
  HouseInfo: HouseInfoScreen,
}, {
  initialRouteName: 'MapExplorer',  
})

export default class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}



