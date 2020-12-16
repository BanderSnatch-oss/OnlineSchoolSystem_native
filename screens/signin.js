import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, TextInput, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global'


export default function SignIn({ navigation }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const pressHandler = () => {
        navigation.navigate('SignUp')
    }

    handleClick = () => {
        console.log(email, password);
    }

    return (
        <View style={globalStyles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={globalStyles.form}>
                    <Text style={styles.text}>SignIn</Text>
                    <TextInput
                        style={globalStyles.input}
                        placeholder="Email"
                        onChangeText={(val) => setEmail(val)}
                    />
                    <TextInput
                        style={globalStyles.input}
                        placeholder="Password"
                        onChangeText={(val) => setPassword(val)}
                        secureTextEntry={true}
                    />
                    <Button title="SignIn" color="#1b5e20" onPress={handleClick} />
                    <Text style={styles.textSm}>Don't have an accout ?</Text>
                    <Button title="SignUp" color="#1b5e20" onPress={pressHandler} />
                </View>
            </TouchableWithoutFeedback>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        padding: 10,
        textAlign: 'center',
        color: '#1b5e20'
    },
    textSm: {
        fontSize: 16,
        padding: 10,
        textAlign: 'center',
        color: '#1b5e20'
    },
});
