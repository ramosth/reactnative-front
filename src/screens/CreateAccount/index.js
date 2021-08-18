/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, SafeAreaView, Image, ScrollView, Text, Alert} from 'react-native';
import {styles} from './styles';
import InputText from '../../components/InputText';
import Button from '../../components/Button';
import LinearGradient from 'react-native-linear-gradient';
// import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CreateAccount({navigation}) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaConfirma, setSenhaConfirma] = useState('');
  const chamaLogin = () => {
    Alert.alert('Cadastro Efetuado', 'Usuário registrado com sucesso!');
    navigation.navigate('Login');
  };

  // useEffect(() => {
  //   const recuperarDadosSalvos = async () => {
  //     const dadoSalvo = await AsyncStorage.getItem('Login');
  //     console.log('dado salvo', dadoSalvo);
  //     if (dadoSalvo) {
  //       const convertido = JSON.parse(dadoSalvo);
  //       setEmail(convertido.email);
  //       setSenha(convertido.senha);
  //       console.log('dado salvo cadastro', convertido);
  //     }
  //   };
  //   recuperarDadosSalvos();
  // }, []);

  // const {usuario} = useContext(UsuarioLogado);
  // console.log('no cadastro: ', usuario);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <SafeAreaView>
          <View style={styles.headerWrapper}>
            <Image source={require('../../assets/images/Icon.png')} />
          </View>
        </SafeAreaView>
        {/* Titles */}
        <View style={styles.titlesWrapper}>
          <Text style={styles.titlesSubtitle}>Cadastre uma conta</Text>
          <Text style={styles.titlesTitle}>
            Bem-vindo, digite seus dados, para efetuar seu cadastro
          </Text>
        </View>
        {/* Inputs */}
        <View style={styles.inputsWrapper}>
          <View style={styles.inputItemWrapper}>
            <Text style={styles.inputItemTitle}>Nome</Text>
            <InputText
              value={nome}
              onChangeText={setNome}
              placeholder="Digite seu nome"
              iconName="email-outline"
            />
          </View>
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
          <View style={styles.inputItemWrapper}>
            <Text style={styles.inputItemTitle}>Confirme sua senha</Text>
            <InputText
              value={senhaConfirma}
              onChangeText={setSenhaConfirma}
              placeholder="Digite a senha novamente"
              iconName="lock-outline"
            />
          </View>
          <View style={styles.buttonForgot}>
            <Button
              titulo="Esqueceu a senha?!"
              buttonStyles={[styles.buttonForgotStyles]}
              tituloStyles={[styles.tituloForgotStyles]}
              onPress={() => navigation.navigate('ForgotPassword')}
            />
          </View>
        </View>
        {/* Button */}
        <LinearGradient
          start={{x: 0.0, y: 0.25}}
          end={{x: 0.5, y: 1.0}}
          locations={[0, 0.5, 0.6]}
          colors={['#FB832D', '#FC7F36', '#FF774C']}
          style={[styles.buttonCreate, {elevation: 8}]}>
          <Button
            titulo="Create an account"
            buttonStyles={[styles.buttonCreateStyles]}
            onPress={() => chamaLogin()}
          />
        </LinearGradient>
        <View style={[styles.buttonSigIn]}>
          <Button
            path={require('../../assets/images/google.png')}
            titulo="Sign-in with Google"
            buttonStyles={styles.buttonStyles}
            tituloStyles={styles.tituloStyles}
          />
        </View>
        <View style={styles.buttonLogin}>
          <Button
            titulo="Login to my account"
            buttonStyles={styles.buttonLoginStyles}
            tituloStyles={styles.tituloLoginStyles}
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </ScrollView>
    </View>
  );
}
