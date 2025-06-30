import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EventDetailScreen from '../screens/event-detail-screen';
import { navOptions } from './options';
import HomeTab from './tabs'; // 👈 Bottom tabs that include HomeScreen and QrCodeScreen

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Tabs">
      {/* Bottom Tabs inside Stack */}
      <Stack.Screen
        name="Tabs"
        component={HomeTab}
        options={{ headerShown: false }}
      />

      {/* Stack screen accessible from inside tabs */}
      <Stack.Screen
        name="EventDetails"
        component={EventDetailScreen}
        options={({ navigation }) => navOptions(navigation)}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
