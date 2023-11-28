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
  const{usuario, machines} = route.params;
  return(
    
    <View style={estilos.ReservaStyle.container}>
      <Header navigation={navigation} usuario={usuario}/>
      <View style ={estilos.ReservaStyle.viewTitle}>
        <Text style={estilos.ReservaStyle.tituloMaquinas}>{machines.nome}</Text>
      </View>

      <Image style={estilos.ReservaStyle.imgMaquina} source={machines.img}></Image>
      <View style={estilos.ReservaStyle.viewHorario}>
        <TouchableHighlight style ={estilos.ReservaStyle.botoes}>
          <Text style={estilos.ReservaStyle.textBotao}>08:00-08:30</Text>
        </TouchableHighlight>

      </View>
    </View>
  )
  
}

export default Reserva
