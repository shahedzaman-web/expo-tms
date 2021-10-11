import React from 'react';



import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import LoginScreen from './App/screen/LoginScreen';
import OutletScreen from './App/screen/OutletScreen';
import DrawerContains from './App/screen/DrawerContains';
import HomeScreen from './App/screen/HomeScreen';
import CallUpdate from './App/screen/CallUpdate';


const AppStack = createNativeStackNavigator();
const AppStackScreens = () => {
  return (
    <AppStack.Navigator
    screenOptions={{headerShown: false}}
    >
      <AppStack.Screen name="Home" component={HomeScreen} />
      <AppStack.Screen name="Outlet" component={OutletScreen} />
      <AppStack.Screen name="CallUpdate" component={CallUpdate} />

    </AppStack.Navigator>
  );
};

const DrawerStack = createDrawerNavigator();
const DrawerStackScreens = () => {
  return (
    <DrawerStack.Navigator
      screenOptions={{
        headerShown: false,
        drawerPosition: 'left',
      }}
      headerMode="none"
      drawerContent={props => <DrawerContains {...props} />}>
      <DrawerStack.Screen
        name="App"
        component={AppStackScreens}
        options={{drawerLabel: 'Home'}}
      />
    </DrawerStack.Navigator>
  );
};

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Drawer" component={DrawerStackScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

