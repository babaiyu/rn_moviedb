import React from 'react';
import {StyleSheet} from 'react-native';
import {Image} from 'react-native';
import {IMAGE_URL} from 'services/api';

interface Props {
  source: string;
}

export default function MyImage({source}: Props) {
  return (
    <Image
      source={{uri: IMAGE_URL + source}}
      style={styles.image}
      resizeMode="contain"
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
  },
});
