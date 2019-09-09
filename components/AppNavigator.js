import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from '../containers/HomeScreen';
import NewEntryScreen from '../containers/NewEntryScreen';
import ViewEntryScreen from '../containers/ViewEntryScreen';

const AppNavigator = createAppContainer(createStackNavigator({
  Home: HomeScreen,
  NewEntry: NewEntryScreen,
  ViewEntries: ViewEntryScreen,
}, {
    initialRouteName: "Home",
}));

export default AppNavigator;
