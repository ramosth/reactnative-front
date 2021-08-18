/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import EditSkill from '../screens/EditSkill';
import AddSkill from '../screens/AddSkill';

const Stack = createStackNavigator();

export default function RotaLogin() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="EditSkill" component={EditSkill} />
      <Stack.Screen name="AddSkill" component={AddSkill} />
    </Stack.Navigator>
  );
}
