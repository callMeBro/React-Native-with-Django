import { Button, StyleSheet, Text, View } from 'react-native';

const ProfileScreen = ({ navigation, route }) => {
  // Get profile from params or set default
  const profile = route.params?.profile || {
    name: 'John Doe',
    email: 'john@example.com',
    bio: 'This is a sample user bio.',
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{profile.name}</Text>
      <Text style={styles.email}>{profile.email}</Text>
      <Text style={styles.bio}>{profile.bio}</Text>

      <Button
        title="Go to Profile Details"
        onPress={() =>
          navigation.navigate('ProfileDetails', { profile }) // 👈 fixed this
        }
      />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  email: {
    fontSize: 18,
    color: '#666',
    marginBottom: 12,
    textAlign: 'center',
  },
  bio: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
});
