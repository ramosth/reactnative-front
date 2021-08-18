/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CreateAccount from '../screens/CreateAccount/index';
import Login from '../screens/Login';
import ForgotPassword from '../screens/ForgotPassword/index';

const Stack = createStackNavigator();

export default function RotaAutentication() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
}
