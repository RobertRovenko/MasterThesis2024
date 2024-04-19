import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Modal,
  Dimensions,
  PanResponder,
  Animated,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";

const LandingPage = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalPosition, setModalPosition] = useState(
    new Animated.Value(Dimensions.get("window").height)
  );

  const windowHeight = Dimensions.get("window").height;
  const modalHeight = windowHeight * 0.7; // Set modal height to 70% of window height

  const openModal = () => {
    setModalVisible(true);
    Animated.timing(modalPosition, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dy > 0) {
          modalPosition.setValue(gestureState.dy);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > 50) {
          Animated.timing(modalPosition, {
            toValue: Dimensions.get("window").height,
            duration: 200,
            useNativeDriver: false,
          }).start(() => setModalVisible(false));
        } else {
          Animated.spring(modalPosition, {
            toValue: 0,
            friction: 5,
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;
  return (
    <ImageBackground
      style={styles.background}
      source={require("../img/landingimage2.jpg")}
    >
      <View style={styles.container}>
        <Text style={styles.textLogo}>100 Day{"\n"}Fitness</Text>

        <Text style={styles.title}></Text>
        <Text style={styles.description}>
          The best workout program and tips to completely transform your body in
          100 days
        </Text>

        <View style={{ flex: 1 }} />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")} // Replace with the correct navigation route
        >
          <Text style={styles.buttonText}>GET STARTED</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.aboutButton} onPress={openModal}>
          <Text style={styles.buttonTextAbout}>ABOUT</Text>
        </TouchableOpacity>

        <StatusBar style="light" />

        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <Animated.View
            style={[
              styles.centeredView,
              { bottom: 0, transform: [{ translateY: modalPosition }] },
            ]}
            {...panResponder.panHandlers}
          >
            <View style={[styles.modalView, { height: modalHeight }]}>
              <Image
                style={styles.slider}
                source={require("../icons/sliderr.png")}
              />
              <Text style={styles.modalTitle}>Welcome to 100 Day Fitness</Text>
              <Text style={styles.modalText}>
                Congratulations on taking the first step towards your
                transformation! {"\n"}
                {"\n"}With our app, you're embarking on a path where you'll
                challenge yourself, push your limits, and reap incredible
                rewards. We provide the ultimate workout plan coupled with
                expert supplement tips, all aimed at helping you achieve a
                sculpted physique. {"\n"}
                {"\n"}Get ready to transform your body and unlock your full
                potential, in 100 days!
              </Text>
            </View>
          </Animated.View>
        </Modal>
      </View>
      <StatusBar style="light" />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(5, 15, 10, 0.85)", // Semi-transparent background overlay
    alignItems: "center",
    justifyContent: "center",
  },
  textLogo: {
    fontFamily: "OswaldBold",
    textAlign: "center", // Center the text horizontally
    fontSize: 50, // Adjust the font size as needed
    marginTop: 125,
    marginBottom: 10,
    color: "#fff",
    lineHeight: 65, // Set the lineHeight equal to the fontSize to remove spacing
    letterSpacing: 2, // Add space between letters
  },
  description: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    maxWidth: 300,
    fontWeight: "bold",
    marginTop: 50,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 20,
    borderRadius: 20,
    marginBottom: 20, // Increased margin
    width: "80%",
  },
  aboutButton: {
    backgroundColor: "rgba(255, 255, 255, 0.1)", // Semi-transparent white color
    borderWidth: 2, // Add border
    borderColor: "#fff", // White border color
    padding: 20, // Reduced padding
    borderRadius: 20,
    marginTop: 0, // Add margin from the "GET STARTED" button
    marginBottom: 75,
    width: "80%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "RobotoBold",
    letterSpacing: 2, // Adjust the value as needed
    marginHorizontal: 10, // Adjust the horizontal margin as needed
    alignSelf: "center",
  },
  buttonTextAbout: {
    color: "#fff",
    fontFamily: "RobotoBold",
    letterSpacing: 2, // Adjust the value as needed
    marginHorizontal: 10, // Adjust the horizontal margin as needed
    fontSize: 14,
    alignSelf: "center",
  },
  centeredView: {
    position: "absolute",
    left: 0,
    right: 0,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    backgroundColor: "#222831",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: "100%",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "left",
    fontSize: 18, // Reduced font size
    maxWidth: "90%",
    color: "#fff",
    letterSpacing: 1, // Adjust the value as needed
    lineHeight: 24, // Adjust the value as needed for desired spacing
    textAlign: "justify", // Spread the text to reach both ends
  },
  modalTitle: {
    marginBottom: 40,
    marginTop: 20,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25, // Reduced font size
  },
  closeButton: {
    backgroundColor: "#007AFF",
    padding: 20,
    borderRadius: 20,
    fontSize: 18, // Reduced font size
    marginTop: 20, // Add margin from the "GET STARTED" button
    marginBottom: 105,
    width: "80%",
  },
  closeButtonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "RobotoBold",
    letterSpacing: 2, // Adjust the value as needed
    fontSize: 14,
  },
  slider: {
    width: "40%",
    height: 5,
    borderRadius: 5,
  },
});

export default LandingPage;
