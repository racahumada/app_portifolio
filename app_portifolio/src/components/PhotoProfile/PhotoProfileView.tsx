import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';
import ImgProfile from '../../assets/images/profile_photo.jpeg';

const PhotoProfileView = () => {
  return <Image source={ImgProfile} style={styles.container} />;
};

export default PhotoProfileView;
