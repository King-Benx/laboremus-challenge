import React, {FC, memo} from 'react';
import {ImageBackground, StyleSheet, Image, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Dimensions} from '../assets/styles';
import colors from '../assets/styles/colors';
import {ImageComponent, TextComponent} from '../components/atoms';
import {SignInButton} from '../components/molecules';

const background = require('../assets/images/background.png');
const logo = require('../assets/images/logo.png');

interface Props {
  navigation: any;
}

const WelcomeScreen: FC<Props> = ({navigation}: Props) => {
  const handleGoogleSignIn = () => {
    // TODO: Implement the signin logic, ideally this would get the user signed in using google and this would also be a one time screen.
    navigation.navigate('Create Profile');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <ImageBackground
          source={{
            uri: Image.resolveAssetSource(background).uri,
          }}
          style={styles.background}
          imageStyle={styles.backgroundImage}>
          <View style={styles.internalContainer}>
            <ImageComponent
              imageStyle={styles.logo}
              uri={Image.resolveAssetSource(logo).uri}
            />
            <TextComponent text="Sante Coffee" textStyle={styles.title} />
            <TextComponent
              text="Let us help you manage the farmers in your community"
              textStyle={styles.subTitle}
            />
            <TextComponent text="Sign in with " textStyle={styles.text} />
            <SignInButton
              viewStyle={styles.signInButtonSection}
              onTouch={handleGoogleSignIn}
            />
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  signInButtonSection: {
    marginVertical: 10,
  },
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  internalContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 150,
  },
  logo: {
    width: Dimensions.LOGO_SIZE,
    height: Dimensions.LOGO_SIZE,
  },
  title: {
    color: colors.LOGO_COLOR,
    fontSize: Dimensions.TITLE,
  },
  subTitle: {
    width: '70%',
    marginVertical: 50,
    textAlign: 'center',
    fontSize: Dimensions.SUBTITLE,
    color: colors.GRAY,
  },
  text: {
    fontSize: Dimensions.FONT_SIZE,
    color: colors.SILVER,
  },
});

export default memo(WelcomeScreen);
