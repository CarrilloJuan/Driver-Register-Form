import React from 'react';
import {Input} from 'react-native-elements';
import {View, StyleSheet} from 'react-native';

export default function CustomInput({...props}) {
  return (
    <View style={styles.container}>
      <Input {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
