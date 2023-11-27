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

function Maquinas({ navigation }) {
  return (
    <View style={estilos.viewMaquinas}>
      <View style={estilos.containerMaquinas}>
      <ScrollView 
      removeClippedSubviews={true}
      style={estilos.scrollMaquinas}>
      <View style={[{alignItems:'center'}]}>
          <Image
            source={require("./assets/imagens/logofablab.png")}
            style={[{width:70,height:70}]}
          ></Image>
      </View>
        <View style={estilos.grid}>
          <Image
          style={estilos.image}
          source={require('./assets/imagens/cortadora.jpg')}
          resizeMode='contain'/>
        <Text>Cortadora e Gravadora a laser</Text>
        </View>
        <View style={estilos.grid}>
          <Image
          style={estilos.image}
          source={require('./assets/imagens/solda.jpg')}
          resizeMode='contain'/>
        <Text>Estação de Solda e Retrabalho</Text>
        </View>
        <View style={estilos.grid}>
          <Image
          style={estilos.image}
          source={require('./assets/imagens/pcb.jpg')}
          resizeMode='contain'/>
        <Text>Prototipadora de Circuitos Impressos</Text>
        </View>
        <View style={estilos.grid}>
          <Image
          style={estilos.image}
          source={require('./assets/imagens/guider.jpg')}
          resizeMode='contain'/>
        <Text>Impressora Guinder 3D</Text>
        </View>
        <View style={estilos.grid}>
          <Image
          style={estilos.image}
          source={require('./assets/imagens/finder.jpg')}
          resizeMode='contain'/>
        <Text>Impressora Finder 3D</Text>
        </View>
      </ScrollView>
      </View>
    </View>
  );
}
export default Maquinas;
