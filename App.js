import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source="./assets/contags_logo_white.png"/>
      <Text style={styles.text}>Bienvenue, faisons connaissance !</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#0031B8',
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    length: "50px",
    width: "500px",
  },
  text: {
    color: "#FFFFFF",
  }
});
