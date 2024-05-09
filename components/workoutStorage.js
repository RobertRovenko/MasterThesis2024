import AsyncStorage from "@react-native-async-storage/async-storage";

const saveCompletedExercises = async (completedExercises) => {
  try {
    await AsyncStorage.setItem(
      "completedExercises",
      JSON.stringify(completedExercises)
    );
  } catch (error) {
    console.error("Error saving completed exercises:", error);
  }
};

const loadCompletedExercises = async () => {
  try {
    const completedExercisesData = await AsyncStorage.getItem(
      "completedExercises"
    );
    if (completedExercisesData !== null) {
      return JSON.parse(completedExercisesData);
    }
  } catch (error) {
    console.error("Error loading completed exercises:", error);
  }
  return {}; // Return empty object if no data found
};

export { saveCompletedExercises, loadCompletedExercises };
