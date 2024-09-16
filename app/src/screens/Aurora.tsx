// ChatScreen.js
import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  CheckBox,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import io, {Socket} from 'socket.io-client';
import Message from '../components/Message';
import {whiteLabelLoad} from '../services/serviceWhitelabel';
import authenticate from '../modules/auth/serviceAuth';
import {globalColors} from '../globalStyle';
import {useNavigation} from '@react-navigation/native';
import aurora from '../assets/aurora.png';

const Aurora = () => {
  const [questions, setQuestions] = useState<string[]>([]);
  const navigation = useNavigation();
  // const [inputMessage, setInputMessage] = useState('');
  const [showOptions, setShowOptions] = useState(false);
  const [list, setList] = useState<string[]>([]);
  const [answers, setAnswers] = useState<number[]>([]);
  const socket = useRef<Socket>();


  // useEffect(() => {
  //   whiteLabelLoad(authenticate(index)).then(item => {
  //     setColors(item.colors);
  //   });
  // });

  const user = {
    name: 'Aurora',
    // photo: 'URL_DA_FOTO_DO_USUARIO', // Substitua pela URL da foto do usuário
  };

  useEffect(() => {
    socket.current = io('http://192.168.14.225:3000');

    socket.current.on('connect', () => {
      console.log('Connected to server');
    });

    socket.current.on('question', (question: string) => {
      setShowOptions(true);
      setTimeout(
        () => setQuestions(prevQuestions => [...prevQuestions, question]),
        1000,
      );
    });
  }, []);

  const handleAnswer = (answer: number) => {
    setAnswers(prevAnswers => [...prevAnswers, answer]);
    socket.current?.emit('answer', answer);
  };

  // const handleCheckboxChange = (index: number) => {
  //   const newSelectedOptions = [...selectedOptions];
  //   newSelectedOptions[index] = newSelectedOptions[index] === 0 ? 1 : 0;
  //   setSelectedOptions(newSelectedOptions);
  // };

  const renderItem = ({item, index}) => (
    <View style={styles.questionContainer}>
      {index <= 3 && (
        <>
          <Message text={item} />
          <Options handleAnswer={handleAnswer} />
        </>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userPhoto}>
          <Image source={aurora} />
        </View>
        <Text style={styles.userName}>{user.name}</Text>
      </View>
      <FlatList
        style={{marginTop: 33}}
        data={questions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
      {answers.length > 3 && (
        <TouchableOpacity
          style={styles.next}
          onPress={() => navigation.navigate('Home')}>
          <Text>{'>'}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

type Callback = {handleAnswer: (answer: number) => void};

const Options = ({handleAnswer}: Callback) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleClick = (answer: number) => {
    handleAnswer(answer);
    setSelectedOption(answer);
  };

  return (
    <View style={styles.optionsContainer}>
      <TouchableOpacity
        style={[
          styles.optionButton,
          selectedOption === 1 && styles.selectedOption,
        ]}
        onPress={() => handleClick(1)}>
        <Text style={styles.optionText}>Sim</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.optionButton,
          selectedOption === 0 && styles.selectedOption,
        ]}
        onPress={() => handleClick(0)}>
        <Text style={styles.optionText}>Não</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalColors.terciary_color,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: globalColors.primary_color,
    height: 70,
    borderBottomEndRadius: 19,
    borderBottomStartRadius: 19,
  },
  userPhoto: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 9,
    marginLeft: 22,
    backgroundColor: 'black',
  },
  userName: {
    marginBottom: 5,
    fontSize: 16,
    color: '#fff',
    fontWeight: 'medium',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginVertical: 10,
    width: 126,
    alignSelf: 'flex-end',
  },
  optionButton: {
    width: 60,
    height: 31,
    backgroundColor: globalColors.secondary_color,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  selectedOption: {
    backgroundColor: globalColors.primary_color, // Cor de fundo diferente para a opção selecionada
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginRight: 10,
  },
  questionContainer: {
    marginBottom: 22,
    paddingHorizontal: 20,
  },
  next: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: globalColors.primary_color,
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 25,
  },
});

export default Aurora;
