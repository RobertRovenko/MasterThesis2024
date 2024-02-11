import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const Supplements = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Supplements</Text>
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
    paddingBottom: 20,
  },

  text: {
    color: "white",
    textAlign: "center",
    width: "100%", // Add this line to ensure the text takes up the entire width
  },
});

export default Supplements;
