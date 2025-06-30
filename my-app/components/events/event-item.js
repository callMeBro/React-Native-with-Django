import { useNavigation } from '@react-navigation/native'; // <-- import this
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const EventItem = ({ event }) => {
  const navigation = useNavigation(); // <-- fix typo here

  const handlePress = () => {
    // Navigate to a screen, for example 'EventDetails', passing event id or details
    navigation.navigate('EventDetails', { eventId: event.id });
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <Text style={styles.title}>{event.title}</Text>
      <Text style={styles.description}>{event.description}</Text>
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
