import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import { StatusBar } from "expo-status-bar";

const CustomLoading = ({ navigation }) => {
  const [loadingMessage, setLoadingMessage] = useState(
    "Loading custom workout plans"
  );

  const progress = new Animated.Value(0);

  useEffect(() => {
    // Animate the progress bar from 0 to 1 over 2 seconds
    Animated.timing(progress, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start(() => {
      // Redirect to HomeProfileTab after the animation completes
      navigation.navigate("HomeProfileTab", { screen: "Home" });
    });
  }, [navigation, progress]);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.loadingText}>{loadingMessage}</Text>
      <View style={styles.progressBarContainer}>
        <Animated.View
          style={[
            styles.progressBar,
            {
              width: progress.interpolate({
                inputRange: [0, 1],
                outputRange: ["0%", "100%"],
              }),
            },
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222831", // Dark background color
    alignItems: "center",
    justifyContent: "center",
  },
  loadingText: {
    fontSize: 18,
    color: "#eeeeee", // Light text color
    marginBottom: 10,
  },
  progressBarContainer: {
    width: "80%",
    height: 10,
    backgroundColor: "#00ADB5", // Teal color for the progress bar
    borderRadius: 5,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#eeeeee", // Light color for the progress bar
  },
});

export default CustomLoading;
