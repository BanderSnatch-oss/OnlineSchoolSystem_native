import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
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