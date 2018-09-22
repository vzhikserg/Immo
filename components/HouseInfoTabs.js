import * as React from 'react';
import { StyleSheet, Dimensions, Text } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

import SummaryTab from './SummaryTab'
import DetailsTab from './DetailsTab';

export default class HouseInfoTabs extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'summary', title: 'Summary',  },
      { key: 'details', title: 'Details' },
    ],
  };

    _renderTabBar = props => <TabBar {...props} style={styles.header} />;

    _handleIndexChange = index => this.setState({ index });

    _renderScene = SceneMap({
      summary: () => <SummaryTab house={this.props.house} />,
      details: () => <DetailsTab house={this.props.house} />,
    });

    render() {
        
      return (
        <TabView
          navigationState={this.state}
          renderScene={this._renderScene}
          renderTabBar={this._renderTabBar}
          onIndexChange={this._handleIndexChange}
          style={styles.tab}
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
      backgroundColor: '#007F32'
    },
    tabbar: {
      backgroundColor: 'red',
    },
    tab: {      
      backgroundColor: 'pink'
    },
    indicator: {
      backgroundColor: 'red',
    },
    label: {
      color: '#fff',
      fontWeight: '400',
    },
  });