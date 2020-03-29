import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {DriverRegister} from '../screens';

const AppNavigator = createStackNavigator({
  DriverRegister: {
    screen: DriverRegister,
  },
});

export default createAppContainer(AppNavigator);
