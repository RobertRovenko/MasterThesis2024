import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Animated, Easing } from "react-native";
import { StatusBar } from "expo-status-bar";

const CustomLoading = ({ navigation }) => {
  const [loadingMessage, setLoadingMessage] = useState(
    "Loading custom workout plans..."
  );

  const progress = new Animated.Value(0);

  useEffect(() => {
    // Animate the progress bar from 0 to 1 over 2 seconds
    Animated.timing(progress, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
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
    color: "white",
    marginBottom: 50,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  progressBarContainer: {
    width: "80%",
    height: 20,
    backgroundColor: "rgba(255,255,255,0.3)", // Teal color for the progress bar
    borderRadius: 10,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#00adb5", // Light color for the progress bar
  },
});

export default CustomLoading;
