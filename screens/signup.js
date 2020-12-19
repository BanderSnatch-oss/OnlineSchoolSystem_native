import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, TextInput, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global'
import { Picker } from '@react-native-community/picker';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from "react-redux"
import { setCurrentUser, setUserDetails } from '../redux/user/userActions'
import local_IP from '../local_IP'

function SignUp({ user, userDetails, setUserDetails, setCurrentUser }) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [studentID, setStudentID] = useState(0)
    const [schools, setSchools] = useState([])
    const [schoolID, setSchoolID] = useState(0)

    useEffect(() => {
        let options = {
            method: "get",
            headers: { "Content-Type": "application/json" },
        };
        let path =
            process.env.NODE_ENV === "production"
                ? "/school/"
                : `${local_IP}/school/`;
        fetch(path, options)
            .then((data) => data.json())
            .then((data) => {
                console.log(data);
                setSchools(data);
            });
    }, [])

    const handleClick = () => {
        console.log(name, email, password, studentID, schoolID);
        let userData
        let options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name,
                email,
                password,
                role: 'Parent'
            }),
        };
        let path =
            process.env.NODE_ENV === "production"
                ? "/auth/users/"
                : `${local_IP}/auth/users/`;
        fetch(path, options)
            .then((data) => data.json())
            .then((data) => {
                console.log(data);
                userData = data;
                let options = {
                    method: "post",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        email,
                        password,
                    }),
                };
                let path =
                    process.env.NODE_ENV === "production"
                        ? "/auth/jwt/create/"
                        : `${local_IP}/auth/jwt/create/`;
                fetch(path, options)
                    .then((data) => data.json())
                    .then((data) => {
                        console.log(data);
                        AsyncStorage.setItem("Authorization", `JWT ${data.access}`);
                        let options = {
                            method: "get",
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: `JWT ${data.access}`,
                            },
                        };
                        let path =
                            process.env.NODE_ENV === "production"
                                ? "/auth/users/me/"
                                : `${local_IP}/auth/users/me/`;
                        fetch(path, options)
                            .then((data) => data.json())
                            .then((data) => {
                                console.log(data);
                                setCurrentUser(data);
                                let options = {
                                    method: "post",
                                    headers: {
                                        "Content-Type": "application/json",
                                        Authorization: AsyncStorage.getItem("Authorization"),
                                    },
                                    body: JSON.stringify(
                                        {
                                            userID: userData.id,
                                            schoolID,
                                            studentID,
                                        }
                                    ),
                                };
                                let path =
                                    process.env.NODE_ENV === "production"
                                        ? `/parent/`
                                        : `${local_IP}/parent/`;
                                fetch(path, options)
                                    .then((data) => data.json())
                                    .then((data) => {
                                        console.log("done", data);
                                        setUserDetails(data);
                                    });
                            });
                    });
            })
    }

    return (
        <View style={globalStyles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={globalStyles.form}>
                    <Text style={styles.text}>SignUp</Text>
                    <TextInput
                        value={name}
                        style={globalStyles.input}
                        placeholder="Name"
                        onChangeText={(val) => setName(val)}
                    />
                    <TextInput
                        value={email}
                        style={globalStyles.input}
                        placeholder="Eamil"
                        onChangeText={(val) => setEmail(val)}
                    />
                    <TextInput
                        value={password}
                        style={globalStyles.input}
                        placeholder="Password"
                        onChangeText={(val) => setPassword(val)}
                        secureTextEntry={true}
                    />
                    <TextInput
                        value={studentID}
                        style={globalStyles.input}
                        placeholder="Student ID"
                        onChangeText={(val) => setStudentID(val)}
                    />
                    <Picker
                        selectedValue={schoolID}
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue, itemIndex) => setSchoolID(itemValue)}
                    >
                        <Picker.Item label='choose school' value={0} />
                        {
                            schools.map((school, i) => <Picker.Item label={school.name} value={school.id} key={i} />)
                        }
                        {/* <Picker.Item label="Java" value={0} />
                        <Picker.Item label="JavaScript" value={1} /> */}
                    </Picker>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);