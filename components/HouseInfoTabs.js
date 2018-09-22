import * as React from 'react';
import { StyleSheet, Dimensions, Text } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

import SummaryTab from './SummaryTab'
import DetailsTab from './DetailsTab';

export default class HouseInfoTabs extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'summary', title: 'Summary' },
      { key: 'details', title: 'Details' },
    ],
  };

    _renderTabBar = props => <TabBar {...props} style={styles.header} />;

    _handleIndexChange = index => this.setState({ index });

    _renderScene = SceneMap({
      summary: SummaryTab,
      details: DetailsTab,
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
            height: 0
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
      paddingTop: 0,
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