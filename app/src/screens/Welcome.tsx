import React, {useEffect, useRef} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Socket, io} from 'socket.io-client';
import welcome_bg from '../assets/welcome_bg.png';

const Welcome = () => {
  const navigation = useNavigation();
  // const ipdanilo = '192.168.1.23';
  // const socket = useRef<Socket>();

  // useEffect(() => {
  //   socket.current = io(`http://${ipdanilo}:3000`);

  //   socket.current.on('connect', () => {
  //     console.log('Connected to server');
  //   });

  //   socket.current.on('question', question => {
  //     console.log(question);
  //   });
  // }, []);

  return (
    <View style={styles.container}>
      <Image source={welcome_bg} style={styles.bg} />
      <View style={styles.welcome}>
        <Text style={{fontSize: 36, fontWeight: '700', color: '#fff'}}>
          Bem vindo,
        </Text>
        <Text style={{fontSize: 30, fontWeight: '700', color: '#fff'}}>
          a Clinica Digital do futuro!
        </Text>
      </View>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    // borderWidth: 1,
    // borderColor: 'red',
  },
  bg: {
    position: 'absolute',
    flex: 1,
    width: '100%',
    height: '100%',
    margin: 'auto',
  },
  welcome: {
    marginTop: 115,
    marginLeft: 39,
    width: 246,
  },
  loginButton: {
    width: 243,
    height: 56,
    borderRadius: 24,
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 214,
    margin: 'auto',
  },
  loginText: {
    fontSize: 21,
    fontWeight: '800',
    color: '#A9A9A9',
  },
});

export default Welcome;
