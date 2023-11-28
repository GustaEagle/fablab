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

function Administracao({ navigation, route }) {
  const usuario = route.params;
  return (
    <View style={estilos.AdministracaoStyle.ContainerAdm}>
      <Header navigation={navigation} usuario={usuario}/>

    </View>
  );
}
export default Administracao;
