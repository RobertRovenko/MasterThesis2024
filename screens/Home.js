import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  PanResponder,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import workoutProgram from "../components/workoutPrograms";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = () => {
  const [completedExercises, setCompletedExercises] = useState({});
  const [currentPage, setCurrentPage] = useState(0);
  const [showCongratulation, setShowCongratulation] = useState(false);

  const totalPages = workoutProgram.length;
  const screenHeight = Dimensions.get("window").height;
  const navigation = useNavigation();

  useEffect(() => {
    const loadInitialData = async () => {
      try {
        const initialCompletedExercises = await loadCompletedExercises();
        if (initialCompletedExercises) {
          setCompletedExercises(initialCompletedExercises);
        } else {
          initializeCompletedExercises();
        }

        // Load current day from local storage and set it as the initial currentPage state
        const currentDay = await AsyncStorage.getItem("currentDay");
        if (currentDay !== null) {
          // Check if all exercises for the current day are completed
          const isCurrentDayCompleted =
            initialCompletedExercises &&
            workoutProgram[currentDay].exercises.every(
              (_, index) => initialCompletedExercises[currentDay][index]
            );

          // If all exercises for the current day are completed, find the next incomplete day
          if (isCurrentDayCompleted) {
            let nextPage = parseInt(currentDay, 10) + 1;
            while (
              nextPage < totalPages &&
              workoutProgram[nextPage].exercises.every(
                (_, index) => initialCompletedExercises[nextPage][index]
              )
            ) {
              nextPage++;
            }
            setCurrentPage(nextPage);
          } else {
            setCurrentPage(JSON.parse(currentDay));
          }
        }
      } catch (error) {
        console.error("Error loading initial data:", error);
      }
    };

    loadInitialData();
  }, []);

  const loadCompletedExercises = async () => {
    try {
      const data = await AsyncStorage.getItem("completedExercises");
      if (data !== null) {
        return JSON.parse(data);
      }
      return null;
    } catch (error) {
      console.error("Error loading completed exercises:", error);
      return null;
    }
  };

  const saveCompletedExercises = async (data) => {
    try {
      await AsyncStorage.setItem("completedExercises", JSON.stringify(data));
    } catch (error) {
      console.error("Error saving completed exercises:", error);
    }
  };

  const initializeCompletedExercises = () => {
    const initialCompletedExercises = {};
    workoutProgram.forEach((day, index) => {
      initialCompletedExercises[index] = [];
    });
    setCompletedExercises(initialCompletedExercises);
    saveCompletedExercises(initialCompletedExercises);
  };
  const saveToLocalStorage = async (data) => {
    try {
      await AsyncStorage.setItem("completedExercises", JSON.stringify(data));
    } catch (error) {
      console.error("Error saving data to local storage:", error);
    }
  };

  const markExerciseComplete = async (dayIndex, exerciseIndex) => {
    setCompletedExercises((prevCompletedExercises) => {
      const updatedCompletedExercises = { ...prevCompletedExercises };
      // Ensure that the dayIndex exists in updatedCompletedExercises before accessing it
      if (!(dayIndex in updatedCompletedExercises)) {
        updatedCompletedExercises[dayIndex] = [];
      }
      // Ensure that the exerciseIndex exists in updatedCompletedExercises[dayIndex] before accessing it
      if (!(exerciseIndex in updatedCompletedExercises[dayIndex])) {
        updatedCompletedExercises[dayIndex][exerciseIndex] = false;
      }
      updatedCompletedExercises[dayIndex][exerciseIndex] =
        !updatedCompletedExercises[dayIndex][exerciseIndex];
      saveToLocalStorage(updatedCompletedExercises); // Save completed exercises to local storage

      // Check if all exercises for the day are completed
      const allExercisesCompleted = workoutProgram[dayIndex].exercises.every(
        (_, index) => updatedCompletedExercises[dayIndex][index]
      );

      // If all exercises for the day are completed, show congratulations alert
      if (allExercisesCompleted) {
        setShowCongratulation(true);
      } else {
        setShowCongratulation(false); // Hide congratulations alert if any exercise is unmarked
      }

      return updatedCompletedExercises;
    });
  };

  useEffect(() => {
    const saveCurrentDayToLocalStorage = async () => {
      try {
        await AsyncStorage.setItem("currentDay", JSON.stringify(currentPage));
      } catch (error) {
        console.error("Error saving current day to local storage:", error);
      }
    };

    saveCurrentDayToLocalStorage();
  }, [currentPage]);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {},
      onPanResponderRelease: (_, gestureState) => {
        const { dx } = gestureState;
        if (dx > 50) {
          setCurrentPage((prevPage) =>
            prevPage > 0 ? prevPage - 1 : prevPage
          );
        } else if (dx < -50) {
          setCurrentPage((prevPage) =>
            prevPage < totalPages - 1 ? prevPage + 1 : prevPage
          );
        }
      },
    })
  ).current;

  const maxHeight = screenHeight * 0.65;

  const renderWorkoutCard = () => {
    const workout = workoutProgram[currentPage];
    return (
      <View>
        <Text style={styles.text}>{workout.day}</Text>
        <ScrollView
          style={[styles.scrollView, { maxHeight }]}
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
                        {exercise.sets !== null && exercise.reps !== null && (
                          <Text style={styles.exerciseDetails}>
                            Sets: {exercise.sets} · Reps: {exercise.reps}
                          </Text>
                        )}
                      </View>
                      <TouchableOpacity
                        style={[styles.completeButton]}
                        onPress={() => markExerciseComplete(currentPage, index)}
                      >
                        <View style={{ padding: 10 }}>
                          <FontAwesome
                            name={
                              completedExercises[currentPage] &&
                              completedExercises[currentPage][index]
                                ? "check-square"
                                : "square"
                            }
                            size={30}
                            color="white"
                          />
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

  useEffect(() => {
    if (showCongratulation) {
      Alert.alert(
        "Congratulations!",
        "You have completed all exercises for today!",
        [
          {
            text: "OK",
            onPress: async () => {
              setShowCongratulation(false);
              const nextDayIndex =
                currentPage < totalPages - 1 ? currentPage + 1 : currentPage;
              setCurrentPage(nextDayIndex);
              await AsyncStorage.setItem(
                "currentDay",
                JSON.stringify(nextDayIndex)
              );
            },
          },
        ],
        { cancelable: false }
      );
    }
  }, [showCongratulation, currentPage, totalPages]);

  // Save completed exercises to local storage whenever it changes
  useEffect(() => {
    saveToLocalStorage(completedExercises);
  }, [completedExercises]);

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <View style={styles.header}>
        <Text style={styles.title}>30 Day Fitness</Text>
        <Text style={styles.title2}>{"\n"}</Text>
      </View>

      {renderWorkoutCard()}

      <View style={styles.bottomView} {...panResponder.panHandlers}>
        <Text
          style={{
            position: "absolute",
            bottom: 40,
            left: 0,
            right: 0,
            color: "white",
            textAlign: "center",

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
    paddingVertical: 10,
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
    paddingHorizontal: 5,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 5,
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
    marginHorizontal: 10,
  },
});

export default Home;
