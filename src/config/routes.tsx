import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import customTheme from './combineThemes';

// Import Screens
import HomeScreen from '../screens/Home';
import AboutScreen from '../screens/About';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="AboutScreen" component={AboutScreen} />
    </Tab.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer theme={customTheme}>
      <Stack.Navigator
        screenOptions={() => ({...TransitionPresets.SlideFromRightIOS})}>
        <>
          <Stack.Screen
            name="BottomTab"
            component={BottomTab}
            options={{headerShown: false}}
          />
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
