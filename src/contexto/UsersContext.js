/* eslint-disable prettier/prettier */
import React, { createContext, useEffect, useReducer, useState } from 'react';
import usuarioSkillsData from '../assets/data/usuarioSkillsData';
import knowledge from '../assets/data/knowledge';
import skillsData from '../assets/data/skillsData';
import api from '../services/skillService';

const estadoGlobalInicial = { usuarioSkillsData };

export const UsersContext = createContext({});

const actions = {
  createUser(state, action) {
    const user = action.payload;
    // user.id = Math.random();
    return {
      ...state,
      usuarioSkillsData: [...state.usuarioSkillsData, user], //lista anterior mais o novo usuario
    };
  },

  updateUser(state, action) {
    const updated = action.payload;
    // user.id = Math.random();
    return {
      ...state,
      usuarioSkillsData: state.usuarioSkillsData.map(u => u.id === updated.id ? updated : u), //lista anterior mais o usuario atualizado
    };
  },

  deleteUser(state, action) {
    const user = action.payload;
    //uma das formas de se excluir um usuario da lista é usando filter, que retorna uma novo array, e não mexe/alteras no array antigo.
    return {
      ...state, //neste caso só tem um atributo no estado, mas se houvesse mais, o spred iria perpertuar os valores antigos
      usuarioSkillsData: state.usuarioSkillsData.filter(u => u.id !== user.id), //procurando todos os elementos que são diferentes do id que foi clicado, e só permanece na lista estes elementos diferentes
    };
  },
};

export const UsersProvider = ({ children }) => {
  // const [users, setUsers] = useState(null);

  //OBJETIVO: EVOLUIR O ESTADO ATUAL
  const reducer = (state, action) => {
    // console.warn(action);
    const fn = actions[action.type];
    return fn ? fn(state, action) : state; //para uma dada ação irá retornar o estado atual
  };

  // Essa parte será equivalente a: state.usuarioSkillsData pois o reducer=> state e estadoGlobalInicial=> usuarioSkillsData

  //2 parametros: o proprio estado, e o dispatch que dispara um determinado evento para todos os reducer, neste caso só temos 1.
  //o estado vai representar a lista de usuarios sempre na sua versão mais recente
  // o dispatch chama a função reducer() que tem por objetivo evoluir o estado... pegar o estado atual, e baseado em alguma ação disparada... essa função vai evoluir o estado
  const [state, dispatch] = useReducer(reducer, estadoGlobalInicial);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const obterSkills = async () => {
      try {
        const response = await api.getAllSkill('skill/all');
        setSkills(response.data);
      } catch (error) {
        console.log('Response: ', error);
      }
    };
    obterSkills();
  }, []);

  return (
    <UsersContext.Provider
      value={{
        skillsData,
        skills,
        knowledge,
        state, // essa era a versão inicial --> state: { usuarioSkillsData },
        dispatch,
      }}>
      {children}
    </UsersContext.Provider>
  );
};
