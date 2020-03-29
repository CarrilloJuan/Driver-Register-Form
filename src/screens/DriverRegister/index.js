import React from 'react';
import {View, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Text} from 'react-native-elements';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Input, NumericInput} from '../../components';
import {ScrollView} from 'react-native-gesture-handler';
import SafeAreaView from 'react-native-safe-area-view';

export default function RegisterForm() {
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
              leftIcon={() => (
                <FontAwesome name="user" size={24} color="black" />
              )}
            />
            <Input
              placeholder="Apellido"
              leftIcon={() => (
                <FontAwesome name="user" size={24} color="black" />
              )}
            />
            <Input
              placeholder="Número telefónico"
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
            />
            <Input
              placeholder="Email"
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
              leftIcon={() => (
                <EntypoIcons name="text-document" size={24} color="black" />
              )}
            />
            <Input
              placeholder="Modelo"
              leftIcon={() => (
                <Ionicons name="logo-model-s" size={24} color="black" />
              )}
            />
            <Input
              placeholder="Año"
              leftIcon={() => (
                <FontAwesome name="calendar" size={24} color="black" />
              )}
            />
          </View>
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
