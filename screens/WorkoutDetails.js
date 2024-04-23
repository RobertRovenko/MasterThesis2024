import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { useRoute } from "@react-navigation/native"; // Import useRoute hook
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook

const WorkoutDetails = () => {
  const route = useRoute(); // Initialize useRoute hook to access route parameters
  const { exercise } = route.params; // Extract the exercise parameter from route
  const navigation = useNavigation(); // Initialize useNavigation hook

  const handleBackPress = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={exercise.image} style={styles.image} />
      </View>
      <SafeAreaView style={styles.header}>
        <TouchableOpacity onPress={handleBackPress}>
          <Text style={styles.backbutton}>←</Text>
        </TouchableOpacity>
      </SafeAreaView>
      <ScrollView style={styles.scrollView}>
        <View style={styles.exerciseDetailsContainer}>
          <Text style={styles.exerciseName}>{exercise.name}</Text>
          <Text style={styles.detailsText}>
            Sets: {exercise.sets}, Reps: {exercise.reps}
          </Text>
          <Text style={styles.detailsText}>{exercise.tip}</Text>
          <Text style={styles.detailsText}>{exercise.description}</Text>
          <Text style={styles.detailsText}>{exercise.replacement}</Text>
          <Text style={styles.detailsText}>
            {exercise.isDone
              ? "You have completed this exercise!"
              : "You have not completed this exercise yet!"}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222831",
  },
  header: {
    flexDirection: "row", // Arrange children horizontally
    backgroundColor: "white",
    height: 350,
    paddingLeft: 20,
    zIndex: -2,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "black",
    alignSelf: "center", // Center align vertically
    textAlign: "center",
    marginBottom: 5,
  },
  title2: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
    alignSelf: "flex-start",
  },
  image: {
    height: 300,
    width: "75%",
    position: "absolute",
    zIndex: -1, // Ensure the image is behind other content
    alignSelf: "center",
  },
  imageContainer: {},
  exerciseDetailsContainer: {
    flex: 1,
    paddingTop: "15%",
    zIndex: -5, // Ensure the image is behind other content
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  exerciseName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  backbutton: {
    color: "black",
    fontSize: 40,
    alignSelf: "flex-start",
    zIndex: 0,
  },
  exerciseName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  detailsText: {
    color: "white",
    marginBottom: 10,
  },
});

export default WorkoutDetails;
