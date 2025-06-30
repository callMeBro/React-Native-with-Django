import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import DrawerNavigator from './navigation/drawer'; // Default import

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
      <StatusBar style="dark" />
    </NavigationContainer>
  );
}