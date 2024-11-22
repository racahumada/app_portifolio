import * as Linking from 'expo-linking';
import React from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles } from './styles';
import { Button } from '../../components/Button';
import PhotoProfileView from '../../components/PhotoProfile/PhotoProfileView';
const MainView = () => {
  const insets = useSafeAreaInsets();

  const handlePressLink = async (url: string) => {
    await Linking.openURL(url);
  };

  return (
    <View style={[styles.container, { paddingTop: 30 + insets.top, paddingBottom: 20 + insets.bottom }]}>
      <PhotoProfileView />
      <Text style={styles.nameText}>Ricardo A. Castro Ahumada</Text>
      <View style={styles.containerLinks}>
        <Text style={styles.titleLinks}>Links:</Text>
        <View style={styles.containerButtons}>
          <Button
            text="LinkedIn"
            onPress={() => handlePressLink('https://www.linkedin.com/in/ricardo-castro-ahumada/')}
          />
          <Button text="Github" onPress={() => handlePressLink('https://github.com/racahumada')} />
        </View>
      </View>
    </View>
  );
};

export default MainView;
