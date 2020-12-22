import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { globalStyles } from '../styles/global'
import { connect } from "react-redux"
import AsyncStorage from '@react-native-community/async-storage';
import StatsCard from '../shared/card'
import local_IP from '../local_IP'

function Home({ navigation, user, userDetails }) {

    const [stats, setStats] = useState([])

    const pressHandler = () => {
        AsyncStorage.removeItem("Authorization")
        navigation.navigate('SignIn')
    }

    useEffect(() => {
        console.log('object>>>', userDetails[0].studentUserID);
        let options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ studentID: userDetails[0].studentUserID })
        };
        let path =
            process.env.NODE_ENV === "production"
                ? "/exam/stats"
                : `${local_IP}/exam/stats`;
        fetch(path, options)
            .then((data) => data.json())
            .then((data) => {
                console.log("mydataa", data);
                setStats(data)
            })
    }, [user, userDetails])

    console.log(">>>", user, userDetails, stats);

    return (
        <View>
            <Text style={globalStyles.text}>Welcome, {user.name}</Text>
            <Text style={globalStyles.textSmall}>here are {stats[0] && stats[0].studentName} grades</Text>
            {
                stats && stats.map((stat, i) => <StatsCard stat={stat} key={i} />)
            }
            <Button title='Signout' color='#1b5e20' onPress={pressHandler} />
            <StatusBar style="auto" />
        </View>
    );
}
const mapStateToProps = (state) => {
    return {
        user: state.user.user,
        userDetails: state.user.userDetails
    }
}

export default connect(mapStateToProps)(Home);