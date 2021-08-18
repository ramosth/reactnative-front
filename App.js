/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Rotas } from './src/navigation/Rotas';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import colors from './src/assets/colors/colors';
import { UsuarioLogadoProvider } from './src/contexto/contextUsuario';
import SplashScreen from 'react-native-splash-screen';

export default function App() {

  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaProvider style={{ backgroundColor: colors.backgroundColor }}>
      <NavigationContainer>
        <UsuarioLogadoProvider>
          <Rotas />
        </UsuarioLogadoProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
