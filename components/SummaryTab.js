import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class SummaryTab extends React.Component {
    render() {
        return (
            <View style={[styles.container, { backgroundColor: 'white' }]} >
                <Grid>
                    <Row>
                        <Col>
                            <Text style={styles.text}>Your current rent</Text>
                        </Col>
                        <Col>
                            <Text style={[styles.text, { textDecorationLine: 'line-through', color: 'gray' }]}>870,22 EUR</Text>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Text style={styles.text}>Monthly loan rate</Text>
                        </Col>
                        <Col>
                            <Text style={[styles.text, { color: 'green' }]}>898,50 EUR</Text>
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
                    <Row>
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
                    <Row>
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
                                accessibilityLabel="Add this house to your bookmarks"
                            />
                        </Col>
                        <Col>
                            <Button
                                onPress={() => { }}
                                style={styles.button}
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
    text: {
        fontSize: 20
    },
    button: {
        color: "#007F32"
    }
})