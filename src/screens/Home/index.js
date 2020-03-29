import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Button} from 'react-native-elements';
import {useSelector} from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
  },
  button: {
    marginTop: 8,
  },
});

export default function Home({navigation}) {
  const {currentDriverInfo} = useSelector(({drivers}) => ({
    currentDriverInfo: drivers.driverInfo,
  }));

  return (
    <View style={styles.container}>
      <Text h4 style={styles.title}>
        Bienvenido
      </Text>
      <Button
        title={currentDriverInfo ? 'Actualice sus datos' : 'Registrese'}
        containerStyle={styles.button}
        onPress={() => navigation.navigate('DriverRegister')}
      />
    </View>
  );
}
