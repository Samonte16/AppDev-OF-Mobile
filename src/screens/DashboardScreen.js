import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DashboardScreen = () => {
  const navigation = useNavigation();
  const [logoutPressed, setLogoutPressed] = useState(false);

  const handleLogout = () => {
    // Simulate press effect
    setLogoutPressed(true);
    setTimeout(() => {
      setLogoutPressed(false);
      navigation.replace('Login'); // Replace this with your login screen name
    }, 200);
  };

  return (
    <View style={styles.root}>
      <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.contentContainer}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>My Schedule</Text>
        </View>

        {/* User Info */}
        <View style={styles.userRow}>
          <Image
            source={require('../assets/sample-prof-photo.png')}
            style={styles.profileImage}
          />
          <Text style={styles.userName}>Your Name</Text>
        </View>

        {/* Navigation Buttons */}
        <View style={styles.navRow}>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navIcon}>📅</Text>
            <Text>Schedule</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navIcon}>👤</Text>
            <Text>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navIcon}>⚙️</Text>
            <Text>Settings</Text>
          </TouchableOpacity>
        </View>

        {/* Upcoming Shift */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Upcoming Shift</Text>
          <View style={styles.shiftCard}>
            <Text style={styles.shiftTime}>Shift Time:</Text>
            <Text style={styles.shiftHour}>9:00 AM</Text>
            <Text style={styles.shiftCountdown}>1 hour left</Text>
          </View>
        </View>

        {/* Recommended Products */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recommended Products</Text>
          <ScrollView style={styles.scrollSection}>
            {[...Array(2)].map((_, i) => (
              <View key={i} style={styles.recommendationCard}>
                <View style={styles.cardHeader}>
                  <Text style={styles.clockIcon}>⏰</Text>
                </View>
                <Text style={styles.clockText}>Next Clock In</Text>
                <Text style={styles.cardFooter}>
                  {i === 0 ? 'Monday 9:00am - 5:00pm' : 'Tuesday 9:00am - 5:00pm'}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>

      {/* Logout Button */}
      <Pressable
        onPress={handleLogout}
        onPressIn={() => setLogoutPressed(true)}
        onPressOut={() => setLogoutPressed(false)}
        style={[styles.logoutButton, logoutPressed && styles.logoutButtonPressed]}
      >
        <Text style={styles.logoutText}>Logout</Text>
      </Pressable>
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 50,
    paddingBottom: 100,
    paddingHorizontal: 15,
  },
  header: {
    backgroundColor: '#0066cc',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 25,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ccc',
  },
  userName: {
    fontSize: 18,
    fontWeight: '500',
  },
  navRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  navItem: {
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: 100,
    height: 100,
    justifyContent: 'center',
  },
  navIcon: {
    fontSize: 42,
    marginBottom: 5,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  shiftCard: {
    backgroundColor: '#f5f5f5',
    padding: 20,
    borderRadius: 10,
    elevation: 2,
  },
  shiftTime: {
    fontSize: 16,
    color: '#333',
  },
  shiftHour: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 8,
  },
  shiftCountdown: {
    fontSize: 14,
    color: 'gray',
    marginTop: 4,
  },
  scrollSection: {
    maxHeight: 400,
  },
  recommendationCard: {
    backgroundColor: '#2277cc',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  cardHeader: {
    alignItems: 'flex-start',
    width: '100%',
  },
  clockIcon: {
    fontSize: 36,
    color: 'white',
  },
  clockText: {
    color: 'white',
    marginTop: 40,
    fontSize: 18,
    fontWeight: '600',
  },
  cardFooter: {
    color: 'white',
    marginTop: 40,
    fontSize: 16,
  },
  logoutButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#0066cc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    elevation: 4,
  },
  logoutButtonPressed: {
    backgroundColor: '#2277cc',
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
