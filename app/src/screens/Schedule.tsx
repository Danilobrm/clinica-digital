import React, {useEffect, useRef, useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Header from '../components/Header';
import Menu from '../components/Menu';
import {SelectList} from 'react-native-dropdown-select-list';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {CheckBox} from 'react-native-elements';
import {globalColors} from '../globalStyle';
// import {globalColors} from '../globalStyle';

const Schedule = () => {
  const [selected, setSelected] = React.useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState('00/00/0000');
  const [time, setTime] = useState('00:00');
  const [checked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked(!checked);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    setDate(formatDate(date));
    hideDatePicker();
  };
  const data = [
    {key: 'Cardiologia', value: 'cardiologia'},
    {key: 'Dermatologia', value: 'dermatologia'},
    {key: 'Pediatria', value: 'pediatria'},
    {key: 'Ortopedia', value: 'ortopedia'},
    {key: 'Ginecologia', value: 'ginecologia'},
  ];
  const navigation = useNavigation();

  const formatDate = date => {
    // Obtém o dia, mês e ano do objeto Date
    const day = date.getDate().toString().padStart(2, '0'); // Dia com dois dígitos (01 a 31)
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Mês com dois dígitos (01 a 12)
    const year = date.getFullYear(); // Ano com quatro dígitos

    // Retorna a data formatada
    return `${day}/${month}/${year}`;
  };

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.heading}>
        Agendar uma consulta nunca foi tão fácil!
      </Text>
      <Text style={styles.steps}>Primeiro, selecione uma especialidade:</Text>
      <SelectList
        setSelected={(val: string) => setSelected(val)}
        data={data}
        save="value"
        search={false}
        boxStyles={styles.dropdown}
        dropdownStyles={styles.dropdownList}
        placeholder="Selecionar"
        inputStyles={styles.placeholder}
      />
      <Text style={styles.steps}>Defina a data e horário do atendimento:</Text>
      <View style={styles.datetime}>
        <TouchableOpacity onPress={showDatePicker} style={styles.datePicker}>
          <Text style={styles.text}>{date}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={showDatePicker} style={styles.datePicker}>
          <Text style={styles.text}>{time}</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.datetimeLabel}>Quero ser atendido agora</Text>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <Text style={styles.steps}>
        Adicionar arquivos, exames ou fotos para mostrar ao seu médico?
      </Text>
      <TouchableOpacity style={styles.anexar}>
        <Text style={styles.anexarText}>Anexar</Text>
      </TouchableOpacity>
      <Text style={styles.steps}>
        Faça uma breve descrição do motivo da sua consulta:
      </Text>
      <View style={styles.descricao}>
        {/* <TextInput style={{paddingLeft: 15}} /> */}
        <Text style={styles.inputText}>Digite aqui...</Text>
      </View>
      <View style={styles.termos}>
        <CheckBox checked={checked} onPress={toggleCheckbox} />
        <Text style={styles.termosText}>
          Li e estou de acordo com o Termo de Uso e Política de Privacidade{' '}
        </Text>
      </View>
      <View style={styles.btnsEnd}>
        <TouchableOpacity onPress={showDatePicker} style={styles.btnEnd}>
          <Text>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log('marcado')}
          style={styles.btnEnd}>
          <Text>Marcar</Text>
        </TouchableOpacity>
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
    backgroundColor: globalColors.third_color,
  },
  text: {
    color: globalColors.primary_color,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'semibold',
    width: 266,
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 15,
    color: globalColors.primary_color,
  },
  steps: {
    color: globalColors.primary_color,
    fontWeight: 'medium',
    fontSize: 14,
    marginBottom: 5,
  },
  descricao: {
    width: '90%',
    height: 140,
    backgroundColor: globalColors.secondary_color,
    borderRadius: 22,
  },
  inputText: {
    color: globalColors.primary_color,
    position: 'absolute',
    padding: 15,
  },
  dropdown: {
    borderRadius: 22,
    width: '90%',
    height: 30,
    backgroundColor: globalColors.secondary_color,
    display: 'flex',
    alignItems: 'center',
    marginBottom: 15,
    borderColor: 'transparent',
  },
  dropdownList: {
    borderRadius: 22,
    width: '90%',
    position: 'absolute',
    top: 22,
    backgroundColor: globalColors.secondary_color,
    zIndex: 1,
    borderColor: 'transparent',
  },
  placeholder: {
    height: 30,
    marginTop: 0,
    justifyContent: 'center',
    display: 'flex',
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: globalColors.primary_color,
  },
  datetime: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 5,
  },
  datetimeLabel: {
    fontSize: 12,
    color: globalColors.primary_color,
    marginBottom: 15,
  },
  datePicker: {
    width: 117,
    height: 30,
    backgroundColor: globalColors.secondary_color,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 22,
    marginRight: 13,
  },
  anexar: {
    width: '90%',
    backgroundColor: globalColors.secondary_color,
    height: 30,
    borderRadius: 22,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  anexarText: {
    fontSize: 16,
    color: globalColors.primary_color,
  },
  termos: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
  },
  termosText: {
    width: 264,
    color: globalColors.primary_color,
  },
  btnsEnd: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnEnd: {
    width: 117,
    height: 30,
    backgroundColor: globalColors.secondary_color,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 22,
    marginRight: 13,
  },
});

export default Schedule;
