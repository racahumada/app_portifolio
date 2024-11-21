import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { TButton } from '../../types/TButton';

const ButtonView = ({ text, onPress }: TButton) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonView;
