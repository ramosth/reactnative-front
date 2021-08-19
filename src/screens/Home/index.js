/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useContext, useEffect, useState } from 'react';
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
import { UsuarioLogado } from '../../contexto/contextUsuario';
import { UsersContext } from '../../contexto/UsersContext';

export default function Home({ navigation }) {

  const { usuario, logout } = useContext(UsuarioLogado);

  const { state, dispatch, skills } = useContext(UsersContext);

  const [usuarioSkill, setUsuarioSkill] = useState([]);

  console.log('skills', skills);

  useEffect(() => {
    const userSkills = (idUser) => {

      var userSkill = [];
      state.usuarioSkillsData.forEach(valor => {
        if (valor.user_id === idUser) {
          userSkill.push(valor);
        }
      });
      setUsuarioSkill(userSkill);
    };
    userSkills(usuario.id);

  }, [state.usuarioSkillsData, usuario]);

  const confirmSkillDelete = (item) => {
    Alert.alert('Deletar Skill', 'Deseja excluir a skill?', [
      {
        text: 'Sim',
        onPress() {
          dispatch({ // o que está dentro das {}, ou seja o objeto, é a action
            type: 'deleteUser',
            payload: item, //o dado/informação que está sendo passado junto com a action
          });
        },
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
            <Image source={{ uri: item.image}} style={styles.skillItemImage} />
          {/* {skillsData.map((sk) => (
            <Image key={sk.id} source={{ uri: (sk.id === item.skill_id ? sk.image : sk.image)}} style={styles.skillItemImage} />
          ))} */}
          <View>
            <Text style={styles.skillItemTitle}>{item.knowledge_level}</Text>
            <Text style={styles.skillItemDescription}>Criado: {item.created_at}</Text>
            <Text style={styles.skillItemDescription}>Atualizado: {item.updated_at === null ? '-' : item.updated_at}</Text>
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
