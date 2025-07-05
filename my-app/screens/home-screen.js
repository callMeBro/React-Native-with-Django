import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import EventList from '../components/events/event-list';

const HomeScreen = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetchData();
  }, []);

 const fetchData = async () => {
  try {
    const response = await fetch('http://10.0.2.2:8000/api/events/');
    console.log('Status:', response.status);
    const text = await response.text();  // get raw response text
    console.log('Response text:', text);

    // If status is OK, parse JSON, else throw error
    if (response.ok) {
      const json = JSON.parse(text);
      setData(json);
    } else {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.error('Failed to fetch events:', error);
  }
};

  return (
    <View style={styles.container}>
      <EventList events={data} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
});

export default HomeScreen;
