import React, {FC, memo} from 'react';
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
import {ImageComponent, TextComponent} from '../components/atoms';

const background = require('../assets/images/background-2.png');
const construction = require('../assets/images/construction.png');

interface Props {}

const AddFarmer: FC<Props> = ({}: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.container}>
          <ImageBackground
            style={styles.background}
            source={{uri: Image.resolveAssetSource(background).uri}}
            imageStyle={styles.backgroundImage}>
            <ImageComponent
              imageStyle={styles.image}
              uri={Image.resolveAssetSource(construction).uri}
            />
            <TextComponent text="Coming Soon!" textStyle={styles.comingSoon} />
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
  image: {
    width: 300,
    height: 200,
  },
  comingSoon: {
    fontSize: Dimensions.TITLE,
    color: colors.LOGO_COLOR,
  },
});

export default memo(AddFarmer);
