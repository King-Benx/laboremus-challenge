import React, {FC, memo, useState, useEffect} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Image,
  View,
  KeyboardAvoidingView,
  ActivityIndicator,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Dimensions} from '../assets/styles';
import colors from '../assets/styles/colors';
import {TextComponent, TextInputComponent} from '../components/atoms';
import {useSelector, useDispatch} from 'react-redux';
import {FarmersListComponent} from '../components/organisms';
import {RootState} from '../data/store';

const background = require('../assets/images/background-2.png');

interface Props {}

const Home: FC<Props> = ({}: Props) => {
  const [data, setData] = useState<
    Array<{name: string; gender: string; phone: string}>
  >([]);
  const viewState = useSelector((state: RootState) => state.farmers);
  const dispatch = useDispatch();

  useEffect(() => {
    const subscriber = dispatch.farmers.requestFarmerList();
    return () => subscriber;
  }, [dispatch.farmers]);

  useEffect(() => {
    if (viewState.farmerList.length > 0) {
      setData(viewState.farmerList);
    }
  }, [viewState.farmerList]);

  const onCardTouched = () => {
    //TODO: Implement functionality when a user taps a card ideally, it would open up a detail screen about the farmer
  };

  const onPhoneTouch = () => {
    //TODO: Implement functionality when a user taps the call button on a card, ideally this would invoke the calling intent
  };

  const onSearch = (text: string) => {
    if (text !== '') {
      const search = data.filter(
        (value) => value.name.includes(text) || value.phone.includes(text),
      );
      setData(search);
    } else {
      dispatch.farmers.requestFarmerList();
    }
  };

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
            {viewState.loading ? (
              <ActivityIndicator
                size="large"
                color={colors.LOGO_COLOR}
                style={styles.activityIndicator}
              />
            ) : (
              <FarmersListComponent
                data={data}
                cardTouch={onCardTouched}
                onTelephoneTouch={onPhoneTouch}
              />
            )}
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
  activityIndicator: {
    marginVertical: 200,
  },
});

export default memo(Home);
