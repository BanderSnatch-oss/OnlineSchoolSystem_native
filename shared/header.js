import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Corona School</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 75,
        backgroundColor: '#43a047',
        paddingTop: 35,
    },
    title: {
        fontSize: 22,
        textAlign: 'center',
        color: '#e8f5e9'
    }
});
