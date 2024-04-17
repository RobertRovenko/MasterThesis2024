import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  PanResponder,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import workoutProgram from "../components/workoutPrograms";

const Home = ({}) => {
  const [completedExercises, setCompletedExercises] = useState({});
  const [currentPage, setCurrentPage] = useState(0); // Current page index

  const totalPages = workoutProgram.length;

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

      // Check if the exercise is already marked as complete
      const index = updatedCompletedExercises[dayIndex].indexOf(exerciseName);
      if (index !== -1) {
        // Exercise is already marked as complete, remove it
        updatedCompletedExercises[dayIndex].splice(index, 1);
      } else {
        // Exercise is not marked as complete, mark it as complete
        updatedCompletedExercises[dayIndex].push(exerciseName);
      }

      return updatedCompletedExercises;
    });
  };

  const renderWorkoutCard = () => {
    const workout = workoutProgram[currentPage];
    return (
      <ScrollView
        style={styles.section}
        {...panResponder.panHandlers} // Attach panHandlers to ScrollView
      >
        <Text style={styles.text}>{workout.day}</Text>
        {workout.exercises.map((exercise, index) => (
          <View key={index} style={styles.cardContainer}>
            <ImageBackground
              source={require("../img/gymbackgroundmedium.jpg")}
              style={styles.cardImage}
            >
              <View style={styles.overlay}>
                <View style={styles.exerciseInfo}>
                  <View>
                    <Text style={styles.exerciseName}>{exercise.name}</Text>
                    <Text style={styles.exerciseDetails}>
                      Sets: {exercise.sets}, Reps: {exercise.reps}
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={[
                      styles.completeButton,
                      {
                        backgroundColor: completedExercises[
                          currentPage
                        ]?.includes(exercise.name)
                          ? "green"
                          : "blue",
                      },
                    ]}
                    onPress={() =>
                      markExerciseComplete(currentPage, exercise.name)
                    }
                  >
                    <Text style={styles.completeButtonText}>
                      {completedExercises[currentPage]?.includes(exercise.name)
                        ? "Done"
                        : "Todo"}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ImageBackground>
          </View>
        ))}
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <View style={styles.header}>
        <Text style={styles.title}>100 Day Fitness</Text>
        <Text style={styles.title2}>{"\n"}</Text>
        <Text style={styles.title2}>Always go to failure!</Text>
      </View>

      {renderWorkoutCard()}

      <StatusBar style="light" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222831",
  },
  cardContainer: {
    marginVertical: 10,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: "white",
  },
  cardImage: {
    width: "100%",
    height: 200,
  },
  exerciseInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  exerciseName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  exerciseDetails: {
    color: "white",
    fontSize: 16,
  },
  header: {
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 5,
    alignSelf: "flex-start",
  },
  title2: {
    fontSize: 16,
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
});

export default Home;
