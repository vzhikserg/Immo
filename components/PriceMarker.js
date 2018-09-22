import React from 'react';
import PropTypes from 'prop-types';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const propTypes = {
  amount: PropTypes.number.isRequired,
  fontSize: PropTypes.number,
};

const defaultProps = {
  fontSize: 13,
};

class PriceMarker extends React.Component {
  render() {
    const { fontSize, amount } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.bubble}>
          <Text style={[styles.dollar, { fontSize }]}>€</Text>
          <Text style={[styles.amount, { fontSize }]}>{amount}</Text>
        </View>
        <View style={styles.arrowBorder} />
        <View style={styles.arrow} />
      </View>
    );
  }
}  

PriceMarker.propTypes = propTypes;
PriceMarker.defaultProps = defaultProps;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
  bubble: {
    flex: 0,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: '#ffde00',
    padding: 2,
    borderRadius: 3,
    borderColor: '#000',
    borderWidth: 1,
  },
  dollar: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold'
  },
  amount: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold'
  },
  arrow: {
    backgroundColor: 'transparent',
    borderWidth: 4,
    borderColor: 'transparent',
    borderTopColor: '#000',
    alignSelf: 'center',
    marginTop: -9,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderWidth: 4,
    borderColor: 'transparent',
    borderTopColor: '#ffde00',
    alignSelf: 'center',
    marginTop: -0.5,
  },
});

export default PriceMarker;