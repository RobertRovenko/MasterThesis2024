import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Home from "../screens/Home"; // Import your Home screen component

const GoalSelection = ({ navigation }) => {
  const handleButtonPress = () => {
    navigation.navigate("HomeProfileTab", { screen: "Home" });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Goal</Text>

      <TouchableOpacity
        style={[styles.button]}
        onPress={() => handleButtonPress("Lose Weight")}
      >
        <Text style={styles.buttonText}>Lose Weight</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button]}
        onPress={() => handleButtonPress("Gain Weight")}
      >
        <Text style={styles.buttonText}>Gain Weight</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button]}
        onPress={() => handleButtonPress("Build Muscle")}
      >
        <Text style={styles.buttonText}>Build Muscle</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleButtonPress("Not Sure")}>
        <Text style={[styles.buttonText, { color: "#3498db", marginTop: 30 }]}>
          Not Sure
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222831", // Set the background color here
  },
  header: {
    fontFamily: "RobotoBold",
    fontSize: 42,
    marginBottom: 20,
    color: "#fff",
  },
  button: {
    width: "90%",
    padding: 60,
    margin: 10,
    borderRadius: 40,
    backgroundColor: "#393E46",
  },
  buttonText: {
    color: "#fff",
    fontFamily: "RobotoBold",
    textAlign: "center",
    fontSize: 20,
  },
});

export default GoalSelection;
