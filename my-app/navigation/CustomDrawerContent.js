import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import { Image, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{ flex: 1, backgroundColor: '#003CB3' }}
    >
      <SafeAreaView edges={['top']} style={styles.headerContainer}>
        <Image
          source={require('../assets/icon.png')} // put your image in assets
          style={styles.headerImage}
          resizeMode="cover"
        />
      </SafeAreaView>

      <View style={styles.drawerItemsContainer}>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
}

const IMAGE_SIZE = 80; // size of the circular image

const styles = StyleSheet.create({
  headerContainer: {
    height: IMAGE_SIZE + 70, // container taller than image height (add padding space)
    marginBottom: 20,
    alignItems: 'center', // center horizontally
    justifyContent: 'center', // center vertically
    overflow: 'hidden',
  },
  headerImage: {
    height: IMAGE_SIZE,
    width: IMAGE_SIZE,
    borderRadius: IMAGE_SIZE / 2, // makes it circular
  },
  drawerItemsContainer: {
    flex: 1,
    backgroundColor: '#0051c8', // slightly lighter blue
    paddingTop: 50,
  },
});