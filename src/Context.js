// Context.js
import React, { createContext, useContext, useState } from 'react';

const UsuariosContext = createContext();
const imgPadrao = require('./assets/imagens/user.png');

export const useUsuariosContext = () => useContext(UsuariosContext);
export const UsuariosProvider = ({ children }) => {

  // Estado com lista de usuários PADRÃO
  const [usuarios, setUsuarios] = useState([
    { id: 1, usuario: 'a', email: 'a', senha: 'a', fabcoins: 0, isAdm: true, img: imgPadrao },
    { id: 2, usuario: 'vinelo', email: 'vinelo@example.com', senha: '123456789', fabcoins: 0, isAdm: false, img: imgPadrao },
    { id: 3, usuario: 'zequinha', email: 'zequinha@example.com', senha: 'doublebiceps', fabcoins: 0, isAdm: true, img: require('./assets/imagens/ze.jpeg') },
    { id: 4, usuario: 'yuri', email: 'yuri@example.com', senha: 'koalaboy', fabcoins: 0, isAdm: true, img: require('./assets/imagens/koalaboy.png') },
    { id: 5, usuario: 'conde', email: 'conde@example.com', senha: 'condeus', fabcoins: 50, isAdm: false, img: imgPadrao },
    { id: 6, usuario: 'ricardo', email: 'ricardo@example.com', senha: 'vegan', fabcoins: 0, isAdm: true, img: require('./assets/imagens/ricardo.jpeg') },
    { id: 7, usuario: 'ferrara', email: 'ferrara@example.com', senha: 'fablab', fabcoins: 0, isAdm: true, img: require('./assets/imagens/ferrara.jpeg') },
    { id: 8, usuario: 'schina', email: 'schina@example.com', senha: 'fablab', fabcoins: 0, isAdm: true, img: require('./assets/imagens/schina.jpeg') },
  ]);

  // Função para atualizar a lista de usuários
  const updateUsuarios = (updatedUsuarios) => {
    setUsuarios(updatedUsuarios);
  };

  // Retorna o provedor de contexto, fornecendo o estado e a função de atualização
  return (
    <UsuariosContext.Provider value={{ usuarios, updateUsuarios }}>
      {children}
    </UsuariosContext.Provider>
  );
};