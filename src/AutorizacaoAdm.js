import React, { useState, useEffect } from "react";
import estilos from "./style/estilos";
import Header from "./Header";
import { useUsuariosContext } from "./Context";
import {
  View,
  TextInput,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import Checkbox from 'expo-checkbox';

function Administracao({ navigation, route }) {
  const { usuarios, updateUsuarios } = useUsuariosContext();

  // Obtém informações do usuário logado e o array de usuários
  const { usuario, usuarios: usuariosRoute } = route.params;

  // Estados locais para pesquisa, filtro e controle do checkbox
  const [searchTerm, setSearchTerm] = useState("");
  const [usuarioFiltro, setUsuarioFiltro] = useState([]);
  const [isChecked, setChecked] = useState(false);

  // Exibe todos os usuários ao entrar na tela
  useEffect(() => {
    setUsuarioFiltro(usuarios);
  }, [usuarios]);

  // Função para aplicar filtro com base na pesquisa
  const setFiltro = () => {
    const filtro = usuarios.filter((user) => {
      const emailIncludes = user.email.toUpperCase().includes(searchTerm.toUpperCase());
      const usuarioIncludes = user.usuario.toUpperCase().includes(searchTerm.toUpperCase());
      return emailIncludes || usuarioIncludes;
    });
    setUsuarioFiltro(filtro);
  };

  // Função para lidar com a seleção ou não o checkbox
  const handleCheckBox = (userId) => {
    const updatedUsuarios = usuarioFiltro.map((user) =>
      user.id === userId ? { ...user, selected: !user.selected } : user
    );
    setUsuarioFiltro(updatedUsuarios);
  };

  // Função para depositar os 50 fabcoins
  const confirmar = () => {
    const usuariosSelecionados = usuarioFiltro.filter((user) => user.selected);
    // se tiver usuários selecionados, ele faz um map e soma os users selecionados, e verifica o id.
    if (usuariosSelecionados.length > 0) {
      const updatedUsuarios = usuarios.map((user) =>
        usuariosSelecionados.some((selectedUser) => selectedUser.id === user.id)
          ? { ...user, fabcoins: user.fabcoins + 50 }
          : user
      );
      // Atualiza o estado global de usuários
      updateUsuarios(updatedUsuarios);
      // Limpa a seleção dos checkbox
      setChecked(false);
    }
  };

  return (
    <View style={estilos.AutorizacaoAdmStyle.container}>
      <Header navigation={navigation} usuario={usuario} aut={1}/>

      <View style={estilos.AutorizacaoAdmStyle.infoContainer}>

        <View style={estilos.AutorizacaoAdmStyle.rowContainer}>
          <TextInput
            style={estilos.AutorizacaoAdmStyle.textInput}
            placeholder="Pesquisar por e-mail ou usuário"
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
          />
          <TouchableOpacity
            style={estilos.AutorizacaoAdmStyle.lupa}
            onPress={setFiltro}
          >
            <Image
              resizeMode="cover"
              style={estilos.AutorizacaoAdmStyle.lupa}
              source={require('./assets/imagens/lupa.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={estilos.AutorizacaoAdmStyle.scrollViewArea}>
          <ScrollView style={estilos.AutorizacaoAdmStyle.scrollView}>
            {usuarioFiltro.length > 0 ? (
              usuarioFiltro.map((user, idx) => (
                <View style={estilos.AutorizacaoAdmStyle.grid} key={idx}>
                  <View style={estilos.AutorizacaoAdmStyle.row}>
                    <View style={estilos.AutorizacaoAdmStyle.profileBorder}>
                      <Image
                        style={estilos.AutorizacaoAdmStyle.profileImage}
                        resizeMode="cover"
                        source={user.img}
                      />
                    </View>

                    <View style={estilos.AutorizacaoAdmStyle.info}>
                      <Text style={estilos.AutorizacaoAdmStyle.name}>
                        {user.usuario.charAt(0).toUpperCase() + user.usuario.slice(1)}
                      </Text>
                      <Text style={estilos.AutorizacaoAdmStyle.emailText}>{user.email}</Text>
                      <View style={estilos.AutorizacaoAdmStyle.row2}>
                        <Image
                          style={estilos.AutorizacaoAdmStyle.fabcoin}
                          resizeMode="contain"
                          source={require('./assets/imagens/fabcoins.png')}
                        />
                        <Text style={estilos.AutorizacaoAdmStyle.fabcoinText}>{user.fabcoins} $</Text>
                      </View>
                    </View>

                    <Checkbox
                      value={user.selected}
                      onValueChange={() => handleCheckBox(user.id)}
                    />
                  </View>
                </View>
              ))
            ) : (
              // Mensagem exibida quando nenhum usuário é encontrado
              <Text>Nenhum usuário encontrado.</Text>
            )}
          </ScrollView>
        </View>
        <TouchableHighlight onPress={confirmar}>
          <Text>CONFIRMAR</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

export default Administracao;
