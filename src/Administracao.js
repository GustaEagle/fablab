import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Link, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import estilos from "./style/estilos";
import Header from "./Header";
import {
  View,
  TouchableHighlight,
  ScrollView,
  TextInput,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  Linking,
  TouchableOpacity,
} from "react-native";

function Administracao({ route, navigation }) {
  const { usuario } = route.params;
  const [fabcoins, setFabcoins] = useState(usuario.fabcoins);

  const adicionarFabcoins = () => {
    setFabcoins(fabcoins + 1);
  };

  const resetarFabcoins = () => {
    setFabcoins(0);
  };

  return (
    <View style={estilos.AdministracaoStyle.container}>
      <Header navigation={navigation} usuario={usuario}/>
      <Image
        source={usuario.img}
        style={estilos.AdministracaoStyle.icon}
      />
      <Text style={estilos.AdministracaoStyle.text}>
        Bem-vindo, {usuario.usuario} (Admin)!
      </Text>
      <View style={estilos.AdministracaoStyle.infoContainer}>
        <Text style={estilos.AdministracaoStyle.infoText}>
          Fabcoins disponíveis: {fabcoins}
        </Text>
        <TouchableOpacity
          style={estilos.AdministracaoStyle.button}
          onPress={adicionarFabcoins}
        >
          <Text style={estilos.AdministracaoStyle.buttonText}>Adicionar Fabcoin</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[estilos.AdministracaoStyle.button, estilos.AdministracaoStyle.resetButton]}
          onPress={resetarFabcoins}
        >
          <Text style={estilos.AdministracaoStyle.buttonText}>Resetar Fabcoins</Text>
        </TouchableOpacity>
        {/* Adicione outras funcionalidades conforme necessário */}
      </View>
    </View>
  );
}

export default Administracao;
