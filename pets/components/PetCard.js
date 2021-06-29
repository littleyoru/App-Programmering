import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
//import { Icon } from 'react-native-elements';
import GenderIcon from '../components/GenderIcon';
import { SafeAreaView } from 'react-navigation';

class PetCard extends Component {

    constructor (props) {
        super(props)
    }

    render() {

        //let icon = this.props.info.sex === 'F' ? 'female-symbol' : 'male-symbol'

        return (
            <View style={styles.item}>
                <Image source={this.props.info.picUrl} style={styles.image} />
                <Text style={styles.title}>{this.props.info.name}</Text>
                <View style={styles.infoContainer}>
                    <GenderIcon sex={this.props.info.sex} />
                    <Text style={styles.text}>{this.props.info.race}</Text>
                </View>
                <Text style={styles.text}>{this.props.info.city}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    infoContainer: {
        flexDirection: 'row'
    },
    title: {
        fontWeight: '900',
        fontSize: 32
    },
    image: {
        flex: 0.8,
        resizeMode: 'center'
    },
    text: {
        paddingHorizontal: 8,
        fontSize: 18
    }
  })

export default PetCard;