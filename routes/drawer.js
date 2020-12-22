import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage'

// stacks
import HomeStack from './homeStack';
import SignStack from './signStack';

// drawer navigation options

const homeDrawer = AsyncStorage.getItem("Authorization") ? {
    screen: HomeStack,
} : {}

const RootDrawerNavigator = createDrawerNavigator({
    SignStack: {
        screen: SignStack,
    },
    Home: homeDrawer
});

export default createAppContainer(RootDrawerNavigator);