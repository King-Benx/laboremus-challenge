import React, {FC, memo} from 'react';
import {TouchableOpacity, View, ViewStyle, StyleProp} from 'react-native';
import {IconComponent} from '../atoms';
import {StyleSheet} from 'react-native';
import colors from '../../assets/styles/colors';
import {Dimensions} from '../../assets/styles';

interface Props {
  viewStyle: StyleProp<ViewStyle>;
  onTouch: () => void;
}

const signInComponent: FC<Props> = ({viewStyle, onTouch}: Props) => (
  <TouchableOpacity onPress={onTouch}>
    <View style={[styles.container, viewStyle]}>
      <IconComponent type="font-awesome" size={24} name="google" color="#fff" />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    borderRadius: Dimensions.SIGN_IN_BUTTON / 2,
    width: Dimensions.SIGN_IN_BUTTON,
    height: Dimensions.SIGN_IN_BUTTON,
    backgroundColor: colors.RED,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default memo(signInComponent);
