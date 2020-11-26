import React, {FC, memo} from 'react';
import {
  TouchableOpacity,
  View,
  ViewStyle,
  StyleProp,
  ActivityIndicator,
} from 'react-native';
import {StyleSheet} from 'react-native';
import {Dimensions} from '../../assets/styles';
import colors from '../../assets/styles/colors';
import {TextComponent} from '../atoms';

interface Props {
  text: string;
  viewStyle: StyleProp<ViewStyle>;
  onTouch: () => void;
  isProcessing: boolean;
}

const customButtonComponent: FC<Props> = ({
  text,
  viewStyle,
  onTouch,
  isProcessing,
}: Props) => (
  <TouchableOpacity onPress={onTouch}>
    <View style={[styles.container, viewStyle]}>
      {isProcessing ? (
        <ActivityIndicator size="small" color={colors.WHITE} />
      ) : (
        <TextComponent text={text} textStyle={styles.text} />
      )}
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.LOGO_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.BLACK,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0,
    shadowRadius: 2,
    elevation: 2,
  },
  text: {
    textTransform: 'uppercase',
    color: colors.WHITE,
    fontSize: Dimensions.FONT_SIZE,
  },
});

export default memo(customButtonComponent);
