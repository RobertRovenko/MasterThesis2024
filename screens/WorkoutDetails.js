import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  PanResponder,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome"; // Import FontAwesome icon component

const WorkoutDetails = () => {
  const route = useRoute();
  const { exercise } = route.params;
  const navigation = useNavigation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [exercise.image1, exercise.image2]; // Assuming exercise.image1 and exercise.image2 are the two images

  useEffect(() => {
    const interval = setInterval(() => {
      // Switch to the next image
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Switch images every 5 seconds

    return () => clearInterval(interval);
  }, [currentImageIndex, images.length]);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const [expandedDescription, setExpandedDescription] = useState(true);

  const toggleDescription = () => {
    setExpandedDescription(!expandedDescription);
  };

  const [expandedReplacement, setExpandedReplacement] = useState(true);

  const toggleReplacement = () => {
    setExpandedReplacement(!expandedReplacement);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={images[currentImageIndex]} style={styles.image} />
      </View>
      <SafeAreaView style={styles.header}>
        <TouchableOpacity
          onPress={handleBackPress}
          hitSlop={{ top: 40, bottom: 40, left: 40, right: 40 }}
        >
          <View style={styles.circle}>
            <Icon style={styles.backbutton} name="chevron-left" color="black" />
          </View>
        </TouchableOpacity>
      </SafeAreaView>

      <ScrollView style={styles.scrollView}>
        <View style={styles.exerciseDetailsContainer}>
          <Text style={styles.exerciseName}>{exercise.name}</Text>
          <Text style={styles.detailsText}>
            Sets: {exercise.sets} • Reps: {exercise.reps}
          </Text>
          <Text style={styles.detailsText}>{exercise.tip}</Text>
          <TouchableOpacity onPress={toggleDescription} style={styles.button}>
            <Text style={styles.buttonText}>Description</Text>
          </TouchableOpacity>
          {expandedDescription && (
            <Text style={styles.detailsText}>{exercise.description}</Text>
          )}

          <TouchableOpacity onPress={toggleReplacement}>
            <Text style={[styles.buttonText, {}]}>Replacement</Text>
          </TouchableOpacity>
          {expandedReplacement && (
            <Text style={styles.detailsText}>{exercise.replacement}</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1D1A2F",
  },
  header: {
    flexDirection: "row",
    height: 350,
    padding: 30,
  },
  image: {
    height: 350,
    width: "100%",
    position: "absolute",
    zIndex: -1,
    alignSelf: "center",
  },
  imageContainer: {},
  exerciseDetailsContainer: {
    flex: 1,
    paddingTop: "5%",
    zIndex: -5,
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
    fontSize: 25,
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
    textAlign: "center",
  },
  buttonText: {
    color: "#F53769",
    fontWeight: "bold",
    fontSize: 16,
    padding: 10,
  },
  circle: {
    backgroundColor: "rgba(255, 255, 255, 0.7)", // 75% opacity
    paddingLeft: 9,
    paddingRight: 13,
    paddingVertical: 7,
    borderRadius: 100,
  },
});

export default WorkoutDetails;
