import AntDesign from '@expo/vector-icons/AntDesign';
import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { TRowSkills } from '../../types/TRowSkills';

const RowSkillsView = ({ label, value }: TRowSkills) => {
  const countSkills = Array.from({ length: value }, (y, k) => k);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.wrapperStars}>
        {countSkills.map((value, index) => (
          <AntDesign name="star" key={`${index}-${label}`} color={`#FFBF00`} />
        ))}
      </View>
    </View>
  );
};

export default RowSkillsView;
