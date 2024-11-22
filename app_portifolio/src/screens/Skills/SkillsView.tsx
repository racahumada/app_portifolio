import React from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles } from './styles';
import { PhotoProfile } from '../../components/PhotoProfile';
import { RowSkills } from '../../components/RowSkills';

const SkillsView = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingTop: 30 + insets.top, paddingBottom: 20 + insets.bottom }]}>
      <PhotoProfile />
      <Text style={styles.nameText}>Ricardo A. Castro Ahumada</Text>
      <View style={styles.containerSkills}>
        <Text style={styles.titleSkills}>Skills:</Text>
        <View style={styles.containerList}>
          <RowSkills label="React Native" value={5} />
        </View>
      </View>
    </View>
  );
};

export default SkillsView;
