import * as React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { Constants } from 'expo';

const FirstRoute = () => (
  <View style={[styles.container, { backgroundColor: '#ff4081' }]} ><Text>Hell1</Text></View>
);

const SecondRoute = () => (
  <View style={[styles.container, { backgroundColor: '#673ab7' }]} ><Text>Hell2</Text></View>
);

const initialLayout = {
    height: 0,
    width: Dimensions.get('window').width,
  };

export default class HouseInfoTabs extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'First' },
      { key: 'second', title: 'Second' },
    ],
  };

    _renderTabBar = props => <TabBar {...props} style={styles.header} />;

    _handleIndexChange = index => this.setState({ index });

    _renderScene = SceneMap({
      first: FirstRoute,
      second: SecondRoute,
    });

    render() {
        
      return (
        <TabView
          navigationState={this.state}
          renderScene={this._renderScene}
          renderTabBar={this._renderTabBar}
          onIndexChange={this._handleIndexChange}
          initialLayout={{
            width: Dimensions.get('window').width,
            height: 100
          }}
        />
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      paddingTop: 300,
    },
    tabbar: {
      backgroundColor: '#3f51b5',
    },
    tab: {
      width: 120,
    },
    indicator: {
      backgroundColor: '#ffeb3b',
    },
    label: {
      color: '#fff',
      fontWeight: '400',
    },
  });