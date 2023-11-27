import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import estilos from "./estilos";
import { Link, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
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

function Home({ navigation }) {
  return (
    <ImageBackground
      source={require("./assets/imagens/Fundo.jpg")}
      style={estilos.fundo}
    >
      <View style={estilos.view}>
        <TouchableHighlight
          onPress={() => Linking.openURL("https://inovfablab.unisanta.br")}
        >
          <Image
            source={require("./assets/imagens/logofablab.png")}
            style={estilos.logo}
          ></Image>
        </TouchableHighlight>
      </View>

      <View style={estilos.view}>
        <TouchableOpacity
          style={estilos.botao1}
          activeOpacity={0.7}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={estilos.txt}>Entrar no FabManager</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={estilos.botao2}
          activeOpacity={0.7}
          onPress={() => console.warn("teste")}
        >
          <Text style={estilos.txt}>Ficha de Autorização</Text>
        </TouchableOpacity>
      </View>

      <TouchableHighlight
        onPress={() => Linking.openURL("https://www.unisanta.br")}
        style={estilos.unisanta}
      >
        <Image
          source={require("./assets/imagens/unisanta.png")}
          style={estilos.unisanta}
        />
      </TouchableHighlight>
    </ImageBackground>
  );
}
export default Home;
