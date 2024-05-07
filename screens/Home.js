import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  PanResponder,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import workoutProgram from "../components/workoutPrograms";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook
import { FontAwesome } from "@expo/vector-icons"; // assuming you're using Expo
import Icon from "react-native-vector-icons/FontAwesome"; // Import FontAwesome icon component

const Home = ({}) => {
  const [completedExercises, setCompletedExercises] = useState({});
  const [currentPage, setCurrentPage] = useState(0); // Current page index

  const totalPages = workoutProgram.length;
  const screenHeight = Dimensions.get("window").height;
  const navigation = useNavigation(); // Initialize useNavigation hook

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {},
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

  const maxHeight = screenHeight * 0.65;

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
      <View>
        <Text style={styles.text}>{workout.day}</Text>
        <ScrollView
          style={[styles.scrollView, { maxHeight }]} // Set maximum height to 400 (adjust as needed)
          showsVerticalScrollIndicator={false}
        >
          {workout.exercises.map((exercise, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigateToExerciseDetails(exercise)}
            >
              <View key={index} style={styles.cardContainer}>
                <View style={styles.cardImage}>
                  <View style={styles.overlay}>
                    <View style={styles.exerciseInfo}>
                      <View style={{ marginLeft: 20 }}>
                        <Text style={styles.exerciseName}>{exercise.name}</Text>
                        <Text style={styles.exerciseDetails}>
                          Sets: {exercise.sets} · Reps: {exercise.reps}
                        </Text>
                      </View>
                      <TouchableOpacity
                        style={[styles.completeButton]}
                        onPress={() =>
                          markExerciseComplete(currentPage, exercise.name)
                        }
                      >
                        <View style={{ padding: 10 }}>
                          {/* Adjust padding to increase touch area */}
                          {completedExercises[currentPage]?.includes(
                            exercise.name
                          ) ? (
                            <FontAwesome
                              name="check-square"
                              size={30}
                              color="white"
                            /> // Checked checkbox icon
                          ) : (
                            <FontAwesome
                              name="square"
                              size={30}
                              color="white"
                            /> // Empty checkbox icon
                          )}
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  };

  const navigateToExerciseDetails = (exercise) => {
    navigation.navigate("WorkoutDetails", { exercise });
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <View style={styles.header}>
        <Text style={styles.title}>100 Day Fitness</Text>
        <Text style={styles.title2}>{"\n"}</Text>
      </View>

      {renderWorkoutCard()}

      <View style={styles.bottomView} {...panResponder.panHandlers}>
        <Text
          style={{
            position: "absolute",
            bottom: 40,
            left: "21.5%", // Center horizontally
            color: "white", // Text color
            fontWeight: "bold",
          }}
        >
          <Icon name="arrow-left" size={15} color="white" style={styles.icon} />
          {"    "}
          Swipe between workouts!{"    "}
          <Icon
            name="arrow-right"
            size={15}
            color="white"
            style={styles.icon}
          />
        </Text>
      </View>

      <StatusBar style="light" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1D1A2F",
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
    backgroundColor: "black",
  },
  scrollView: {
    marginHorizontal: 10,
  },
  cardImage: {
    width: "100%",
    height: 80,
    backgroundColor: "#3E3A52",
  },
  exerciseInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10, // Add vertical padding
  },
  exerciseName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    flexWrap: "wrap",
  },
  exerciseDetails: {
    color: "white",
    fontSize: 16,
    paddingTop: 10,
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
    paddingHorizontal: 5, // Add horizontal padding
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 5, // Add vertical padding
  },
  completeButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  bottomView: {
    flex: 1,
  },
  icon: {
    marginHorizontal: 10, // Add space between icons
  },
});

export default Home;
