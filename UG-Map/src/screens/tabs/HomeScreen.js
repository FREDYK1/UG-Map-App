import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>UG Map</Text>
                <Text style={styles.subtitle}>Find your way around campus</Text>
            </View>

            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search for locations..."
                    placeholderTextColor="#999"
                />
                <TouchableOpacity style={styles.searchButton}>
                    <Text style={styles.searchButtonText}>Search</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.mapContainer}>
                {/* Map will be rendered here */}
                <Text style={styles.placeholderText}>Map View</Text>
            </View>

            <View style={styles.quickAccessContainer}>
                <TouchableOpacity style={styles.quickAccessButton}>
                    <Text style={styles.buttonText}>Nearby</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.quickAccessButton}>
                    <Text style={styles.buttonText}>Favorites</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.quickAccessButton}>
                    <Text style={styles.buttonText}>Directions</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        padding: 16,
        backgroundColor: '#2E86C1',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    subtitle: {
        fontSize: 16,
        color: '#E0E0E0',
        marginTop: 4,
    },
    searchContainer: {
        flexDirection: 'row',
        padding: 16,
        backgroundColor: 'white',
        margin: 16,
        borderRadius: 8,
        elevation: 2,
    },
    searchInput: {
        flex: 1,
        height: 40,
    },
    searchButton: {
        backgroundColor: '#2E86C1',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
        borderRadius: 4,
    },
    searchButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    mapContainer: {
        flex: 1,
        margin: 16,
        backgroundColor: '#E0E0E0',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    placeholderText: {
        fontSize: 18,
        color: '#757575',
    },
    quickAccessContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
    },
    quickAccessButton: {
        backgroundColor: 'white',
        padding: 12,
        borderRadius: 8,
        flex: 1,
        marginHorizontal: 6,
        alignItems: 'center',
        elevation: 2,
    },
    buttonText: {
        color: '#2E86C1',
        fontWeight: 'bold',
    },
});

export default HomeScreen;