import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import AsyncStorage from 'react-native-web/dist/exports/AsyncStorage';

import AppNavigator from './components/AppNavigator'

//NEW CODE


class App extends React.Component {
  static router = AppNavigator.router

  state = {entries: []}

  componentDidMount() {
      AsyncStorage.getItem('au.com.foundry.logbook')
      .then(item => {
          this.setState(JSON.parse(item))
      })
      .catch(err => {
          console.log(err)
      })
  }

  componentDidUpdate() {
      const {entries} = this.state
      AsyncStorage.setItem('au.com.foundry.logbook', JSON.stringify({entries}))
      .then(() => {
          console.log("Entries stored");
      })
      .catch(err => {
          console.log(err);
      })
  }

  //This is a function to add new entries
  //We add the entry to the existing list of entries by making a new list
  addEntry = (entry) => this.setState(
      (state) => ({
          entries: [
              entry,
              ...state.entries
          ]
      })
  )

  //This is our new function function for removing stuff
  //It will remove an entry if we pass its index
  removeEntry = (entryIndex) => this.setState(
      (state) => ({
          entries: [
              //Slice will create a new list from the a given index either to the end
              //Or until one index before the given index
              ...state.entries.slice(0, entryIndex),
              ...state.entries.slice(entryIndex+1)
          ]
      })
  )

  render() {
      const {entries} = this.state
      //Added remove entry to screen props
    return (
      <AppNavigator
        navigation={this.props.navigation}
        screenProps={{entries, addEntry: this.addEntry, removeEntry: this.removeEntry}}
      />
    )
  }
}

export default App
