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


function Reserva ({navigation, route}){
  const{usuario} = route.params;
  const machines = route.params.machines;
  return(
    <View style={estilos.ReservaStyle.container}>
      <Header navigation={navigation} usuario={usuario}/>
      <View style ={estilos.ReservaStyle.ViewTitle}>
        <Text style={estilos.ReservaStyle.TituloMaquinas}>{machines.nome}</Text>
      </View>
    </View>
  )
  
}

export default Reserva
