import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

const Tracker = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Goals</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}></ScrollView>

      <StatusBar style="light" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222831",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },
  header: {
    padding: 20,
    width: "100%",
    alignItems: "flex-start",
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  sectionContainer: {
    width: "100%",
  },
  section: {
    flexDirection: "column",
    justifyContent: "space-around",
    textAlign: "center",
    // backgroundColor: "#393E46", // Remove the background color from here
    width: "100%",
    marginBottom: 20,
    paddingVertical: 20, // Adjust vertical padding as needed
    borderWidth: 1, // Add a border for separation
    borderColor: "#fff", // Border color
    borderRadius: 10, // Optional: Add border radius for rounded corners
  },
  text: {
    color: "white",
    textAlign: "center",
    marginBottom: 20,
  },
});

export default Tracker;
