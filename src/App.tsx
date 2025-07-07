import React from 'react';
import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';

// Navigation
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens
import Home from './screens/Home';
import Details from './screens/Details';

export type RoomStackParamList = {
  Home:undefined;
  Details : {productId:string}
};

const Stack = createNativeStackNavigator<RoomStackParamList>()

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen
          name = 'Home'
          component={Home}
          options={{ title:"Trending Products"}}
          />
          <Stack.Screen
          name = 'Details'
          component={Details}
          options={{ title:"Product Details"}}
          />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
