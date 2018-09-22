import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class SummaryTab extends React.Component {

    constructor(props) {
		super(props);		 
	}

    render() {
        return (
            <View style={[styles.container, { backgroundColor: 'white' }]} >
                <Grid>
                    <Row>
                        <Col>
                            <Text style={styles.text}>Your current rent</Text>
                        </Col>
                        <Col>
                            <Text style={[styles.text, { textDecorationLine: 'line-through', color: 'gray' }]}>870 EUR</Text>
                        </Col>
                    </Row>
                    <Row  style={styles.odd}>
                        <Col>
                            <Text style={styles.text}>Monthly loan rate</Text>
                        </Col>
                        <Col>
                            <Text style={[styles.text, { color: 'green' }]}>{this.props.house.price} EUR</Text>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Text style={styles.text}>Credit period</Text>
                        </Col>
                        <Col>
                            <Text style={styles.text}>300 months</Text>
                        </Col>
                    </Row>
                    <Row  style={styles.odd}>
                        <Col>
                            <Text style={styles.text}>Daily sunshine</Text>
                        </Col>
                        <Col>
                            <Text style={styles.text}>5,4 hours</Text>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Text style={styles.text}>Supermarket</Text>
                        </Col>
                        <Col>
                            <Text style={styles.text}>5 minutes</Text>
                        </Col>
                    </Row>
                    <Row  style={styles.odd}>
                        <Col>
                            <Text style={styles.text}>Bus lines</Text>
                        </Col>
                        <Col>
                            <Text style={styles.text}>L17, U4</Text>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Button
                                onPress={() => { }}
                                title="Add bookmark"
                                style={styles.button}
                                color="#007F32"
                                accessibilityLabel="Add this house to your bookmarks"
                            />
                        </Col>
                        <Col>
                            <Button
                                color="#007F32"
                                onPress={() => { }}
                                style={styles.button}
                                borderRadius={0}
                                title="Request offer"
                                accessibilityLabel="Click this button to request the offer from the bank"
                            />
                        </Col>
                    </Row>
                </Grid>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    odd: {
      backgroundColor: '#eee'
    },
    text: {
        fontSize: 12,
        paddingLeft: 24,
        paddingBottom: 12,
        paddingTop: 12   
    },
    button: {
        padding: 24,
        borderRadius: 0
    }
})