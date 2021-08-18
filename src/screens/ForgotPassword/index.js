/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { styles } from './styles';
import InputText from '../../components/InputText';
import Button from '../../components/Button';
import LinearGradient from 'react-native-linear-gradient';

export default function ForgotPassward({ navigation }) {
  const [email, setEmail] = useState('');
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <SafeAreaView>
          <View style={styles.headerWrapper}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.headerLink}>
              <Text style={styles.headerTextLink}>Voltar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
              <Image
                source={require('../../assets/images/Icon.png')}
                style={styles.headerLogo}
              />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
        {/* Titles */}
        <View style={styles.titlesWrapper}>
          <Text style={styles.titlesSubtitle}>Esqueci minha senha</Text>
          <Text style={styles.titlesTitle}>
            Digite seu endereço de email que enviaremos uma senha provisória para você.
          </Text>
        </View>
        {/* Inputs */}
        <View style={styles.inputsWrapper}>
          <View style={styles.inputItemWrapper}>
            <Text style={styles.inputItemTitle}>Email</Text>
            <InputText
              value={email}
              onChangeText={setEmail}
              placeholder="Digite seu email"
              iconName="email-outline"
            />
          </View>
        </View>
        {/* Button */}
        <LinearGradient
          start={{ x: 0.0, y: 0.0 }} end={{ x: 0.5, y: 1.0 }}
          locations={[0, 0.5, 0.6]}
          colors={['#FB832D', '#FC7F36', '#FF774C']}
          style={[styles.buttonCreate, { elevation: 8 }]}>
          <Button
            titulo="Enviar email"
            buttonStyles={[styles.buttonCreateStyles]}
            onPress={() => Alert.alert('Recuperar senha', 'enviaremos nova senha para seu email')} />
        </LinearGradient>
      </ScrollView>
    </View>
  );
}
