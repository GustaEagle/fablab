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

function AutorizacaoAdm({ navigation, route }) {
  // Obtendo informações do contexto de usuários
  const { usuarios, updateUsuarios } = useUsuariosContext();

  // Obtendo informações do usuário logado e usuários da rota
  const { usuario, usuarios: usuariosRoute } = route.params;

  // Estados locais para pesquisa, filtro e controle do checkbox
  const [searchTerm, setSearchTerm] = useState("");
  const [usuarioFiltro, setUsuarioFiltro] = useState([]);
  const [isChecked, setChecked] = useState(false);

  // Efeito para exibir todos os usuários ao entrar na tela
  useEffect(() => {
    setUsuarioFiltro(usuarios);
  }, [usuarios]);

  // Função para aplicar filtro com base no termo de pesquisa
  const setFiltro = () => {
    const filtro = usuarios.filter((user) => {
      const emailIncludes = user.email.toUpperCase().includes(searchTerm.toUpperCase());
      const usuarioIncludes = user.usuario.toUpperCase().includes(searchTerm.toUpperCase());
      return emailIncludes || usuarioIncludes;
    });
    setUsuarioFiltro(filtro);
  };

  // Função para lidar com a selecionar ou não o checkbox
  const handleCheckBox = (userId) => {
    const updatedUsuarios = usuarioFiltro.map((user) =>
      user.id === userId ? { ...user, selected: !user.selected } : user
    );
    setUsuarioFiltro(updatedUsuarios);
  };

  // Função para depositar os 50 fabcoins
  const confirmar = () => {
    const usuariosSelecionados = usuarioFiltro.filter((user) => user.selected);

    if (usuariosSelecionados.length > 0) {
      // Lógica para depositar 50 fabcoins para usuários selecionados
      const updatedUsuarios = usuarios.map((user) =>
        usuariosSelecionados.some((selectedUser) => selectedUser.id === user.id)
          ? { ...user, fabcoins: user.fabcoins + 50 }
          : user
      );
      // Atualiza o estado global de usuários
      updateUsuarios(updatedUsuarios);
      // Limpa a seleção dos checkboxes
      setChecked(false);
    }
  };

  return (
    <View style={estilos.AutorizacaoAdmStyle.container}>
      {/* Header */}
      <Header navigation={navigation} usuario={usuario} />

      {/* Área principal da tela */}
      <View style={estilos.AutorizacaoAdmStyle.infoContainer}>
        {/* Barra de pesquisa */}
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

        {/* Área de rolagem para exibição dos usuários */}
        <View style={estilos.AutorizacaoAdmStyle.scrollViewArea}>
          <ScrollView style={estilos.AutorizacaoAdmStyle.scrollView}>
            {/* Mapeamento dos usuários filtrados */}
            {usuarioFiltro.length > 0 ? (
              usuarioFiltro.map((user, idx) => (
                <View style={estilos.AutorizacaoAdmStyle.grid} key={idx}>
                  <View style={estilos.AutorizacaoAdmStyle.row}>
                    {/* Imagem do perfil do usuário */}
                    <View style={estilos.AutorizacaoAdmStyle.profileBorder}>
                      <Image
                        style={estilos.AutorizacaoAdmStyle.profileImage}
                        resizeMode="cover"
                        source={user.img}
                      />
                    </View>

                    {/* Informações do usuário */}
                    <View style={estilos.AutorizacaoAdmStyle.info}>
                      <Text style={estilos.AutorizacaoAdmStyle.name}>
                        {user.usuario.charAt(0).toUpperCase() + user.usuario.slice(1)}
                      </Text>
                      <Text style={estilos.AutorizacaoAdmStyle.emailText}>{user.email}</Text>
                      <View style={estilos.AutorizacaoAdmStyle.row2}>
                        {/* Ícone de Fabcoin e quantidade de Fabcoins */}
                        <Image
                          style={estilos.AutorizacaoAdmStyle.fabcoin}
                          resizeMode="contain"
                          source={require('./assets/imagens/fabcoins.png')}
                        />
                        <Text style={estilos.AutorizacaoAdmStyle.fabcoinText}>{user.fabcoins} $</Text>
                      </View>
                    </View>

                    {/* Checkbox para seleção do usuário */}
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
        {/* Botão para confirmar a ação */}
        <TouchableHighlight onPress={confirmar}>
          <Text>CONFIRMAR</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

export default AutorizacaoAdm;
