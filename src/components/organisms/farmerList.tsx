import React, {FC, memo} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {UserCard} from '../molecules';

interface Props {
  data: Array<{name: string; phone: string; gender: string}>;
  cardTouch: () => void;
  onTelephoneTouch: () => void;
}

const FarmerListComponent: FC<Props> = ({
  data,
  cardTouch,
  onTelephoneTouch,
}: Props) => {
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item.phone}
        renderItem={(item) => (
          <UserCard
            name={item.item.name}
            gender={item.item.gender}
            phone={item.item.phone}
            onCardTouch={cardTouch}
            onPhoneTouch={onTelephoneTouch}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingBottom: 50,
  },
});

export default memo(FarmerListComponent);
