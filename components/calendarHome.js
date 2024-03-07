import React from "react-native";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const NumberedButtons = ({ currentPage, workoutProgram, onPress }) => {
  // Calculate the starting index for the buttons
  const startIndex = currentPage * 7;
  // Slice the workoutProgram array to get the exercises for the current page
  const exercises = workoutProgram.slice(startIndex, startIndex + 7);

  return (
    <View style={styles.container}>
      {/* Map through the exercises array to render buttons */}
      {exercises.map((exercise, index) => {
        // Extract the day number from the exercise.day string
        const dayNumber = parseInt(exercise.day.split(" ")[1]);
        return (
          <TouchableOpacity
            key={`${currentPage}-${index}`} // Unique key generation
            style={styles.button}
            onPress={() => onPress(startIndex + index)}
          >
            <Text style={styles.buttonText}>{dayNumber}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    backgroundColor: "#2E9298",
  },
  button: {
    backgroundColor: "#2E9298",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    maxWidth: 70,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default NumberedButtons;
