import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

// stacks
import HomeStack from './homeStack';
import SignStack from './signStack';

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
    SignStack: {
        screen: SignStack,
    },
    Home: {
        screen: HomeStack,
    },
});

export default createAppContainer(RootDrawerNavigator);