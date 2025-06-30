import { StyleSheet, Text, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const QRCodeScreen = () => {
  // You can replace this value with anything dynamic (e.g., user ID, profile URL)
  const qrValue = 'https://yourapp.com/user/12345';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your QR Code</Text>
      <View style={styles.qrContainer}>
        <QRCode
          value={qrValue}
          size={220}
          color="#000"
          backgroundColor="#fff"
        />
      </View>
      <Text style={styles.subtitle}>{qrValue}</Text>
    </View>
  );
};

export default QRCodeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  qrContainer: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 14,
    color: '#444',
    textAlign: 'center',
  },
});
