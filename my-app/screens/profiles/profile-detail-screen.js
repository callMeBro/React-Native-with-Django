import { useNavigation, useRoute } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const ProfileDetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { profile } = route.params;

  // Update the header title dynamically based on profile name
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: profile?.name || 'Profile',
    });
  }, [navigation, profile]);

  if (!profile) {
    return (
      <View style={styles.container}>
        <Text>No profile data available.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {profile.photoUrl ? (
        <Image source={{ uri: profile.photoUrl }} style={styles.avatar} />
      ) : (
        <View style={[styles.avatar, styles.placeholder]}>
          <Text style={styles.placeholderText}>No Photo</Text>
        </View>
      )}

      <Text style={styles.name}>{profile.name}</Text>
      <Text style={styles.email}>{profile.email}</Text>
      <Text style={styles.bio}>{profile.bio || 'No bio available.'}</Text>
    </View>
  );
};

export default ProfileDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 20,
    backgroundColor: '#ccc',
  },
  placeholder: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: '#666',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  email: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
  },
});
