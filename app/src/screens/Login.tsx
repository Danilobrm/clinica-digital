import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Socket, io} from 'socket.io-client';
import welcome_bg from '../assets/welcome_bg.png';
import authenticate from '../modules/auth/serviceAuth';
import {whiteLabelLoad} from '../services/serviceWhitelabel';
import {globalStyle, setGlobalColors} from '../globalStyle';
// import { globalStyle } from '../globalStyle';

const Login = () => {
  // const {setColors} = useGlobalStyles();
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  // const ipdanilo = '192.168.1.22';
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

  const auth = (system_code: string) => {
    // console.log();
    const index = Number(system_code);
    // whiteLabelLoad(authenticate(index)).then(item => {
    //   setColors(item.colors);
    // });
    setGlobalColors(index);
    navigation.navigate('Aurora');
  };

  return (
    <View style={styles.container}>
      <Image source={welcome_bg} style={styles.bg} />

      <View style={styles.login}>
        <Text style={{fontSize: 28, fontWeight: '700', color: '#fff'}}>
          Atendimentos de forma rápida e prática!
        </Text>
      </View>
      <View style={styles.formView}>
        <Text style={styles.loginHeading}>Faça login com sua conta</Text>
        <View style={styles.form}>
          <TextInput
            maxLength={40}
            style={styles.input}
            placeholder="Usuário"
            placeholderTextColor={'#a9a9a9'}
          />
          <TextInput
            maxLength={40}
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor={'#a9a9a9'}
            onChangeText={password => setPassword(password)}
            value={password}
            secureTextEntry
            // textContentType="password"
          />
        </View>
        <Text
          style={{
            display: 'flex',
            marginRight: 17,
            alignSelf: 'flex-end',
            color: '#fff',
          }}>
          Esqueceu sua senha?
        </Text>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => auth(password)}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },
  form: {
    display: 'flex',
    gap: 22,
    marginBottom: 4,
  },
  input: {
    // borderWidth: 1,
    // borderColor: 'red',
    width: 243,
    height: 56,
    borderRadius: 24,
    backgroundColor: '#D9D9D9',
    paddingLeft: 22,
    fontSize: 16,
  },
  bg: {
    position: 'absolute',
    flex: 1,
    width: '100%',
    height: '100%',
    margin: 'auto',
  },
  login: {
    marginTop: 122,
    width: 255,
  },
  loginButton: {
    width: 243,
    height: 56,
    borderRadius: 24,
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
    margin: 'auto',
  },
  loginText: {
    fontSize: 21,
    fontWeight: '800',
    color: '#A9A9A9',
  },
  formView: {
    marginTop: 45,
    display: 'flex',
    alignItems: 'center',
  },
  loginHeading: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 6,
  },
});

export default Login;
