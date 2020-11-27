import React, {FC, memo} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Dimensions} from '../../assets/styles';
import colors from '../../assets/styles/colors';
import {IconComponent, TextComponent} from '../atoms';

interface Props {
  name: string;
  phone: string;
  gender: string;
  onCardTouch: () => void;
  onPhoneTouch: () => void;
}

const UserCard: FC<Props> = ({
  name,
  phone,
  gender,
  onCardTouch,
  onPhoneTouch,
}: Props) => {
  const initials: string =
    name.split(' ')[0].charAt(0) + ' ' + name.split(' ')[1].charAt(0);

  return (
    <View style={styles.parent}>
      <TouchableOpacity onPress={onCardTouch}>
        <View style={styles.container}>
          <View style={styles.leftContent}>
            <TextComponent text={initials} textStyle={styles.leftContentText} />
          </View>
          <View style={styles.centerContent}>
            <TextComponent
              text={name}
              textStyle={styles.centerContentTextBold}
            />
            <TextComponent text={gender} textStyle={styles.centerContentText} />
            <TextComponent text={phone} textStyle={styles.centerContentText} />
          </View>
          <View style={styles.rightContent}>
            <TouchableOpacity onPress={onPhoneTouch}>
              <IconComponent
                name="call"
                type="ionicons"
                color={colors.LOGO_COLOR}
                size={24}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 0.8,
    borderBottomColor: colors.SILVER,
  },
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftContent: {
    width: Dimensions.LOGO_SIZE - 20,
    height: Dimensions.LOGO_SIZE - 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.GRAY,
    borderRadius: (Dimensions.LOGO_SIZE - 20) / 2,
  },
  leftContentText: {
    color: colors.WHITE,
    fontWeight: 'bold',
    fontSize: Dimensions.TITLE,
    textTransform: 'uppercase',
  },
  centerContentTextBold: {
    color: colors.LOGO_COLOR,
    fontSize: Dimensions.SUBTITLE,
  },
  centerContentText: {
    marginTop: 5,
    color: colors.BLACK,
    fontSize: Dimensions.FONT_SIZE,
    fontWeight: '100',
  },

  centerContent: {
    width: '60%',
    paddingHorizontal: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  rightContent: {
    paddingRight:15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default memo(UserCard);
