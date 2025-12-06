import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Auth from '../screens/Auth';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Reels from '../screens/Reels';
import ChatGPT from '../screens/ChatGPT';
import Video from '../screens/Video';
import Search from '../screens/Search';
import Live from '../screens/Live';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Auth" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Auth" component={Auth} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Reels" component={Reels} />
      <Stack.Screen name="ChatGPT" component={ChatGPT} />
      <Stack.Screen name="Video" component={Video} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Live" component={Live} />
    </Stack.Navigator>
  );
  }
