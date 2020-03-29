import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {DriverRegister} from '../screens';

const AppNavigator = createStackNavigator(
  {DriverRegister: DriverRegister},
  {
    initialRouteName: 'DriverRegister',
    headerMode: 'none',
  },
);

export default createAppContainer(AppNavigator);
