import { useNavigation, useRoute } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { Text, View } from 'react-native';

const EventDetailScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const { eventId, title, description } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      // headerTitle: `Event #${eventId}`, // or any dynamic title you prefer
      headerTitle: `Event #${eventId}`, // or any dynamic title you prefer
      
    });
  }, [navigation, eventId]);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Event Details</Text>
      <Text style={{ marginTop: 10 }}>Event ID: {eventId}</Text>
    </View>
  );
};

export default EventDetailScreen;
