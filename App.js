import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useFonts } from "expo-font";
import LandingPage from "./screens/LandingPage";
import QuestionOne from "./screens/QuestionOne";
import Profile from "./screens/Profile";
import Home from "./screens/Home";
import CustomLoading from "./screens/CustomLoading";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const [loaded] = useFonts({
    RobotoLight: require("./assets/fonts/Roboto-Light.ttf"),
    RobotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!loaded) {
    return null;
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
        <Stack.Screen name="QuestionOne" component={QuestionOne} />
        <Stack.Screen name="CustomLoading" component={CustomLoading} />
        <Stack.Screen name="HomeProfileTab" component={HomeProfileTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeProfileTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // Hide the header for all screens
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default App;
