import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, TextInput, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global'

export default function SignUp() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    handleClick = () => {
        console.log(name, email, password);
    }

    return (
        <View style={globalStyles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={globalStyles.form}>
                    <Text style={styles.text}>SignUp</Text>
                    <TextInput
                        style={globalStyles.input}
                        placeholder="Name"
                        onChangeText={(val) => setName(val)}
                    />
                    <TextInput
                        style={globalStyles.input}
                        placeholder="Eamil"
                        onChangeText={(val) => setEmail(val)}
                    />
                    <TextInput
                        style={globalStyles.input}
                        placeholder="Password"
                        onChangeText={(val) => setPassword(val)}
                        secureTextEntry={true}
                    />
                    <Button title="SignUp" color="#1b5e20" onPress={handleClick} />
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
});
