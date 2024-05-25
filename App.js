import React from "react";
import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useFonts } from "expo-font";
import Home from "./screens/Home";
import { BackHandler } from "react-native";
import LandingPage from "./screens/LandingPage";
import WorkoutDetails from "./screens/WorkoutDetails";
import CustomLoading from "./screens/CustomLoading";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const [loaded] = useFonts({
    RobotoLight: require("./assets/fonts/Roboto-Light.ttf"),
    RobotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
    Oswald: require("./assets/fonts/Oswald-VariableFont_wght.ttf"),
    OswaldBold: require("./assets/fonts/Oswald-Bold.ttf"),
  });

  //help
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        // Return true to prevent default behavior (going back)
        return true;
      }
    );

    // Cleanup the event listener on component unmount
    return () => backHandler.remove();
  }, []);

  if (!loaded) {
    return <CustomLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LandingPage"
        screenOptions={{
          headerShown: false, // Hide the header for all screens
        }}
      >
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerLeft: null, // Disable back navigation
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="WorkoutDetails"
          component={WorkoutDetails}
          options={{
            headerLeft: null, // Disable back navigation
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="CustomLoading"
          component={CustomLoading}
          options={{
            headerLeft: null, // Disable back navigation
            gestureEnabled: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
