/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import {
  View,
  SafeAreaView,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { styles } from './styles';
// import skillsData from '../../assets/data/skillsData';
import usuarioSkillsData from '../../assets/data/usuarioSkillsData';
import { UsuarioLogado } from '../../contexto/contextUsuario';
// import { api } from '../services/Api/api';
// import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({ navigation }) {

  const { usuario, logout } = React.useContext(UsuarioLogado);

  const [usuarioSkill, setUsuarioSkill] = useState([]);
  // const [usuarioSkillImage, setUsuarioSkillImage] = useState([]);

  useEffect(() => {
    const userSkills = (idUser) => {

      var userSkill = [];
      usuarioSkillsData.forEach(valor => {
        if (valor.user_id === idUser) {
          userSkill.push(valor);
        }
      });
      setUsuarioSkill(userSkill);
    };
    userSkills(usuario.id);

  }, [usuario]);

  // useEffect(() => {
  //   const userSkillsImage = () => {

  //     var usersSkillImage = [];
  //     skillsData.forEach((skills) => {
  //       usuarioSkill.forEach((us) => {
  //         if (skills.id === us.skill_id) {
  //           console.log('oi', us.skill_id);
  //           const userSkillImage = {
  //             id: us.id,
  //             user_id: us.user_id,
  //             skill_id: us.skill_id,
  //             knowledge_level: us.knowledge_level,
  //             created_at: us.created_at,
  //             updated_at: us.updated_at,
  //             image: skills.image,
  //           };
  //           usersSkillImage.push(userSkillImage);
  //         }
  //       });
  //     });
  //     console.log('usersImage', usersSkillImage);
  //     setUsuarioSkillImage(res => [...res, usersSkillImage]);
  //   };

  //   userSkillsImage();

  // }, [usuarioSkill]);

  const confirmSkillDelete = (item) => {
    Alert.alert('Deletar Skill', 'Deseja excluir a skill?', [
      {
        text: 'Sim',
        onPress() { console.warn('delete ' + item.id); },
      },
      {
        text: 'Não',
      },
    ]);
  };

  const renderSkillItem = ({ item }) => {
    return (
      <View
        style={[
          styles.skillItemWrapper,
          {
            backgroundColor: '#FFF',
            borderColor: '#f5b067',
            borderWidth: 1,
          },
        ]}>
        <View style={styles.skillsItemWrapper}>
          <Image source={{ uri: item.image }} style={styles.skillItemImage} />
          <View>
            <Text style={styles.skillItemTitle}>{item.knowledge_level}</Text>
            <Text style={styles.skillItemDescription}>Criado: {item.created_at}</Text>
            <Text style={styles.skillItemDescription}>Atualizado: {item.updated_at === null ? '-' : item.updated_at}</Text>
            {/* <Text style={styles.skillItemTitle}>{item.title}</Text>
            <Text style={styles.skillItemDescription}>{item.description}</Text>
            <Text style={styles.skillItemDescription}>Versão: {item.version}</Text> */}
          </View>
          <View style={styles.skillItemImageIcons}>
            <TouchableOpacity style={styles.skillItemImageIcon} onPress={() => navigation.navigate('EditSkill', item)}>
              <Image source={require('../../assets/images/icon-edit.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.skillItemImageIcon} onPress={() => confirmSkillDelete(item)}>
              <Image source={require('../../assets/images/icon-delete.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View showsVerticalScrollIndicator={false}>
        {/* Header */}
        <SafeAreaView>
          <View style={styles.headerWrapper}>
            {/* Texto */}
            <View style={styles.perfil}>
              <Text style={styles.perfilText}>Bem-vindo, {usuario.nome}</Text>
            </View>
            <TouchableOpacity onPress={() => logout()}>
              <View style={styles.headerRight}>
                <Image
                  source={require('../../assets/images/profile.png')}
                  style={styles.profileImage}
                />
              </View>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
        {/* Titles */}
        <View style={styles.titlesWrapper}>
          <Text style={styles.titlesTitle}>Skills</Text>
          <TouchableOpacity style={styles.skillItemIconPlus} onPress={() => navigation.navigate('AddSkill')}>
            <Text style={styles.skillItemIconPlusText}>+</Text>
          </TouchableOpacity>
        </View>
        {/* Skills */}
        <View style={styles.skillsWrapper}>
          <FlatList
            data={usuarioSkill}
            renderItem={renderSkillItem}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
}
