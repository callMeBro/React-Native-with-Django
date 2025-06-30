import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileDetailsScreen from '../screens/profiles/profile-detail-screen';
import ProfileScreen from '../screens/profiles/profiles-screens';
import { navOptions } from './options';

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ navigation }) => navOptions(navigation)}
      />
      <Stack.Screen
        name="ProfileDetails"
        component={ProfileDetailsScreen}
        options={({ navigation }) => navOptions(navigation)}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
