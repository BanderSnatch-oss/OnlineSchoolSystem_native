import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, TextInput, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Home from './screens/home';
import SignIn from './screens/signin';
import SignUp from './screens/signup';
import Header from './shared/header';
import { globalStyles } from './styles/global'
import Navigator from './routes/drawer';
import { Provider } from 'react-redux'
import { store } from './redux/store'

export default function App() {

  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
    // <View style={globalStyles.container}>
    //   <Header />
    //   <Home />
    //   <SignIn />
    //   <SignUp />
    //   <StatusBar style="auto" />
    // </View>
  );
}
