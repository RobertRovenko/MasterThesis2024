import AsyncStorage from "@react-native-async-storage/async-storage";

const saveCompletedExercises = async (completedExercises) => {
  try {
    await AsyncStorage.setItem(
      "completedExercises",
      JSON.stringify(completedExercises)
    );
  } catch (error) {
    console.error("Error saving completed exercises:", error);
    throw error; // Re-throw the error to handle it in the calling code
  }
};

const loadCompletedExercises = async (workoutProgram) => {
  try {
    const completedExercisesData = await AsyncStorage.getItem(
      "completedExercises"
    );
    if (completedExercisesData !== null) {
      const completedExercises = JSON.parse(completedExercisesData);
      // Update workoutProgram with completed exercises from AsyncStorage
      workoutProgram.forEach((day) => {
        day.exercises.forEach((exercise) => {
          const completed = completedExercises[exercise.name];
          if (completed !== undefined) {
            exercise.completed = completed;
          }
        });
      });
      return workoutProgram;
    }
    return workoutProgram; // Return the original workoutProgram if no data found
  } catch (error) {
    console.error("Error loading completed exercises:", error);
    throw error; // Re-throw the error to handle it in the calling code
  }
};

export { saveCompletedExercises, loadCompletedExercises };
