import React from "react";
import { useEffect } from "react";
import { View, Image, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useFonts } from "expo-font";
import LandingPage from "./screens/LandingPage";
import QuestionOne from "./screens/QuestionOne";
import Profile from "./screens/Profile";
import Home from "./screens/Home";
import CustomLoading from "./screens/CustomLoading";
import Frequency from "./screens/QuestionTwo";
import Supplements from "./screens/Supplements";
import { BackHandler } from "react-native";
import { Ionicons } from "@expo/vector-icons";

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
        <Stack.Screen name="Frequency" component={Frequency} />
        <Stack.Screen name="CustomLoading" component={CustomLoading} />
        <Stack.Screen name="HomeProfileTab" component={HomeProfileTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const HomeProfileTab = () => {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        // Return true to prevent default behavior (going back)
        return true;
      }
    );

    // Cleanup the event listener when the component unmounts
    return () => backHandler.remove();
  }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      backBehavior="none"
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, focused, color }) => (
            <Ionicons
              name={focused ? "barbell" : "barbell-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Supplements"
        component={Supplements}
        options={{
          tabBarIcon: ({ size, focused, color }) => (
            <Ionicons
              name={focused ? "ios-nutrition" : "ios-nutrition-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ size, focused, color }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default App;
