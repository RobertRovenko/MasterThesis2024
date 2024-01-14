import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "white", // Semi-transparent background overlay
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 160,
    height: 160,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff", // White text color
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    marginBottom: 120,
    maxWidth: 300,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "RobotoBold",
    letterSpacing: 2, // Adjust the value as needed
    marginHorizontal: 10, // Adjust the horizontal margin as needed
  },
});

export default Home;
