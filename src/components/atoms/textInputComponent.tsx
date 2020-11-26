import React, {FC, memo, useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import colors from '../../assets/styles/colors';

interface Props {
  placeholder: string;
  fieldValueListener: (e: string) => void;
}

const TextInputComponent: FC<Props> = ({
  placeholder,
  fieldValueListener,
}: Props) => {
  const [value, onChangeText] = useState<string>('');

  const changeTextHandler = (text: string) => {
    onChangeText(text);
  };

  const endEditingHandler = () => {
    fieldValueListener(value);
  };

  return (
    <TextInput
      autoCorrect={false}
      value={value}
      onChangeText={changeTextHandler}
      autoCapitalize="none"
      placeholder={placeholder}
      placeholderTextColor={colors.SILVER}
      clearButtonMode="always"
      style={styles.textInput}
      underlineColorAndroid="transparent"
      onEndEditing={endEditingHandler}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: 'rgba(0,0,0,.3)',
    color: '#fff',
    height: 40,
    minWidth: 300,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 15,
    alignSelf: 'center',
    borderRadius: 20,
  },
});

export default memo(TextInputComponent);
