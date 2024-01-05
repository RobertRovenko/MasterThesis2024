import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import GameScreen from './screens/GameScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} 
         options={{
          title: null, // Set a custom title for the screen
          headerLeft: null, // Hide the back button
        }}/>
        <Stack.Screen name="GameScreen" component={GameScreen} 
         options={{
          title: null, // Set a custom title for the screen
           // Hide the back button
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
