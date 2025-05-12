import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
    const navigation = useNavigation();
    const [userData, setUserData] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        profileImage: 'https://via.placeholder.com/150',
    });

    // Fetch user data
    useEffect(() => {
        // TODO: Implement fetching user data from API or local storage
    }, []);

    const handleLogout = () => {
        // TODO: Implement logout logic
        console.log('Logout pressed');
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.profileHeader}>
                    <Image
                        source={{ uri: userData.profileImage }}
                        style={styles.profileImage}
                    />
                    <Text style={styles.userName}>{userData.name}</Text>
                    <Text style={styles.userEmail}>{userData.email}</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Account</Text>
                    <TouchableOpacity style={styles.option}>
                        <Text>Edit Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option}>
                        <Text>Settings</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Support</Text>
                    <TouchableOpacity style={styles.option}>
                        <Text>Help Center</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option}>
                        <Text>About</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity 
                    style={styles.logoutButton}
                    onPress={handleLogout}
                >
                    <Text style={styles.logoutText}>Logout</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
    profileHeader: {
        alignItems: 'center',
        paddingVertical: 20,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#e1e1e1',
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    userName: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    userEmail: {
        fontSize: 16,
        color: '#666',
    },
    section: {
        backgroundColor: '#fff',
        marginTop: 20,
        paddingHorizontal: 15,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#e1e1e1',
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 10,
    },
    option: {
        paddingVertical: 15,
        borderTopWidth: 1,
        borderTopColor: '#e1e1e1',
    },
    logoutButton: {
        marginHorizontal: 15,
        marginTop: 30,
        marginBottom: 20,
        backgroundColor: '#ff6b6b',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    logoutText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default ProfileScreen;