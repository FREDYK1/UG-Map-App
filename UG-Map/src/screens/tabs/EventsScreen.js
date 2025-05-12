import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';

const EventsScreen = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            // Replace this with your actual API call
            const mockData = [
                { id: '1', title: 'Campus Tour', date: '2023-06-15', location: 'Main Building' },
                { id: '2', title: 'Student Orientation', date: '2023-06-20', location: 'Auditorium' },
                { id: '3', title: 'Career Fair', date: '2023-07-05', location: 'Student Center' },
            ];
            
            setTimeout(() => {
                setEvents(mockData);
                setLoading(false);
            }, 1000); // Simulating network delay
        } catch (err) {
            setError('Failed to fetch events');
            setLoading(false);
            console.error(err);
        }
    };

    const renderEventItem = ({ item }) => (
        <TouchableOpacity style={styles.eventCard}>
            <Text style={styles.eventTitle}>{item.title}</Text>
            <Text style={styles.eventInfo}>Date: {item.date}</Text>
            <Text style={styles.eventInfo}>Location: {item.location}</Text>
        </TouchableOpacity>
    );

    if (loading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" color="#0066cc" />
                <Text>Loading events...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.centered}>
                <Text style={styles.errorText}>{error}</Text>
                <TouchableOpacity style={styles.retryButton} onPress={fetchEvents}>
                    <Text style={styles.retryButtonText}>Retry</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.screenTitle}>Upcoming Events</Text>
            {events.length > 0 ? (
                <FlatList
                    data={events}
                    keyExtractor={(item) => item.id}
                    renderItem={renderEventItem}
                    contentContainerStyle={styles.listContainer}
                />
            ) : (
                <View style={styles.centered}>
                    <Text>No upcoming events found</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 16,
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    screenTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    listContainer: {
        paddingBottom: 20,
    },
    eventCard: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        marginBottom: 12,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    eventTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    eventInfo: {
        fontSize: 14,
        color: '#666',
        marginBottom: 4,
    },
    errorText: {
        color: 'red',
        marginBottom: 16,
    },
    retryButton: {
        backgroundColor: '#0066cc',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 4,
    },
    retryButtonText: {
        color: '#fff',
    },
});

export default EventsScreen;