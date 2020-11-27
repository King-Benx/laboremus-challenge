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
import {TextComponent, TextInputComponent} from '../components/atoms';
import {FarmersListComponent} from '../components/organisms';

const background = require('../assets/images/background-2.png');

interface Props {}

const Home: FC<Props> = ({}: Props) => {
  const data: Array<{name: string; gender: string; phone: string}> = [
    {
      name: 'Jewel Franecki',
      gender: 'Male',
      phone: '0788845593',
    },
    {
      name: 'Evans Quitzon',
      gender: 'Female',
      phone: '0756037156',
    },
    {
      name: 'Orpha Little',
      gender: 'Male',
      phone: '0789683379',
    },
    {
      name: 'Janelle Bednar',
      gender: 'Male',
      phone: '0713236788',
    },
    {
      name: 'Donald Pollich',
      gender: 'Male',
      phone: '0770321635',
    },
    {
      name: 'Daphne Konopelski',
      gender: 'Female',
      phone: '0729887166',
    },
    {
      name: 'Scarlett Fisher',
      gender: 'Female',
      phone: '0745703578',
    },
    {
      name: 'Elna Goodwin',
      gender: 'Male',
      phone: '0712541215',
    },
    {
      name: 'Tabitha Shields',
      gender: 'Female',
      phone: '0760257061',
    },
    {
      name: 'Laurie Schumm',
      gender: 'Female',
      phone: '0745850278',
    },
    {
      name: 'Nyah Cronin',
      gender: 'Female',
      phone: '0798622035',
    },
  ];

  const onCardTouched = () => {};

  const onPhoneTouch = () => {};

  const onSearch = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.container}>
          <ImageBackground
            style={styles.background}
            source={{uri: Image.resolveAssetSource(background).uri}}
            imageStyle={styles.backgroundImage}>
            <View style={styles.welcomeSection}>
              <TextComponent text="Hello, " textStyle={styles.welcomeText} />
              <TextComponent text="John" textStyle={styles.welcomeTextBold} />
            </View>
            <TextInputComponent
              placeholder="Search by name or telephone"
              fieldValueListener={onSearch}
            />
            <FarmersListComponent
              data={data}
              cardTouch={onCardTouched}
              onTelephoneTouch={onPhoneTouch}
            />
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
    paddingBottom: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    resizeMode: 'cover',
  },
  welcomeSection: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: 160,
    paddingHorizontal: 20,
    marginBottom: 50,
  },
  welcomeText: {
    fontSize: Dimensions.TITLE,
    color: colors.WHITE,
  },
  welcomeTextBold: {
    fontSize: Dimensions.TITLE,
    fontWeight: 'bold',
    color: colors.WHITE,
  },
});

export default memo(Home);
