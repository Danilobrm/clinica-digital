import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {globalColors, logo} from '../globalStyle';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.logo}>
        <Image source={logo} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 70,
    borderBottomEndRadius: 19,
    borderBottomStartRadius: 19,
    backgroundColor: globalColors.primary_color,
  },
  logo: {
    width: 163,
    height: 42,
    marginLeft: 17.56,
  },
});

export default Header;
