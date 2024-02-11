import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <View style={styles.header}>
        <Text style={styles.title}>Workout plans</Text>
      </View>

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
    paddingBottom: 0, // Change this to 0 to remove the padding
  },
  section: {
    alignItems: "center",
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: "#30475e",
    overflow: "hidden",
  },
  imagebutton: {
    height: 150,
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    paddingVertical: 10,
    fontWeight: "bold",
  },
});

export default Home;
