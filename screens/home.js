import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { globalStyles } from '../styles/global'

export default function Home({ navigation }) {

    const pressHandler = () => {
        navigation.navigate('SignIn')
    }

    return (
        <View>
            <Text style={globalStyles.text}>'Hi :)'</Text>
            <Button title='Signout' color='#1b5e20' onPress={pressHandler} />
            <StatusBar style="auto" />
        </View>
    );
}
