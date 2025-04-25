import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, Alert, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const DashboardScreen = () => {
  const navigation = useNavigation();

  const [clockedIn, setClockedIn] = useState(false);
  const [clockInTime, setClockInTime] = useState(null);
  const [history, setHistory] = useState([]);

  const handleClockIn = () => {
    if (clockedIn) {
      Alert.alert('Already Clocked In', 'You must clock out before clocking in again.');
      return;
    }

    const now = new Date();
    setClockedIn(true);
    setClockInTime(now.toString()); 
  };

  const handleClockOut = () => {
    if (!clockedIn || !clockInTime) {
      Alert.alert('Not Clocked In', 'Please clock in before clocking out.');
      return;
    }

    const clockOutTime = new Date();
    const clockInDate = new Date(clockInTime);
    const durationMs = clockOutTime - clockInDate;
    const durationMin = Math.floor(durationMs / 60000);

    const newLog = {
      date: clockOutTime.toLocaleDateString(),
      in: clockInDate.toLocaleTimeString(),
      out: clockOutTime.toLocaleTimeString(),
      duration: durationMin,
    };

    setHistory([newLog, ...history]);
    setClockedIn(false);
    setClockInTime(null);

    Alert.alert('Clocked Out', `You worked for ${durationMin} minutes`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Onlyfriends</Text>
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
      <Text style={styles.sectionTitle}>Upcoming Shift</Text>
      <View style={styles.upcomingCard}>
        <Text style={styles.shiftTime}>Shift Time</Text>
      </View>

      {/* Attendance Checker */}
      <Text style={styles.sectionTitle}>Attendance Checker</Text>
      <View style={styles.attendanceSection}>
        <Text style={styles.attendanceText}>
          {clockedIn ? `Clocked in at: ${new Date(clockInTime).toLocaleString()}` : 'Not Clocked In'}
        </Text>

        <View style={styles.attendanceButtons}>
          <TouchableOpacity
            style={[styles.attendanceButton, { backgroundColor: clockedIn ? '#ccc' : '#207cca' }]}
            onPress={handleClockIn}
            disabled={clockedIn}
          >
            <Text style={styles.attendanceButtonText}>Clock In</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.attendanceButton, { backgroundColor: clockedIn ? '#f44336' : '#ccc' }]}
            onPress={handleClockOut}
            disabled={!clockedIn}
          >
            <Text style={styles.attendanceButtonText}>Clock Out</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* History Log Section */}
      <Text style={styles.sectionTitle}>Clock-In/Out History</Text>
        <View style={styles.historyContainer}>
          {history.length === 0 ? (
            <Text style={styles.noHistoryText}>No history yet.</Text>
          ) : (
            <ScrollView style={styles.historyScroll} showsVerticalScrollIndicator={true}>
              {history.map((log, index) => (
                <View key={index} style={styles.historyCard}>
                  <Text style={styles.historyText}>Date: {log.date}</Text>
                  <Text style={styles.historyText}>In: {log.in}</Text>
                  <Text style={styles.historyText}>Out: {log.out}</Text>
                  <Text style={styles.historyText}>Duration: {log.duration} mins</Text>
                </View>
              ))}
            </ScrollView>
          )}
        </View>

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
    marginBottom: 50,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 20,
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
  shiftLabel: {
    marginLeft: 15,
    marginBottom: 15,
    fontSize: 12,
    fontWeight: 'bold',
  },
  shiftLabel2: {
    marginLeft: 15,
    marginBottom: 15,
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  attendanceSection: {
    marginHorizontal: 15,
    padding: 15,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  attendanceText: {
    fontSize: 14,
    marginBottom: 10,
    fontWeight: '600',
  },
  attendanceButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  attendanceButton: {
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
  },
  attendanceButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  historyCard: {
    backgroundColor: '#f1f1f1',
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  historyText: {
    fontSize: 13,
    marginBottom: 2,
  },
  historyContainer: {
    height: 200, // Adjust as needed
    marginHorizontal: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 8,
    backgroundColor: '#fafafa',
    padding: 10,
  },
  historyScroll: {
    flex: 1,
  },
  noHistoryText: {
    fontStyle: 'italic',
    color: '#777',
  },
  
});

export default DashboardScreen;
