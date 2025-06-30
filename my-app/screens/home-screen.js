import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import EventList from '../components/events/event-list';

const HomeScreen = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
     <EventList />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
