import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import MyCart from './MyCart';

const Index = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="MyCart" component={MyCart} />
    </Tab.Navigator>
  );
};

export default Index;

const styles = StyleSheet.create({});
