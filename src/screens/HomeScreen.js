import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';

const HomeScreen = () => {
  const [userRole, setUserRole] = useState('regular'); // Default to 'regular', but this should be fetched from your database

  useEffect(() => {
    // Placeholder for a function that fetches the user's role based on their email or userID
    const fetchUserRole = async (email) => {
      // Simulate fetching user role. Replace this with actual database query.
      if (email === 'admin@example.com') {
        setUserRole('admin');
      }
    };

    if (auth().currentUser) {
      fetchUserRole(auth().currentUser.email);
    }
  }, []);

  const handleSignOut = async () => {
    try {
      await auth().signOut();
      // After sign out, navigate to login screen or reset app state as needed
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to the Secure App</Text>
      <Text style={styles.roleText}>Your role: {userRole}</Text>
      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  welcomeText: {
    fontSize: 22,
    marginBottom: 10,
  },
  roleText: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default HomeScreen;
