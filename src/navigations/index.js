import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {DriverRegisterScreen, HomeScreen} from '../screens';

const routesConfig = {
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  DriverRegister: {
    screen: DriverRegisterScreen,
    navigationOptions: {
      title: 'Register',
    },
  },
};

const AppNavigator = createStackNavigator(routesConfig);

export default createAppContainer(AppNavigator);
