import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {globalColors} from '../globalStyle';
import {useNavigation} from '@react-navigation/native';

// import { Container } from './styles';

const Menu = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.menu}>
      <TouchableOpacity
        style={styles.home}
        onPress={() => navigation.navigate('Home')}
      />

      <View style={styles.user} />
      <View style={styles.config} />
    </View>
  );
};
const styles = StyleSheet.create({
  menu: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 88,
    backgroundColor: globalColors.primary_color,
    bottom: 0,
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
  },
  home: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: globalColors.terciary_color,
  },
  user: {
    width: 60,
    height: 60,
    backgroundColor: globalColors.terciary_color,
    marginHorizontal: 75,
    borderRadius: 50,
  },
  config: {
    width: 60,
    height: 60,
    backgroundColor: globalColors.terciary_color,
    borderRadius: 50,
  },
});

export default Menu;
