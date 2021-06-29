import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

class InfoCell extends Component {

    constructor(props) {
        super(props)
    }

    render () {
        return (
            <View style={styles.container}>
                {this.props.label && <Text style={styles.label}>{this.props.label}</Text>}
                {this.props.icon && this.props.icon}
                <Text style={styles.info}>{this.props.text}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        width: '50%'
    },
    label: {
        fontSize: 16,
        fontWeight: '700'
    },
    info: {
        fontSize: 16,
        marginLeft: 8
    }
})

export default InfoCell;