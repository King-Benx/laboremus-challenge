import React, {FC, memo} from 'react';
import {Image, StyleSheet, ImageStyle} from 'react-native';

interface Props {
  uri: string;
  imageStyle: ImageStyle;
}

const ImageComponent: FC<Props> = ({uri, imageStyle}: Props) => (
  <Image source={{uri: uri}} style={[styles.image, imageStyle]} />
);

const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
  },
});

export default memo(ImageComponent);
