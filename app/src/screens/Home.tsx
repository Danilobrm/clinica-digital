import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Socket, io} from 'socket.io-client';
import welcome_bg from '../assets/welcome_bg.png';
import Header from '../components/Header';
import Menu from '../components/Menu';
import {globalColors} from '../globalStyle';
import aurora from '../assets/aurora.png';
import { Image } from 'react-native';
// import {useGlobalStyles} from '../GlobalStylesContext';

const Home = () => {
  const navigation = useNavigation();
  console.log('aa', globalColors);
  // const index = Number(system_code);

  // useEffect(() => {
  //   whiteLabelLoad(authenticate(index)).then(item => {
  //     setglobalColors(item.globalColors);
  //   });
  // });

  return (
    <View style={styles.container}>
      <Header />
      <TouchableOpacity
        style={styles.agendar}
        onPress={() => navigation.navigate('Schedule')}>
        <Text>Agendar Atendimento</Text>
      </TouchableOpacity>
      <View style={styles.rowBtns}>
        <TouchableOpacity style={styles.button}>
          <Text>Histórico</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Especialidades</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.agendamentos}>
        <Text>Agendar Atendimento</Text>
      </View>
      <View style={styles.auroraTab}>
        <View style={styles.auroraTabRow}>
          <Text style={styles.auroraTabText}>Dúvidas? Pergunte a Aurora!</Text>
        </View>
        <View style={styles.pic}>
          <Image source={aurora} />
        </View>
      </View>
      <Menu />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },
  agendar: {
    height: 141,
    width: '90%',
    marginTop: 21,
    borderRadius: 19,
    display: 'flex',
    backgroundColor: globalColors.secondary_color,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '45%',
    height: 84,
    backgroundColor: globalColors.primary_color,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowBtns: {
    display: 'flex',
    width: '90%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  agendamentos: {
    backgroundColor: globalColors.secondary_color,
    height: 206,
    width: '90%',
    marginTop: 28,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
  },
  auroraTab: {
    height: 37,
    backgroundColor: globalColors.secondary_color,
    borderRadius: 27,
    marginTop: 28,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
  },
  auroraTabRow: {
    width: '80%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pic: {
    alignSelf: 'center',
    width: 66,
    height: 66,
    backgroundColor: 'white',
    borderRadius: 50,
    borderWidth: 3,
    borderColor: globalColors.primary_color,
  },
  auroraTabText: {fontSize: 15, color: globalColors.primary_color},
});

export default Home;
