/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useContext, useEffect, useState } from 'react';
import {
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Text,
} from 'react-native';
import { styles } from './styles';
import InputText from '../../components/InputText';
import Button from '../../components/Button';
import LinearGradient from 'react-native-linear-gradient';
import { UsuarioLogado } from '../../contexto/contextUsuario';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // ACESSANDO O CONTEXTO
  const { usuario, login } = useContext(UsuarioLogado);
  console.log('usuario => ', usuario);

  useEffect(() => {
    const recuperarDadosSalvos = async () => {
      const dadoSalvo = await AsyncStorage.getItem('Login');
      // console.log('dado salvo', dadoSalvo);
      if (dadoSalvo) {
        const convertido = JSON.parse(dadoSalvo);
        setEmail(convertido.email);
        setSenha(convertido.senha);
        console.log('dado salvo', convertido);
      }
    };
    recuperarDadosSalvos();
  }, []);

  // const setar = async(value) => {
  //   setEmail(value);
  //   const dadoSalvo = await AsyncStorage.getItem(value);
  //   if (dadoSalvo) {
  //     setSenha(JSON.parse(dadoSalvo).senha);
  //   }
  // };

  const fazerLogin = () => {
    // fazer aqui *** uma requisição a uma API.. que retornaria um objeto usuarioCadastrado, e salvaria como contextoGlobal
    const usuarioCadastrado = {
      id: '1',
      nome: 'Mário',
      email: 'mario@gmail.com',
      idade: 42,
    };
    login(usuarioCadastrado);
    // navigation.navigate('Home'); //não vai mais precisar dessa rota, pois só quem tem acesso a tela de Home é o usuarioCadastrado que fez login.
  };

  // const lembrarSenha = () => {
  //   // AsyncStorage.setItem('Login', JSON.stringify({ email: email, senha: senha })); //salvar um dado -- (chave, valor)
  //   AsyncStorage.setItem('Login', JSON.stringify({ email: email, senha: senha })); //salvar um dado -- (chave, valor)
  // };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <SafeAreaView>
          <View style={styles.headerWrapper}>
            <Image
              source={require('../../assets/images/Icon.png')}
            />
          </View>
        </SafeAreaView>
        {/* Titles */}
        <View style={styles.titlesWrapper}>
          <Text style={styles.titlesSubtitle}>Faça login na sua conta</Text>
          <Text style={styles.titlesTitle}>
            Que bom ver você de novo, insira seus dados abaixo para continuar.
          </Text>
        </View>
        {/* Inputs */}
        <View style={styles.inputsWrapper}>
          <View style={styles.inputItemWrapper}>
            <Text style={styles.inputItemTitle}>Email</Text>
            <InputText
              value={email}
              onChangeText={setEmail}
              placeholder="Digite o email"
              iconName="email-outline"
            />
          </View>
          <View style={styles.inputItemWrapper}>
            <Text style={styles.inputItemTitle}>Senha</Text>
            <InputText
              value={senha}
              onChangeText={setSenha}
              placeholder="Digite a senha"
              iconName="lock-outline"
            />
          </View>
          <View style={styles.buttonForgot}>
            <Button
              titulo="Esqueceu a senha?!"
              buttonStyles={styles.buttonForgotStyles}
              tituloStyles={styles.tituloForgotStyles}
              onPress={() => navigation.navigate('ForgotPassword')} />
          </View>
        </View>
        {/* Button */}
        <LinearGradient
          start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 0.0 }}
          locations={[0, 0.4, 0.7]}
          colors={['#FB832D', '#FC7F36', '#FF774C']}
          style={[styles.buttonLogin, { elevation: 8 }]}>
          <Button
            titulo="Entrar na conta"
            buttonStyles={styles.buttonLoginStyles}
            onPress={fazerLogin} />
        </LinearGradient>
        <View style={[styles.buttonSigIn]}>
          <Button
            path={require('../../assets/images/google.png')}
            titulo="Entrar com conta Google"
            buttonStyles={styles.buttonStyles}
            tituloStyles={styles.tituloStyles} />
        </View>
        <View style={styles.buttonCreate}>
          <Button
            titulo="Cadastre-se"
            buttonStyles={styles.buttonCreateStyles}
            onPress={() => navigation.navigate('CreateAccount')} />
        </View>
      </ScrollView>
    </View>
  );
}
