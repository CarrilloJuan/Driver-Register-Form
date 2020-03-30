import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {DriverRegisterScreen, HomeScreen, InitialScreen} from '../screens';

const routesConfig = {
  InitialScreen: {
    screen: InitialScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  DriverRegister: {
    screen: DriverRegisterScreen,
    navigationOptions: {
      title: null,
    },
  },
};

const AppNavigator = createStackNavigator(routesConfig);

export default createAppContainer(AppNavigator);
