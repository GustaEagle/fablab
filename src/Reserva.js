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
  const [isPressed, setPressed] = useState(false);

  return(
    
    <View style={estilos.ReservaStyle.container}>
      <Header navigation={navigation} usuario={usuario}/>
      <View style ={estilos.ReservaStyle.viewTitle}>
        <Text style={estilos.ReservaStyle.tituloMaquinas}>{machines.nome}</Text>
      </View>

      <Image style={estilos.ReservaStyle.imgMaquina} source={machines.img}></Image>
      <ScrollView style={estilos.ReservaStyle.scroll}>
        <View style={estilos.ReservaStyle.viewHorario}>
          <TouchableOpacity style ={[estilos.ReservaStyle.botoes , isPressed ? estilos.ReservaStyle.pressionado : null]} onPress={()=>{setPressed(!isPressed)}}>
            <Text style={estilos.ReservaStyle.textBotao}>08:00-08:30</Text>
          </TouchableOpacity>
          <TouchableOpacity style ={estilos.ReservaStyle.botoes}>
            <Text style={estilos.ReservaStyle.textBotao}>08:30-09:00</Text>
          </TouchableOpacity>
          <TouchableOpacity style ={estilos.ReservaStyle.botoes}>
            <Text style={estilos.ReservaStyle.textBotao}>09:00-09:30</Text>
          </TouchableOpacity>
          <TouchableOpacity style ={estilos.ReservaStyle.botoes}>
            <Text style={estilos.ReservaStyle.textBotao}>09:30-10:00</Text>
          </TouchableOpacity>
          <TouchableOpacity style ={estilos.ReservaStyle.botoes}>
            <Text style={estilos.ReservaStyle.textBotao}>10:00-10:30</Text>
          </TouchableOpacity>
          <TouchableOpacity style ={estilos.ReservaStyle.botoes}>
            <Text style={estilos.ReservaStyle.textBotao}>10:30-11:00</Text>
          </TouchableOpacity>
          <TouchableOpacity style ={estilos.ReservaStyle.botoes}>
            <Text style={estilos.ReservaStyle.textBotao}>11:00-11:30</Text>
          </TouchableOpacity>
          <TouchableOpacity style ={estilos.ReservaStyle.botoes}>
            <Text style={estilos.ReservaStyle.textBotao}>11:30-12:00</Text>
          </TouchableOpacity>
          <TouchableOpacity style ={estilos.ReservaStyle.botoes}>
            <Text style={estilos.ReservaStyle.textBotao}>12:00-12:30</Text>
          </TouchableOpacity>
          <TouchableOpacity style ={estilos.ReservaStyle.botoes}>
            <Text style={estilos.ReservaStyle.textBotao}>12:30-13:00</Text>
          </TouchableOpacity>
          <TouchableOpacity style ={estilos.ReservaStyle.botoes}>
            <Text style={estilos.ReservaStyle.textBotao}>13:00-13:30</Text>
          </TouchableOpacity>
          <TouchableOpacity style ={estilos.ReservaStyle.botoes}>
            <Text style={estilos.ReservaStyle.textBotao}>13:30-14:00</Text>
          </TouchableOpacity>
          <TouchableOpacity style ={estilos.ReservaStyle.botoes}>
            <Text style={estilos.ReservaStyle.textBotao}>14:00-14:30</Text>
          </TouchableOpacity>
          <TouchableOpacity style ={estilos.ReservaStyle.botoes}>
            <Text style={estilos.ReservaStyle.textBotao}>14:30-15:00</Text>
          </TouchableOpacity>
          <TouchableOpacity style ={estilos.ReservaStyle.botoes}>
            <Text style={estilos.ReservaStyle.textBotao}>15:00-15:30</Text>
          </TouchableOpacity>
          <TouchableOpacity style ={estilos.ReservaStyle.botoes}>
            <Text style={estilos.ReservaStyle.textBotao}>15:30-16:00</Text>
          </TouchableOpacity>
          <TouchableOpacity style ={estilos.ReservaStyle.botoes}>
            <Text style={estilos.ReservaStyle.textBotao}>16:00-16:30</Text>
          </TouchableOpacity>
          <TouchableOpacity style ={estilos.ReservaStyle.botoes}>
            <Text style={estilos.ReservaStyle.textBotao}>16:30-17:00</Text>
          </TouchableOpacity>
          <TouchableOpacity style ={estilos.ReservaStyle.botoes}>
            <Text style={estilos.ReservaStyle.textBotao}>17:00-17:30</Text>
          </TouchableOpacity>
          <TouchableOpacity style ={estilos.ReservaStyle.botoes}>
            <Text style={estilos.ReservaStyle.textBotao}>17:30-18:00</Text>
          </TouchableOpacity>
          <TouchableOpacity style ={estilos.ReservaStyle.botoes}>
            <Text style={estilos.ReservaStyle.textBotao}>18:00-18:30</Text>
          </TouchableOpacity>
          <TouchableOpacity style ={estilos.ReservaStyle.botoes}>
            <Text style={estilos.ReservaStyle.textBotao}>18:30-19:00</Text>
          </TouchableOpacity>
          <TouchableOpacity style ={estilos.ReservaStyle.botoes}>
            <Text style={estilos.ReservaStyle.textBotao}>19:00-19:30</Text>
          </TouchableOpacity>
          <TouchableOpacity style ={estilos.ReservaStyle.botoes}>
            <Text style={estilos.ReservaStyle.textBotao}>19:30-20:00</Text>
          </TouchableOpacity>
          <TouchableOpacity style ={estilos.ReservaStyle.botoes}>
            <Text style={estilos.ReservaStyle.textBotao}>20:00-20:30</Text>
          </TouchableOpacity>
          <TouchableOpacity style ={estilos.ReservaStyle.botoes}>
            <Text style={estilos.ReservaStyle.textBotao}>20:30-21:00</Text>
          </TouchableOpacity>
          <TouchableOpacity style ={estilos.ReservaStyle.botoes}>
            <Text style={estilos.ReservaStyle.textBotao}>21:00-21:30</Text>
          </TouchableOpacity>
          <TouchableOpacity style ={estilos.ReservaStyle.botoes}>
            <Text style={estilos.ReservaStyle.textBotao}>21:30-22:00</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TouchableOpacity style={estilos.ReservaStyle.confirmButton}>
        <Text style={estilos.ReservaStyle.confirmTxt}>CONFIRMAR RESERVA</Text>
      </TouchableOpacity>
    </View>
  )
  
}

export default Reserva
