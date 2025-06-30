import { useState } from 'react';
import {
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import EventItem from '../../components/events/event-item.js'; // ✅ make sure the path is correct
import { events } from '../../data/dummy'; // ✅ dummy data

const EventList = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    console.log('Refreshing...');
    setTimeout(() => {
      console.log('Done refreshing');
      setRefreshing(false);
    }, 1500);
  };

  const renderItem = ({ item }) => (
    <EventItem
      event={item}
      onPress={() => console.log('Pressed:', item.title)}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Upcoming Events</Text>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};

export default EventList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 24,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  listContent: {
    paddingBottom: 24,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
});
