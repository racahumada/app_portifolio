import React from 'react';
import { View, Text, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles } from './styles';
import ImgProfile from '../../assets/images/profile_photo.jpeg';
import { Button } from '../../components/Button';

const MainView = () => {
  console.log('teste');
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: 30 + insets.top, paddingBottom: 20 + insets.bottom }]}>
      <Image source={ImgProfile} style={styles.image} />
      <Text style={styles.nameText}>Ricardo A. Castro Ahumada</Text>
      <View style={styles.containerLinks}>
        <Text style={styles.titleLinks}>Links:</Text>
        <View style={styles.containerButtons}>
          <Button text="LinkedIn" />
          <Button text="Github" />
        </View>
      </View>
    </View>
  );
};

export default MainView;
