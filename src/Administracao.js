import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Link, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import estilos from "./style/estilos";
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

function Administracao({ navigation }) {
  return (
    <ImageBackground
      source={require("./assets/imagens/Fundo.jpg")}
      style={estilos.HomeStyle.fundo}
    >
    </ImageBackground>
  );
}
export default Administracao;
