import React, { useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  PanResponder,
} from "react-native";

const NumberedButtons = ({
  currentPage,
  totalPages,
  workoutProgram,
  onPress,
}) => {
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderRelease: (_, gestureState) => {
        const { dx } = gestureState;
        const swipeThreshold = 50;
        if (dx > swipeThreshold && currentPage > 0) {
          onPress(currentPage - 1); // Go to previous set of 7 days
        } else if (
          dx < -swipeThreshold &&
          currentPage < Math.ceil(totalPages / 7) - 1
        ) {
          onPress(currentPage + 1); // Go to next set of 7 days
        }
      },
    })
  ).current;

  // Calculate the starting index for the buttons
  const startIndex = currentPage * 7;
  // Slice the workoutProgram array to get the exercises for the current page
  const exercises = workoutProgram.slice(startIndex, startIndex + 7);

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      {/* Map through the exercises array to render buttons */}
      {exercises.map((exercise, index) => {
        // Extract the day number from the exercise.day string
        const dayNumber = parseInt(exercise.day.split(" ")[1]);
        return (
          <TouchableOpacity
            key={`${currentPage}-${index}`} // Unique key generation
            style={styles.button}
            onPress={() => onPress(startIndex + index, currentPage)}
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
    marginBottom: 50,
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
