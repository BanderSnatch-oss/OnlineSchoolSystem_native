import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global'
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from "react-redux"
import { setCurrentUser, setUserDetails } from '../redux/user/userActions'
import local_IP from "../local_IP";


function SignIn({ navigation, user, userDetails, setUserDetails, setCurrentUser }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    console.log('>>>>', user, userDetails);
    const pressHandler = () => {
        navigation.navigate('SignUp')
    }

    const handleClick = () => {
        console.log(email, password);
        let options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        };
        let path =
            process.env.NODE_ENV === "production"
                ? "/auth/jwt/create/"
                : `${local_IP}/auth/jwt/create/`;
        fetch(path, options)
            .then((data) => data.json())
            .then((data) => {
                if (data.access) {
                    AsyncStorage.setItem("Authorization", `JWT ${data.access}`);
                    let token = `JWT ${data.access}`;
                    let options = {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: token,
                        },
                    };
                    let path =
                        process.env.NODE_ENV === "production"
                            ? "/auth/users/me/"
                            : `${local_IP}/auth/users/me/`;
                    fetch(path, options)
                        .then((data) => data.json())
                        .then((data) => {
                            console.log("><>", data);
                            // setRole(data.role);
                            setCurrentUser(data);
                            let options = {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                    Authorization: AsyncStorage.getItem("Authorization"),
                                },
                                body: JSON.stringify({ userID: data.id }),
                            };
                            let path =
                                process.env.NODE_ENV === "production"
                                    ? `/parent/`
                                    : `${local_IP}/parent/details`;
                            fetch(path, options)
                                .then((data) => data.json())
                                .then((data) => {
                                    console.log(">>", data);
                                    setUserDetails(data);
                                    navigation.navigate('Home')
                                })
                        })
                }
            })
    }

    return (
        <View style={globalStyles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={globalStyles.form}>
                    <Image source={{ uri: 'https://media.discordapp.net/attachments/762721371809382421/790998137950830592/alphaplus-logo1.png' }}
                        style={{ width: 80, height: 80 }}
                    />
                    <Text style={styles.text}>SignIn</Text>
                    <TextInput
                        style={globalStyles.input}
                        placeholder="Email"
                        value={email}
                        onChangeText={(val) => setEmail(val)}
                    />
                    <TextInput
                        style={globalStyles.input}
                        placeholder="Password"
                        value={password}
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
        color: '#2e7d32'
    },
    textSm: {
        fontSize: 16,
        padding: 10,
        textAlign: 'center',
        color: '#1b5e20'
    },
});

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentUser: user => dispatch(setCurrentUser(user)),
        setUserDetails: user => dispatch(setUserDetails(user)),
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user.user,
        userDetails: state.user.userDetails
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);