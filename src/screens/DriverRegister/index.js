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
import {registerDriver} from '../../redux/driversSlice';

export default function DriverRegister() {
  const [registerData, setRegisterData] = useState({
    name: '',
    lastName: '',
    phone: '',
    age: '',
    email: '',
    patent: '',
    model: '',
    year: '',
  });

  const dispatch = useDispatch();
  const {loading, error} = useSelector(state => ({
    loading: state.drivers.loading,
    error: state.drivers.error,
  }));

  const handleOnChange = ({key, value}) => {
    setRegisterData(oldState => ({...oldState, [key]: value}));
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
              placeholder="Nombre"
              onChangeText={value => handleOnChange({key: 'name', value})}
              leftIcon={() => (
                <FontAwesome name="user" size={24} color="black" />
              )}
            />
            <Input
              placeholder="Apellido"
              onChangeText={value => handleOnChange({key: 'lastName', value})}
              leftIcon={() => (
                <FontAwesome name="user" size={24} color="black" />
              )}
            />
            <Input
              placeholder="Número telefónico"
              onChangeText={value => handleOnChange({key: 'phone', value})}
              leftIcon={() => (
                <FontAwesome name="mobile-phone" size={24} color="black" />
              )}
            />
            <NumericInput
              value={21}
              minValue={21}
              maxValue={75}
              label="Edad"
              leftIcon={() => (
                <FontAwesome name="user" size={24} color="black" />
              )}
              onChangeText={value => handleOnChange({key: 'age', value})}
            />
            <Input
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
              placeholder="Patente"
              onChangeText={value => handleOnChange({key: 'patent', value})}
              leftIcon={() => (
                <EntypoIcons name="text-document" size={24} color="black" />
              )}
            />
            <Input
              placeholder="Modelo"
              onChangeText={value => handleOnChange({key: 'model', value})}
              leftIcon={() => (
                <Ionicons name="logo-model-s" size={24} color="black" />
              )}
            />
            <Input
              placeholder="Año"
              onChangeText={value => handleOnChange({key: 'year', value})}
              leftIcon={() => (
                <FontAwesome name="calendar" size={24} color="black" />
              )}
            />
          </View>

          <Button
            title="Solid Button"
            onPress={() => dispatch(registerDriver(registerData))}
            loading={loading}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

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
