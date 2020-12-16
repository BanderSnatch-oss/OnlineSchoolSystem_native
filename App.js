import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './shared/header'

export default function App() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  handleClick = () => {
    console.log(email, password);
  }

  return (
    <View style={styles.container}>
      <Header />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.form}>
          <Text style={styles.text}>SignIn</Text>
          <TextInput
            style={styles.input}
            placeholder="email"
            onChangeText={(val) => setEmail(val)}
          />
          <TextInput
            style={styles.input}
            placeholder="password"
            onChangeText={(val) => setPassword(val)}
            secureTextEntry={true}
          />
          <Button title="SignIn" style={styles.button} onPress={handleClick} />
        </View>
      </TouchableWithoutFeedback>
      {/* <Text style={styles.text}>create a login screen</Text> */}
      {/* <Text style={styles.text}>create a signup screen</Text> */}
      {/* <Text style={styles.text}>create a parent home page that dispalys their kid's stats</Text> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a5d6a7',
    // 50: '#e8f5e9';
    // 100: '#c8e6c9';
    // 200: '#a5d6a7';
    // 300: '#81c784';
    // 400: '#66bb6a';
    // 500: '#4caf50';
    // 600: '#43a047';
    // 700: '#388e3c';
    // 800: '#2e7d32';
    // 900: '#1b5e20';
    // A100: '#b9f6ca';
    // A200: '#69f0ae';
    // A400: '#00e676';
    // A700: '#00c853';
  },
  text: {
    fontSize: 30,
    padding: 10,
    textAlign: 'center'
  },
  button: {
    overlayColor: '#00c853'
  },
  form: {
    flex: .85,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: '#4caf50',
    padding: 8,
    margin: 10,
    width: 200,
  }
});
