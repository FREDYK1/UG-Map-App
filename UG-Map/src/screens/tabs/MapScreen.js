import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = () => {
    const [region, setRegion] = useState({
        latitude: 0.3136, // Default to UG coordinates
        longitude: 32.5811,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    });
    
    const [markers, setMarkers] = useState([]);

    useEffect(() => {
        // Fetch markers or points of interest from API or local storage
        // Example:
        // fetchMarkers().then(data => setMarkers(data));
    }, []);

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                region={region}
                onRegionChangeComplete={setRegion}
            >
                {markers.map((marker, index) => (
                    <Marker
                        key={index}
                        coordinate={marker.coordinate}
                        title={marker.title}
                        description={marker.description}
                    />
                ))}
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});

export default MapScreen;