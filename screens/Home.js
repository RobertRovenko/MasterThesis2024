import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  PanResponder,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import workoutProgram from "../components/workoutPrograms";
import NumberedButtons from "../components/calendarHome";

const Home = ({ navigation }) => {
  const [completedExercises, setCompletedExercises] = useState({});
  const [currentPage, setCurrentPage] = useState(0); // Current page index
  const totalPages = workoutProgram.length;
  const [currentPage2, setCurrentPage2] = useState(0); // Define currentPage2 and setCurrentPage2

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderRelease: (_, gestureState) => {
        const { dx } = gestureState;
        // Swipe right if not on the first page
        if (dx > 50) {
          setCurrentPage((prevPage) =>
            prevPage > 0 ? prevPage - 1 : prevPage
          );
        }
        // Swipe left if not on the last page
        else if (dx < -50) {
          setCurrentPage((prevPage) =>
            prevPage < totalPages - 1 ? prevPage + 1 : prevPage
          );
        }
      },
    })
  ).current;

  const markExerciseComplete = (dayIndex, exerciseName) => {
    setCompletedExercises((prevCompletedExercises) => {
      const updatedCompletedExercises = { ...prevCompletedExercises };
      if (!updatedCompletedExercises[dayIndex]) {
        updatedCompletedExercises[dayIndex] = [];
      }
      updatedCompletedExercises[dayIndex] = [
        ...updatedCompletedExercises[dayIndex],
        exerciseName,
      ];
      return updatedCompletedExercises;
    });
  };

  useEffect(() => {
    // Your effect logic here
  }, [completedExercises, currentPage]);

  const renderWorkout = () => {
    const workout = workoutProgram[currentPage];
    return (
      <View style={styles.section}>
        <Text style={styles.text}>{workout.day}</Text>
        {workout.exercises.map((exercise, index) => (
          <View key={index} style={styles.exerciseContainer}>
            <Text style={styles.exerciseText}>
              {exercise.name} - Sets: {exercise.sets}, Reps: {exercise.reps}
            </Text>
            <TouchableOpacity
              style={[
                styles.completeButton,
                {
                  backgroundColor: completedExercises[currentPage]?.includes(
                    exercise.name
                  )
                    ? "green"
                    : "blue",
                },
              ]}
              onPress={() => markExerciseComplete(currentPage, exercise.name)}
            >
              <Text style={styles.completeButtonText}>
                {completedExercises[currentPage]?.includes(exercise.name)
                  ? "Done"
                  : "Todo"}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    );
  };

  const handleButtonPress = (number) => {
    setCurrentPage(number);
  };

  const NumberedButtons = ({ totalPages, workoutProgram, onPress }) => {
    const [currentPage, setCurrentPage] = useState(0); // State to manage current page
    const panResponder = useRef(
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderRelease: (_, gestureState) => {
          const { dx } = gestureState;
          const swipeThreshold = 50;
          if (dx > swipeThreshold && currentPage > 0) {
            setCurrentPage(currentPage - 1); // Update current page to previous
          } else if (
            dx < -swipeThreshold &&
            currentPage < Math.ceil(totalPages / 7) - 1
          ) {
            setCurrentPage(currentPage + 1); // Update current page to next
          }
        },
      })
    ).current;

    // Calculate the starting index for the buttons
    const startIndex = currentPage * 7;
    // Slice the workoutProgram array to get the exercises for the current page
    const exercises = workoutProgram.slice(startIndex, startIndex + 7);

    return (
      <View style={styles.containerCalendar} {...panResponder.panHandlers}>
        {/* Map through the exercises array to render buttons */}
        {exercises.map((exercise, index) => {
          // Extract the day number from the exercise.day string
          const dayNumber = parseInt(exercise.day.split(" ")[1]);
          return (
            <TouchableOpacity
              key={`${currentPage}-${index}`} // Unique key generation
              style={styles.buttonCalendar}
              onPress={() => onPress(startIndex + index, currentPage)}
            >
              <Text style={styles.buttonTextCalendar}>{dayNumber}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <SafeAreaView
      style={styles.container}
      {...panResponder.panHandlers}
      edges={["top"]}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Workout plan</Text>
      </View>

      <NumberedButtons
        totalPages={totalPages}
        workoutProgram={workoutProgram}
        onPress={(index, currentPage) => {
          setCurrentPage2(currentPage); // Update the currentPage state in your parent component
          handleButtonPress(index); // Call the handleButtonPress function from the parent component
        }}
      />

      {renderWorkout()}

      <StatusBar style="light" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222831",
  },
  header: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 5,
    alignSelf: "flex-start",
  },
  section: {
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: "#30475e",
    padding: 10,
    width: "90%",
    alignSelf: "center",
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  exerciseContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  exerciseText: {
    flex: 1,
    color: "white",
    fontSize: 16,
  },
  completeButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  completeButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  containerCalendar: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    marginBottom: 50,
    backgroundColor: "#2E9298",
  },
  buttonCalendar: {
    backgroundColor: "#2E9298",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    maxWidth: 70,
  },
  buttonTextCalendar: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Home;
