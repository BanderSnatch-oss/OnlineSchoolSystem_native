import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import React from 'react';
import Header from '../shared/header';
import SignIn from '../screens/signin';
import Home from '../screens/home';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: () => {
            return {
                headerTitle: () => <Header />
            }
        },
    },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#e8f5e9',
        headerStyle: { backgroundColor: '#43a047', height: 80 }
    }
});

export default HomeStack;