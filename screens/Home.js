import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Workout plans</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Beginner Section */}
        <View style={styles.sectionContainer}>
          <View style={styles.section}>
            <Text style={styles.text}>Beginner</Text>
            {/* Add your content for Beginner section here */}
          </View>
        </View>

        {/* Intermediate Section */}
        <View style={styles.sectionContainer}>
          <View style={styles.section}>
            <Text style={styles.text}>Intermediate</Text>
            {/* Add your content for Intermediate section here */}
          </View>
        </View>

        {/* Expert Section */}
        <View style={styles.sectionContainer}>
          <View style={styles.section}>
            <Text style={styles.text}>Expert</Text>
            {/* Add your content for Expert section here */}
          </View>
        </View>
      </ScrollView>

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
    width: "100%",
  },
  sectionContainer: {},
  section: {
    flexDirection: "column",
    justifyContent: "space-around",
    textAlign: "center",
    // backgroundColor: "#393E46", // Remove the background color from here
    marginBottom: 20,
    paddingVertical: 20, // Adjust vertical padding as needed
    borderWidth: 1, // Add a border for separation
    borderColor: "#fff", // Border color
    borderRadius: 10, // Optional: Add border radius for rounded corners
  },
  text: {
    width: "100%",
    color: "white",
    textAlign: "center",
    marginBottom: 20,
  },
});

export default Home;
