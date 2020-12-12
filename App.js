import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Corona School</Text>
      <Text style={styles.text}>create a login screen</Text>
      <Text style={styles.text}>create a signup screen</Text>
      <Text style={styles.text}>create a parent home page that dispalys their kid's stats</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    padding: 10,
    textAlign: 'center'
  }
});
