import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
  Modal,
  Dimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";

const LandingPage = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const windowHeight = Dimensions.get("window").height;

  const modalHeight = windowHeight * 0.85; // Set modal height to 80% of window height

  return (
    <ImageBackground
      style={styles.background}
      source={require("../img/landingimage.png")}
    >
      <View style={styles.container}>
        <Text style={styles.textLogo}>100 Day{"\n"}Fitness</Text>

        <Text style={styles.title}></Text>
        <Text style={styles.description}>
          The best researched workout programs, diets, supplements and tips!
        </Text>

        <View style={{ flex: 1 }} />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("HomeProfileTab")} // Replace with the correct navigation route
        >
          <Text style={styles.buttonText}>GET STARTED</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.aboutButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.buttonTextAbout}>ABOUT</Text>
        </TouchableOpacity>

        <StatusBar style="light" />

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={[styles.modalView, { height: modalHeight }]}>
              <Text style={styles.modalTitle}>Welcome to 100 Day Fitness</Text>

              <Text style={styles.modalText}>
                Congratulations on taking the first step towards a
                transformative journey. {"\n"}
                {"\n"}With our app, you're embarking on a path where you'll
                challenge yourself, push your limits, and reap incredible
                rewards. We provide the ultimate workout plan coupled with
                expert supplement tips, all aimed at helping you achieve a
                naturally sculpted physique. {"\n"}
                {"\n"}Get ready to transform your body and unlock your full
                potential, all in 100 days!
              </Text>
              <View style={{ flex: 1 }} />

              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.closeButtonText}>CLOSE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
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
    backgroundColor: "rgba(0, 5, 1, 0.6)", // Semi-transparent background overlay
    alignItems: "center",
    justifyContent: "center",
  },
  textLogo: {
    fontFamily: "OswaldBold",
    textAlign: "center", // Center the text horizontally
    fontSize: 50, // Adjust the font size as needed
    marginTop: 150,
    marginBottom: 10,
    color: "#fff",
    lineHeight: 55, // Set the lineHeight equal to the fontSize to remove spacing
    letterSpacing: 2, // Add space between letters
  },
  imageLogo: {
    width: 160,
    height: 160,
    marginBottom: 10,
    marginTop: 75,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff", // White text color
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    marginBottom: 200, // Reduced margin
    maxWidth: 300,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 20,
    borderRadius: 20,
    marginBottom: 20, // Increased margin
  },
  aboutButton: {
    backgroundColor: "transparent", // Changed color to transparent
    borderWidth: 2, // Add border
    borderColor: "#fff", // White border color
    padding: 15, // Reduced padding
    borderRadius: 20,
    marginTop: 0, // Add margin from the "GET STARTED" button
    marginBottom: 125,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "RobotoBold",
    letterSpacing: 2, // Adjust the value as needed
    marginHorizontal: 10, // Adjust the horizontal margin as needed
  },
  buttonTextAbout: {
    color: "#fff",
    fontFamily: "RobotoBold",
    letterSpacing: 2, // Adjust the value as needed
    marginHorizontal: 10, // Adjust the horizontal margin as needed
    fontSize: 14,
  },
  centeredView: {
    flex: 1,
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
  },
  modalTitle: {
    marginBottom: 40,
    marginTop: 15,
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
    marginBottom: 100,
  },
  closeButtonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "RobotoBold",
    letterSpacing: 2, // Adjust the value as needed
    fontSize: 14,
  },
});

export default LandingPage;
