import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Alpha Plus</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center'
    },
    title: {
        fontSize: 22,
        color: '#e8f5e9',
        letterSpacing: 2,
        paddingBottom: 30,
    }
});
