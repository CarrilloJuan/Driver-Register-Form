import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';

import NumericInput from 'react-native-numeric-input';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 10,
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  label: {
    fontSize: 18,
    color: '#aaa',
    marginRight: 4,
  },
});

export default function CustomNumericInput({
  leftIcon,
  label,
  onChangeText,
  ...props
}) {
  return (
    <View style={styles.container}>
      <View style={styles.inputGroup}>
        {leftIcon && leftIcon}
        {label && <Text style={styles.label}>{label}</Text>}
        <NumericInput onChange={value => onChangeText(value)} {...props} />
      </View>
    </View>
  );
}
