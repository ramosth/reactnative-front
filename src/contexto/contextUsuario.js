/* eslint-disable prettier/prettier */
import React, { createContext, useState } from 'react';

const estadoGlobalInicial = {
  usuario: null,
  login: () => {},
  logout: () => {},
};

export const UsuarioLogado = createContext(estadoGlobalInicial);

export const UsuarioLogadoProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UsuarioLogado.Provider
      value={{
       login: (newUser) => {
        setUser(newUser);
       },
       usuario: user,
        logout: () => {
          setUser(null);
        },
      }}>
      {children}
    </UsuarioLogado.Provider>
  );
};
