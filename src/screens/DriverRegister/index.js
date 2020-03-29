import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Text, Button} from 'react-native-elements';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';
import SafeAreaView from 'react-native-safe-area-view';

import {Input, NumericInput} from '../../components';
import {upSertDriver} from '../../redux/driversSlice';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 20,
  },
  inputGroup: {
    marginVertical: 8,
  },
  inputGrouptitle: {
    textAlign: 'center',
  },
});

export default function DriverRegister({navigation}) {
  const dispatch = useDispatch();
  const {loading, currentDriverInfo} = useSelector(({drivers}) => ({
    loading: drivers.status.loading,
    currentDriverInfo: drivers.driverInfo,
  }));

  const [driver, setDriver] = useState(currentDriverInfo || {});

  const handleOnChange = ({key, value}) => {
    setDriver(oldState => ({...oldState, [key]: value}));
  };

  const isUpdating = currentDriverInfo && true;

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.inputGroup}>
            <Text h4 style={styles.inputGrouptitle}>
              Datos personales
            </Text>
            <Input
              value={driver.name}
              placeholder="Nombre"
              onChangeText={value => handleOnChange({key: 'name', value})}
              leftIcon={() => (
                <FontAwesome name="user" size={24} color="black" />
              )}
            />
            <Input
              value={driver.lastName}
              placeholder="Apellido"
              onChangeText={value => handleOnChange({key: 'lastName', value})}
              leftIcon={() => (
                <FontAwesome name="user" size={24} color="black" />
              )}
            />
            <Input
              value={driver.phone}
              placeholder="Número telefónico"
              onChangeText={value => handleOnChange({key: 'phone', value})}
              leftIcon={() => (
                <FontAwesome name="mobile-phone" size={24} color="black" />
              )}
            />
            <NumericInput
              value={driver.age ? Number(driver.age) : 21}
              minValue={21}
              maxValue={75}
              label="Edad"
              leftIcon={() => (
                <FontAwesome name="user" size={24} color="black" />
              )}
              onChangeText={value => handleOnChange({key: 'age', value})}
            />
            <Input
              value={driver.email}
              placeholder="Email"
              onChangeText={value => handleOnChange({key: 'email', value})}
              leftIcon={() => (
                <EntypoIcons name="email" size={24} color="black" />
              )}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text h4 style={styles.inputGrouptitle}>
              Datos del Vehículo
            </Text>
            <Input
              value={driver.patent}
              placeholder="Patente"
              onChangeText={value => handleOnChange({key: 'patent', value})}
              leftIcon={() => (
                <EntypoIcons name="text-document" size={24} color="black" />
              )}
            />
            <Input
              value={driver.model}
              placeholder="Modelo"
              onChangeText={value => handleOnChange({key: 'model', value})}
              leftIcon={() => (
                <Ionicons name="logo-model-s" size={24} color="black" />
              )}
            />
            <Input
              value={driver.year}
              placeholder="Año"
              onChangeText={value => handleOnChange({key: 'year', value})}
              leftIcon={() => (
                <FontAwesome name="calendar" size={24} color="black" />
              )}
            />
          </View>

          <Button
            title="Register"
            onPress={() =>
              dispatch(upSertDriver(driver, isUpdating, navigation))
            }
            loading={loading}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
