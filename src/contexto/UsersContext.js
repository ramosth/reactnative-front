/* eslint-disable prettier/prettier */
import React, { createContext, useReducer } from 'react';
import usuarioSkillsData from '../assets/data/usuarioSkillsData';

const estadoGlobalInicial = {usuarioSkillsData};

export const UsersContext = createContext(estadoGlobalInicial);

export const UsersProvider = ({ children }) => {
  // const [users, setUsers] = useState(null);

  const reducer = (state, action) => {
    console.warn(action);
  };

  useReducer(reducer, estadoGlobalInicial);

  return (
    <UsersContext.Provider
      value={{
        state: { usuarioSkillsData },
      //  login: (newUser) => {
      //   setUser(newUser);
      //  },
        // logout: () => {
        //   setUser(null);
        // },
      }}>
      {children}
    </UsersContext.Provider>
  );
};
