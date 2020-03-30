import React from 'react';
import {Input} from 'react-native-elements';
import {View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  icon: {
    marginRight: 8,
  },
});

export default function CustomInput({...props}) {
  return (
    <View style={styles.container}>
      <Input {...props} leftIconContainerStyle={styles.icon} />
    </View>
  );
}
