import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import initialImageScreen from '../../assets/images/initialScreen.png';

import {Text} from '../../components';
import {Button, Image} from 'react-native-elements';
import styles from './styles';

export default function InitialScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Image
        source={initialImageScreen}
        containerStyle={styles.image}
        resizeMode="cover"
      />
      <View>
        <Text style={styles.title} h4>
          Bienvenido a la {'\n'}Driver app
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          raised
          title={'Ingresar'}
          containerStyle={styles.button}
          disabled
        />

        <View style={styles.divider} />
        <Button
          raised
          title={'Registrese'}
          containerStyle={styles.button}
          onPress={() => navigation.navigate('DriverRegister')}
        />
      </View>
    </View>
  );
}

InitialScreen.propTypes = {
  navigation: PropTypes.shape({navigate: PropTypes.func}),
};
