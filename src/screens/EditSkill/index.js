/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
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
// import { api } from '../services/Api/api';
// import AsyncStorage from '@react-native-async-storage/async-storage';

export default function EditSkill({ navigation, route }) {

 const item = route.params;

 const [knowledge_level, setKnowledge_level] = useState(item.knowledge_level);

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
     <Text style={styles.titlesTitle}>Editar Skill</Text>
    </View>

    {/* Inputs */}
    <View style={styles.inputsWrapper}>
     <View style={styles.inputItemWrapper}>
      <Text style={styles.inputItemTitle}>Nível de conhecimento</Text>
      <InputText
       value={knowledge_level}
       onChangeText={(text) => setKnowledge_level(text)}
       placeholder="Digite o nível de conhecimento"
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
       titulo="Editar skill"
       buttonStyles={[styles.buttonCreateStyles]}
       onPress={() => Alert.alert('Editar Skill')}
      />
     </LinearGradient>
    </View>
   </View>
  </View>
 );
}
