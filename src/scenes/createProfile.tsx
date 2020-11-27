import React, {FC, memo, useState} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Image,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Dimensions} from '../assets/styles';
import colors from '../assets/styles/colors';
import {TextComponent, TextInputComponent} from '../components/atoms';
import {CustomButton} from '../components/molecules';

const background = require('../assets/images/background-3.png');

interface Props {
  navigation: any;
}

const CreateProfile: FC<Props> = ({navigation}: Props) => {
  const [name, setName] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const nameInputHandler = (text: string) => {
    setName(text);
  };

  const usernameInputHandler = (text: string) => {
    setUsername(text);
  };

  const handleCreateUser = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.container}>
          <ImageBackground
            style={styles.background}
            source={{uri: Image.resolveAssetSource(background).uri}}
            imageStyle={styles.backgroundImage}>
            <View style={styles.innerContainer}>
              <TextComponent
                text="Customize your profile"
                textStyle={styles.title}
              />
              <TextInputComponent
                placeholder="Please Enter Name"
                fieldValueListener={nameInputHandler}
              />
              <TextInputComponent
                placeholder="Enter Username"
                fieldValueListener={usernameInputHandler}
              />
              <CustomButton
                onTouch={handleCreateUser}
                isProcessing={loading}
                text="PROCEED"
                viewStyle={styles.button}
              />
            </View>
          </ImageBackground>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    resizeMode: 'cover',
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.LOGO_COLOR,
    fontSize: Dimensions.TITLE,
  },
  button: {
    marginVertical: 20,
    paddingVertical: 10,
    paddingHorizontal: 100,
    borderRadius: 10,
  },
});

export default memo(CreateProfile);
