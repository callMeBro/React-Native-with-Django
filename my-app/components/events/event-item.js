import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

const EventItem = ({ event }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('EventDetails', { eventId: event.id });
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <Text style={styles.title}>{event.name}</Text>
      <Text style={styles.description}>{event.description}</Text>
      <Image 
        style={{ width: 100, height: 100 }}
        source={{ uri: event.qr_code }}
      />
    </TouchableOpacity>
  );
};

export default EventItem;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
    flex: 1,
    marginHorizontal: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
});
