import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';

class HomeScreen extends Component {

    // create the title for the screen
    static navigationOptions = {
        title : "HomeScreen"
    }
  
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <View style={styles.container}>
                <TouchableHighlight style={styles.btn}>
                    <Text style={styles.btnText}>Missing pets</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.btn} onPress={() => {this.props.navigation.navigate('Pets')}}>
                    <Text style={styles.btnText}>Adopt a pet</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.btn} onPress={() => {this.props.navigation.navigate('Shelters')}}>
                    <Text style={styles.btnText}>Find Shelters</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    btn: {
        backgroundColor: '#C1D90B',
        width: '70%',
        marginBottom: 16,
        padding: 16,
        borderRadius: 5,
        shadowOffset:{  width: 5,  height: 10,  },
        shadowColor: '#000000',
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 1
    },
    btnText: {
        fontSize: 18,
        fontWeight: '700',
        textAlign: 'center'
    }
  });

export default HomeScreen;