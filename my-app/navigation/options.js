import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export const navOptions = (navigation) => {
  return {
    headerTintColor: 'green',
    headerStyle: {
      backgroundColor: '#fff',
      elevation: 0,          // Remove Android shadow
      shadowOpacity: 0,      // Remove iOS shadow
      height: 60,            // Fixed height for stability
      borderBottomWidth: 0,  // Remove bottom border
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      width: '100%',         // Full width for proper centering
    },
    headerTitleAlign: 'center', // Center the title
    headerLeftContainerStyle: {
      paddingLeft: 8,        // Consistent left padding
    },
    headerRightContainerStyle: {
      paddingRight: 8,       // Consistent right padding
    },
    headerTitleContainerStyle: {
      left: 48,              // Balance space for buttons
      right: 48,
    },
    // Left side icon - back button
    headerLeft: () => (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
    ),
    // Right side icon - home button
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Ionicons name="home" size={24} color="black" />
      </TouchableOpacity>
    ),
  };
};