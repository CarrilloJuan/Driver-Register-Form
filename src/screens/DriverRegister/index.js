import React, {useState} from 'react';
import {View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Button} from 'react-native-elements';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';
import SafeAreaView from 'react-native-safe-area-view';
import PropTypes from 'prop-types';

import {Input, NumericInput, Text} from '../../components';
import {upSertDriver} from '../../redux/driversSlice';
import {validateData, isError} from '../../util';
import styles from './styles';

export default function DriverRegister({navigation}) {
  const dispatch = useDispatch();
  const {loading, currentDriverInfo} = useSelector(({drivers}) => ({
    loading: drivers.status.loading,
    currentDriverInfo: drivers.driverInfo,
  }));

  const [driver, setDriver] = useState(currentDriverInfo || {});
  const [errors, setErrors] = useState([]);

  const handleOnChange = ({key, value}) => {
    setDriver(oldState => ({...oldState, [key]: value}));
  };

  const isUpdating = currentDriverInfo && true;

  const handleOnSubmit = data => {
    const validationErrors = validateData(data);
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }
    dispatch(upSertDriver(data, isUpdating, navigation));
  };

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
              errorMessage={isError(errors, 'name')}
            />
            <Input
              value={driver.lastName}
              placeholder="Apellido"
              onChangeText={value => handleOnChange({key: 'lastName', value})}
              leftIcon={() => (
                <FontAwesome name="user" size={24} color="black" />
              )}
              errorMessage={isError(errors, 'lastName')}
            />
            <Input
              value={driver.phone}
              placeholder="Número telefónico"
              onChangeText={value => handleOnChange({key: 'phone', value})}
              leftIcon={() => (
                <FontAwesome name="mobile-phone" size={24} color="black" />
              )}
              errorMessage={isError(errors, 'phone')}
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
              errorMessage={isError(errors, 'email')}
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
              errorMessage={isError(errors, 'patent')}
            />
            <Input
              value={driver.model}
              placeholder="Modelo"
              onChangeText={value => handleOnChange({key: 'model', value})}
              leftIcon={() => (
                <Ionicons name="logo-model-s" size={24} color="black" />
              )}
              errorMessage={isError(errors, 'model')}
            />
            <Input
              value={driver.year}
              placeholder="Año"
              onChangeText={value => handleOnChange({key: 'year', value})}
              leftIcon={() => (
                <FontAwesome name="calendar" size={24} color="black" />
              )}
              errorMessage={isError(errors, 'year')}
            />
          </View>

          <Button
            title={isUpdating ? 'Actualizar' : 'Registrese'}
            onPress={() => handleOnSubmit(driver)}
            loading={loading}
            style={styles.button}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

DriverRegister.propTypes = {
  navigation: PropTypes.shape({navigate: PropTypes.func}),
};
