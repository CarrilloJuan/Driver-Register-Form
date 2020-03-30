import React, {useContext} from 'react';
import {Text} from 'react-native-elements';
import {View} from 'react-native';
import {ThemeContext} from 'react-native-elements';

export default function CustomText({style, ...props}) {
  const {theme} = useContext(ThemeContext);
  return (
    <View>
      <Text style={[{color: theme.colors.grey3}, style]} {...props} />
    </View>
  );
}
