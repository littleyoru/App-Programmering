import React, { Component } from 'react';
import MapView from 'react-native-maps';
//import Geolocation, { requestAuthorization } from 'react-native-geolocation-service';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Shelters extends Component {

    static navigationOptions = {
        title: 'Shelters'
    }

    constructor(props) {
        super(props);

    // Geolocation.setRNConfiguration(skipPermissionRequests);
    // Geolocation.requestAuthorization();
        this.state = {
            location: null
            // region: {
            //   latitude:       LATITUDE,
            //   longitude:      LONGITUDE,
            //   latitudeDelta:  LATITUDE_DELTA,
            //   longitudeDelta: LONGITUDE_DELTA,
            // },
            // marker: {
            //   latlng:{
            //     latitude:       null,
            //     longitude:      null,
            //     latitudeDelta:  LATITUDE_DELTA,
            //     longitudeDelta: LONGITUDE_DELTA
            //   }
            // }
          }
    }

    findCoordinates = () => {
        navigator.geolocation.getCurrentPosition(
            position => {
                const location = JSON.stringify(position);
                this.setState({ location });
            },
            error => {
                console.log('error ', error.message);
            },
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
    };

    // onRegionChange(region) {
    //     this.setState({ region });
    // }

    // getInitialState() {
    //     return {
    //       region: {
    //         latitude: 37.78825,
    //         longitude: -122.4324,
    //         latitudeDelta: 0.0922,
    //         longitudeDelta: 0.0421,
    //       },
    //     };
    // }

    render () {
        return(
            <View style={styles.mapsContainer}>
                <MapView style={styles.maps} 
                    initialRegion={{latitude: 56.4792628,
                    longitude: 9.6238234,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,}}
                    showsUserLocation
                    loadingEnabled>
                    <MapView.Marker coordinate={{latitude: 56.4792628, longitude: 9.6238234, title: 'title', description: 'description'}} />
                </MapView>
                <TouchableOpacity style={styles.locationBox} onPress={this.findCoordinates}>
                    <Text style={styles.location}>Find my location</Text>
                    <Text style={styles.location}>{this.state.location}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mapsContainer: {
        flex: 1
        // alignItems: "center",
        // justifyContent: "center"
    },
    maps: {
        flex: 0.7
    },
    locationBox: {
        // height: 50,
        padding: 10,
        alignSelf: "flex-end"
    },
    location: {
        color: "#000000",
        backgroundColor: "#F2F2F2",
        fontSize: 12,
        textAlign: "center"
    }
})

export default Shelters;