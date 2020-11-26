import React, {FC, memo} from 'react';
import {Text, StyleSheet, StyleProp, TextStyle} from 'react-native';
import {Fonts} from '../../assets/styles';

interface Props {
  text: string;
  textStyle: StyleProp<TextStyle>;
}
const TextComponent: FC<Props> = ({text, textStyle}: Props) => (
  <Text style={[styles.text, textStyle]}>{text}</Text>
);

const styles = StyleSheet.create({
  text: {
    fontFamily: Fonts.FONT_FAMILY_REGULAR,
  },
});

export default memo(TextComponent);
