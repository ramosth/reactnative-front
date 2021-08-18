/* eslint-disable prettier/prettier */
import React, { useState, useRef, useContext } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import { styles } from './styles';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../assets/colors/colors';
import Button from '../../components/Button';
import LinearGradient from 'react-native-linear-gradient';
import skillsData from '../../assets/data/skillsData';
import { Picker } from '@react-native-picker/picker';
import { UsersContext } from '../../contexto/UsersContext';
import { UsuarioLogado } from '../../contexto/contextUsuario';

export const dataAtual = () => {
  // Obtém a data/hora atual
  var data = new Date();

  // Guarda cada pedaço em uma variável
  var dia = data.getDate();           // 1-31
  // var dia_sem = data.getDay();            // 0-6 (zero=domingo)
  var mes = data.getMonth();          // 0-11 (zero=janeiro)
  // var ano2 = data.getYear();           // 2 dígitos
  var ano4 = data.getFullYear();       // 4 dígitos
  var hora = data.getHours();          // 0-23
  var min = data.getMinutes();        // 0-59
  var seg = data.getSeconds();        // 0-59
  // var mseg = data.getMilliseconds();   // 0-999
  // var tz = data.getTimezoneOffset(); // em minutos

  // Formata a data e a hora (note o mês + 1)
  var str_data = dia + '/' + (mes + 1) + '/' + ano4;
  var str_hora = hora + ':' + min + ':' + seg;

  return (str_data + ' ' + str_hora);
};

export default function AddSkill({ navigation }) {

  const { usuario } = useContext(UsuarioLogado);

  const [user, setUser] = useState({
    id: Math.random(),
    user_id: usuario.id,
    skill_id: null,
    knowledge_level: null,
    created_at: dataAtual(),
    updated_at: null,
  });
  const [knowledge_level, setKnowledge_level] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState();

  const pickerRef = useRef();

  const { dispatch, knowledge } = useContext(UsersContext);
  // console.warn(knowledge);

  const handleConhecimento = (nome) => {
    setKnowledge_level(nome);
    setUser({
      ...user,
      knowledge_level: nome,
    });
  };

  const handleSkill = (nome) => {
    setSelectedLanguage(nome);
    setUser({
      ...user,
      skill_id: nome,
    });
  };

  return (
    <View style={styles.container}>
      <View showsVerticalScrollIndicator={false}>
        {/* Header */}
        <SafeAreaView>
          <View style={styles.headerWrapper}>
            {/* Texto */}
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Feather name="arrow-left" size={30} color={colors.textDark} />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
        {/* Titles */}
        <View style={styles.titlesWrapper}>
          <Text style={styles.titlesTitle}>Adicionar Skills</Text>
        </View>

        {/* Inputs */}
        <View style={styles.inputsWrapper}>
          <View style={styles.inputItemWrapper}>
            <Text style={styles.inputItemTitle}>Escolha a Skill</Text>
            <View style={styles.selectItem}>
              <Picker
                ref={pickerRef}
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) => handleSkill(itemValue)}
              >
                {skillsData.map((skills) => (
                  <Picker.Item key={skills} label={skills.title} value={skills.id} style={styles.selectItemText} />
                ))}
              </Picker>
            </View>
          </View>
          <View style={styles.inputItemWrapper}>
            <Text style={styles.inputItemTitle}>Nível de conhecimento</Text>
            <View style={styles.selectItem}>
              <Picker
                ref={pickerRef}
                selectedValue={knowledge_level}
                onValueChange={(itemValue, itemIndex) => handleConhecimento(itemValue)}
              >
                {knowledge.map((know) => (
                  <Picker.Item key={know} label={know} value={know} style={styles.selectItemText} />
                ))}
              </Picker>
            </View>
          </View>
          {/* <View style={styles.inputItemWrapper}>
            <Text style={styles.inputItemTitle}>Nível de conhecimento</Text>
            <InputText
              value={knowledge_level}
              onChangeText={nome => handleConhecimento(nome)}
              placeholder="Digite a nível de conhecimento"
            />
          </View> */}

          {/* Button */}
          <LinearGradient
            start={{ x: 0.0, y: 0.25 }}
            end={{ x: 0.5, y: 1.0 }}
            locations={[0, 0.5, 0.6]}
            colors={['#FB832D', '#FC7F36', '#FF774C']}
            style={styles.buttonCreate}>
            <Button
              titulo="Adicionar skill"
              buttonStyles={[styles.buttonCreateStyles]}
              onPress={() => {
                dispatch({
                  type: 'createUser',
                  payload: user,
                });
                navigation.goBack();
                // console.warn(user);
              }}
            />
          </LinearGradient>
        </View>
      </View>
    </View>
  );
}
