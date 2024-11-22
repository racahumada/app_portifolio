import React from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import InicioController from './InicioController';
import { styles } from './styles';
import { Button } from '../../components/Button';
import { PhotoProfile } from '../../components/PhotoProfile';

const InicioView = () => {
  const controller = InicioController();

  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: 30 + insets.top, paddingBottom: 20 + insets.bottom }]}>
      <PhotoProfile />
      <Text style={styles.nameText}>Ricardo A. Castro Ahumada</Text>
      <View style={styles.containerLinks}>
        <Text style={styles.titleLinks}>Links:</Text>
        <View style={styles.containerButtons}>
          <Button
            text="LinkedIn"
            onPress={() => controller.handlePressLink('https://www.linkedin.com/in/ricardo-castro-ahumada/')}
          />
          <Button text="Github" onPress={() => controller.handlePressLink('https://github.com/racahumada')} />
        </View>
      </View>
    </View>
  );
};

export default InicioView;
