/* eslint-disable prettier/prettier */
import React, { useState, useRef } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { styles } from './styles';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../assets/colors/colors';
import InputText from '../../components/InputText';
import Button from '../../components/Button';
import LinearGradient from 'react-native-linear-gradient';
import skillsData from '../../assets/data/skillsData';
import { Picker } from '@react-native-picker/picker';

export default function AddSkill({ navigation }) {

  // const [skill, setSkill] = useState('');
  const [knowledge_level, setKnowledge_level] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState();

  const pickerRef = useRef();

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
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedLanguage(itemValue)
                }>
                {skillsData.map((skills) => (
                  <Picker.Item key={skills.id} label={skills.title} value={skills.title} style={styles.selectItemText}/>
                ))}
              </Picker>
            </View>
          </View>
          <View style={styles.inputItemWrapper}>
            <Text style={styles.inputItemTitle}>Nível de conhecimento</Text>
            <InputText
              value={knowledge_level}
              onChangeText={setKnowledge_level}
              placeholder="Digite a nível de conhecimento"
            />
          </View>

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
              onPress={() => Alert.alert('Adicionar Skill')}
            />
          </LinearGradient>
        </View>
      </View>
    </View>
  );
}
