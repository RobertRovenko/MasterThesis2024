import React from "react";
import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useFonts } from "expo-font";
import Profile from "./screens/Profile";
import Home from "./screens/Home";
import Supplements from "./screens/Supplements";
import { BackHandler } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Tracker from "./screens/Tracker";
import LandingPage from "./screens/LandingPage";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const [loaded] = useFonts({
    RobotoLight: require("./assets/fonts/Roboto-Light.ttf"),
    RobotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
    Oswald: require("./assets/fonts/Oswald-VariableFont_wght.ttf"),
    OswaldBold: require("./assets/fonts/Oswald-Bold.ttf"),
  });

  const backHandler = BackHandler.addEventListener("hardwareBackPress", () => {
    // Return true to prevent default behavior (going back)
    return true;
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
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerLeft: null, // Disable back navigation
            gestureEnabled: false,
          }}
        />
        {/*         <Stack.Screen name="HomeProfileTab" component={HomeProfileTab} />
         */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

/* const HomeProfileTab = () => {
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
  }, []); */

/*  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        activeTintColor: "white",
        inactiveTintColor: "gray",
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
        autoHideHomeIndicator: true,

        style: {
          borderTopWidth: 0,
        },

        tabBarStyle: {
          backgroundColor: "#393E46", // Change this to the background color of the tab bar
          borderTopWidth: 0,
          paddingVertical: 5,
        },
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
              color={focused ? "white" : "gray"}
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
              name={focused ? "nutrition" : "nutrition-outline"}
              size={size}
              color={focused ? "white" : "gray"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Goals"
        component={Tracker}
        options={{
          tabBarIcon: ({ size, focused, color }) => (
            <Ionicons
              name={focused ? "trophy" : "trophy-outline"}
              size={size}
              color={focused ? "white" : "gray"}
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
              color={focused ? "white" : "gray"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  ); */
/* }; */
