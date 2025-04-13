import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const DashboardScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>My Schedule</Text>
      </View>

      {/* User Info */}
      <View style={styles.userSection}>
        <Image source={require('../assets/sample-prof-photo.png')} style={styles.profilePic} />
        <Text style={styles.userName}>Your Name</Text>
      </View>

      {/* Navigation Buttons */}
      <View style={styles.navButtons}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Schedule')}>
          <FontAwesome name="calendar" size={28} color="#333" />
          <Text>Schedule</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Profile')}>
          <FontAwesome name="user" size={28} color="#333" />
          <Text>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Settings')}>
          <MaterialCommunityIcons name="cog" size={28} color="#333" />
          <Text>Settings</Text>
        </TouchableOpacity>
      </View>

      {/* Upcoming Shift */}
      <View style={styles.upcomingCard}>
        <Text style={styles.sectionTitle}>Upcoming Shift</Text>
        <Text style={styles.shiftTime}>Shift Time</Text>
        <Text style={styles.shiftHour}>9:00am - 5:00pm</Text>
      </View>

      {/* Recommended Products (Clock In Cards) */}
      <Text style={styles.sectionTitle}>Recommended Products</Text>

      <TouchableOpacity
        style={styles.clockCard}
        onPress={() => navigation.navigate('ClockIn')}
      >
        <MaterialCommunityIcons
          name="clock-outline"
          size={24}
          color="white"
          style={styles.clockIcon}
        />
        <Text style={styles.clockText}>Next Clock In</Text>
      </TouchableOpacity>
      <Text style={styles.shiftLabel}>Monday 9:00am - 5:00pm</Text>

      <TouchableOpacity
        style={styles.clockCard}
        onPress={() => navigation.navigate('ClockIn')}
      >
        <MaterialCommunityIcons
          name="clock-outline"
          size={24}
          color="white"
          style={styles.clockIcon}
        />
        <Text style={styles.clockText}>Next Clock In</Text>
      </TouchableOpacity>
      <Text style={styles.shiftLabel}>Tuesday 9:00am - 5:00pm</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 30,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#0a469e',
    padding: 15,
  },
  headerText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  userSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ccc',
    marginRight: 15,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
  },
  navButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
  },
  navButton: {
    alignItems: 'center',
    width: 80,
  },
  upcomingCard: {
    marginHorizontal: 15,
    padding: 15,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 8,
    marginBottom: 20,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    marginHorizontal: 15,
    marginBottom: 8,
  },
  shiftTime: {
    fontWeight: '600',
    fontSize: 13,
  },
  shiftHour: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  clockCard: {
    height: 150,
    backgroundColor: '#207cca',
    marginHorizontal: 15,
    marginBottom: 8,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  clockIcon: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  clockText: {
    color: 'white',
    fontWeight: 'bold',
  },
  shiftLabel: {
    marginLeft: 15,
    marginBottom: 15,
    fontSize: 12,
    fontWeight: 'Bold',
  },
});

export default DashboardScreen;
