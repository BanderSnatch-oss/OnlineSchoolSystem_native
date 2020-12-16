import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import React from 'react';
import Header from '../shared/header';
import SignIn from '../screens/signin';
import SignUp from '../screens/signup';

const screens = {
    SignIn: {
        screen: SignIn,
        navigationOptions: () => {
            return {
                headerTitle: () => <Header />
            }
        },
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: () => {
            return {
                headerTitle: () => <Header />
            }
        },
    },
};

// home stack navigator screens
const SignStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#e8f5e9',
        headerStyle: { backgroundColor: '#43a047', height: 80 }
    }
});

export default SignStack;