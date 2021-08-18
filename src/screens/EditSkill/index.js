/* eslint-disable prettier/prettier */
import React, { useContext, useRef, useState } from 'react';
import {
 View,
 SafeAreaView,
 Text,
 TouchableOpacity,
} from 'react-native';
import { styles } from './styles';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../assets/colors/colors';
import { Picker } from '@react-native-picker/picker';
import Button from '../../components/Button';
import LinearGradient from 'react-native-linear-gradient';
import { UsersContext } from '../../contexto/UsersContext';
import { dataAtual } from '../../screens/AddSkill';

export default function EditSkill({ navigation, route }) {

 const item = route.params;
 // console.warn(item);
 const [knowledge_level, setKnowledge_level] = useState(item.knowledge_level);

 const { dispatch, knowledge } = useContext(UsersContext);
 const pickerRef = useRef();

 const [user, setUser] = useState({
  id: item.id,
  user_id: item.user_id,
  skill_id: item.skill_id,
  knowledge_level: item.knowledge_level,
  created_at: item.created_at,
  updated_at: dataAtual(),
 });

 const handleConhecimento = (nome) => {
  setKnowledge_level(nome);
  setUser({
   ...user,
   knowledge_level: nome,
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
     <Text style={styles.titlesTitle}>Editar Skill</Text>
    </View>

    {/* Inputs */}
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
      onPress={() => {
       dispatch({
        type: 'updateUser',
        payload: user,
       });
       navigation.goBack();
       console.warn(user);
      }}
     />
    </LinearGradient>
   </View>
  </View>
 );
}
