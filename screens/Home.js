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
  const data = [
    {
      key: "beginner",
      title: "Beginner",
      image: require("../img/gymbackgroundeasy.jpg"),
      onPress: () => handleBeginnerPress(),
    },
    {
      key: "intermediate",
      title: "Intermediate",
      image: require("../img/gymbackgroundmedium.jpg"),
      onPress: () => handleIntermediatePress(),
    },
    {
      key: "expert",
      title: "Expert",
      image: require("../img/gymbackgroundhard.jpg"),
      onPress: () => handleExpertPress(),
    },
  ];

  const handleBeginnerPress = () => {
    // Handle action for Beginner item
    console.log("Beginner item pressed");
  };

  const handleIntermediatePress = () => {
    // Handle action for Intermediate item
    console.log("Intermediate item pressed");
  };

  const handleExpertPress = () => {
    // Handle action for Expert item
    console.log("Expert item pressed");
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.section} onPress={item.onPress}>
      <Image style={styles.imagebutton} source={item.image} />
      <Text style={styles.text}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <View style={styles.header}>
        <Text style={styles.title}>Workout plans</Text>
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        contentContainerStyle={styles.scrollContainer}
        ListEmptyComponent={null} // Add this to remove any default padding
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
  },
});

export default Home;
