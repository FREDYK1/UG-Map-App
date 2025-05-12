import React, { useState } from 'react';
import { 
import { Ionicons } from '@expo/vector-icons';

View, 
Text, 
StyleSheet, 
FlatList, 
TouchableOpacity, 
TextInput,
SafeAreaView
} from 'react-native';

const ServicesScreen = () => {
const [searchQuery, setSearchQuery] = useState('');

// Example services data - replace with your actual data
const services = [
    { id: '1', title: 'Academic Services', icon: 'school', description: 'Course registration, transcripts, and academic advising' },
    { id: '2', title: 'Housing', icon: 'home', description: 'Accommodation and residential services' },
    { id: '3', title: 'Health Services', icon: 'medical', description: 'Campus health clinic and counseling' },
    { id: '4', title: 'Financial Services', icon: 'cash', description: 'Fees payment, scholarships and financial aid' },
    { id: '5', title: 'IT Support', icon: 'laptop', description: 'Technical support and digital resources' },
    { id: '6', title: 'Library', icon: 'library', description: 'Access to books, journals and study spaces' },
];

const filteredServices = services.filter(service => 
    service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.description.toLowerCase().includes(searchQuery.toLowerCase())
);

const renderServiceItem = ({ item }) => (
    <TouchableOpacity style={styles.serviceItem}>
        <View style={styles.iconContainer}>
            <Ionicons name={item.icon} size={24} color="#3498db" />
        </View>
        <View style={styles.serviceContent}>
            <Text style={styles.serviceTitle}>{item.title}</Text>
            <Text style={styles.serviceDescription}>{item.description}</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color="#bbb" />
    </TouchableOpacity>
);

return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Campus Services</Text>
        
        <View style={styles.searchContainer}>
            <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
            <TextInput
                style={styles.searchInput}
                placeholder="Search services..."
                value={searchQuery}
                onChangeText={setSearchQuery}
            />
            {searchQuery ? (
                <TouchableOpacity onPress={() => setSearchQuery('')}>
                    <Ionicons name="close-circle" size={20} color="#666" />
                </TouchableOpacity>
            ) : null}
        </View>
        
        <FlatList
            data={filteredServices}
            keyExtractor={item => item.id}
            renderItem={renderServiceItem}
            contentContainerStyle={styles.listContainer}
        />
    </SafeAreaView>
);
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 16,
},
header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2c3e50',
},
searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
},
searchIcon: {
    marginRight: 8,
},
searchInput: {
    flex: 1,
    fontSize: 16,
},
listContainer: {
    paddingBottom: 20,
},
serviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
},
iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ebf5ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
},
serviceContent: {
    flex: 1,
},
serviceTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
},
serviceDescription: {
    fontSize: 14,
    color: '#666',
},
});

export default ServicesScreen;