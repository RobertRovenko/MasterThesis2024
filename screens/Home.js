import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import workoutProgram from "../components/workoutPrograms";

const Home = ({ navigation }) => {
  const [completedExercises, setCompletedExercises] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const workoutsPerPage = 1;
  const totalPages = Math.ceil(workoutProgram.length / workoutsPerPage);

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
    const currentDayIndex = (currentPage - 1) * workoutsPerPage;
    const currentDay = workoutProgram[currentDayIndex].day;

    // Removed condition that checks if all exercises for the current day are completed
  }, [completedExercises, currentPage]);

  const renderWorkouts = ({ item }) => {
    return (
      <View key={item.day} style={styles.section}>
        <Text style={styles.text}>{item.day}</Text>
        {item.exercises.map((exercise, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => markExerciseComplete(currentPage - 1, exercise.name)}
            style={styles.exerciseContainer}
          >
            <Text style={styles.exerciseText}>
              {exercise.name} - Sets: {exercise.sets}, Reps: {exercise.reps}
            </Text>
            <TouchableOpacity
              style={[
                styles.completeButton,
                {
                  backgroundColor: completedExercises[
                    currentPage - 1
                  ]?.includes(exercise.name)
                    ? "green"
                    : "blue",
                },
              ]}
              onPress={() =>
                markExerciseComplete(currentPage - 1, exercise.name)
              }
            >
              <Text style={styles.completeButtonText}>
                {completedExercises[currentPage - 1]?.includes(exercise.name)
                  ? "Done"
                  : "Todo"}
              </Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <View style={styles.header}>
        <Text style={styles.title}>Workout plans</Text>
      </View>
      <View style={styles.paginationContainer}>
        <TouchableOpacity
          style={[
            styles.paginationButton,
            styles.prevButton,
            { display: currentPage === 1 ? "none" : "flex" },
          ]}
          onPress={handlePrevPage}
        >
          <Text style={styles.paginationButtonText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.paginationButton,
            styles.nextButton,
            { display: currentPage === totalPages ? "none" : "flex" },
          ]}
          onPress={handleNextPage}
        >
          <Text style={styles.paginationButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={workoutProgram.slice(
          (currentPage - 1) * workoutsPerPage,
          currentPage * workoutsPerPage
        )}
        renderItem={renderWorkouts}
        keyExtractor={(item) => item.day}
        contentContainerStyle={styles.scrollContainer}
      />
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
  scrollContainer: {
    paddingBottom: 20,
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
    paddingHorizontal: 20,
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
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  paginationButton: {
    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
  },
  paginationButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  prevButton: {
    backgroundColor: "blue",
    marginRight: 10,
  },
  nextButton: {
    backgroundColor: "blue",
  },
});

export default Home;
