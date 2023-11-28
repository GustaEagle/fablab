import React, { useState, useEffect } from "react";
import estilos from "./style/estilos";
import Header from "./Header";

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
  const { usuario, usuarios } = route.params;
  const [searchTerm, setSearchTerm] = useState("");
  const [usuarioFiltro, setUsuarioFiltro] = useState([]);
  const [isChecked, setChecked] = useState(false);

  useEffect(() => {
    // Ao entrar na tela, exibe todos os usuários inicialmente
    setUsuarioFiltro(usuarios);
  }, [usuarios]);

  const setFiltro = () => {
    const filtro = usuarios.filter((user) =>
      user.email.toUpperCase().includes(searchTerm.toUpperCase())
    );
    setUsuarioFiltro(filtro);

    const handleCheckBox = (userId) => {
      // Lógica para lidar com a seleção/deseleção do checkbox
      const updatedUsuarios = usuarioFiltro.map((user) =>
        user.id === userId ? { ...user, selected: !user.selected } : user
      );
      console.log(updatedUsuarios);
      setUsuarioFiltro(updatedUsuarios);
    };
  };

  return (
    <View style={estilos.AdministracaoStyle.container}>
      <Header navigation={navigation} usuario={usuario} />
      <View style={estilos.AdministracaoStyle.infoContainer}>
        <View style={estilos.AdministracaoStyle.rowContainer}>
          <TextInput
            style={estilos.AdministracaoStyle.textInput}
            placeholder="Pesquisar por e-mail"
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
          />
          <TouchableOpacity
            style={estilos.AdministracaoStyle.lupa}
            onPress={setFiltro}
          >
            <Image
              resizeMode="cover"
              style={estilos.AdministracaoStyle.lupa}
              source={require('./assets/imagens/lupa.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={estilos.AdministracaoStyle.scrollViewArea}>

          <ScrollView style={estilos.AdministracaoStyle.scrollView}>
            {usuarioFiltro.length > 0 ? (
              usuarioFiltro.map((user, idx) => (
                <View style={estilos.AdministracaoStyle.grid} key={idx}>
                  <View style={estilos.AdministracaoStyle.row}>
                    <View style={estilos.AdministracaoStyle.profileBorder}>
                      <Image
                        style={estilos.AdministracaoStyle.profileImage}
                        resizeMode="cover"
                        source={user.img}></Image>
                    </View>
                    <View style={estilos.AdministracaoStyle.info}>
                      <Text style={estilos.AdministracaoStyle.name}>{user.usuario.charAt(0).toUpperCase() + user.usuario.slice(1)}</Text>
                      <Text style={estilos.AdministracaoStyle.emailText}>{user.email}</Text>
                      <View style={estilos.AdministracaoStyle.row2}>
                        <Image
                          style={estilos.AdministracaoStyle.fabcoin}
                          resizeMode="contain"
                          source={require('./assets/imagens/fabcoins.png')}></Image>
                        <Text style={estilos.AdministracaoStyle.fabcoinText}>{user.fabcoins} $</Text>
                      </View>
                    </View>
                    <Checkbox
                      // value={user.selected}
                      value={isChecked}
                      onValueChange={setChecked}
                    />
                  </View>
                </View>
              ))
            ) : (
              <Text>Nenhum usuário encontrado.</Text>
            )}
          </ScrollView>
        </View>
        <TouchableHighlight>
          <Text>CONFIRMAR</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

export default Administracao;
