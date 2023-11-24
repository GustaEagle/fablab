import React, { useState } from "react";
import estilos from "./style/estilos";
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
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
import Header from "./Header";

function Maquinas({navigation}) {
  return (
    <View style={estilos.MaquinaStyle.viewMaquinas}>
      <Header navigation={navigation} />

      <View style={estilos.MaquinaStyle.containerMaquinas}>
        <ScrollView style={estilos.MaquinaStyle.scrollMaquinas}>
          <View style={estilos.MaquinaStyle.grid}>
            <Image
              style={estilos.MaquinaStyle.image}
              source={require("./assets/imagens/cortadora.jpg")}
              resizeMode="contain"
            />
            <Text>Cortadora e Gravadora a laser</Text>
          </View>
          <View style={estilos.MaquinaStyle.grid}>
            <Image
              style={estilos.MaquinaStyle.image}
              source={require("./assets/imagens/solda.jpg")}
              resizeMode="contain"
            />
            <Text>Estação de Solda e Retrabalho</Text>
          </View>
          <View style={estilos.MaquinaStyle.grid}>
            <Image
              style={estilos.MaquinaStyle.image}
              source={require("./assets/imagens/pcb.jpg")}
              resizeMode="contain"
            />
            <Text>Prototipadora de Circuitos Impressos</Text>
          </View>
          <View style={estilos.MaquinaStyle.grid}>
            <Image
              style={estilos.MaquinaStyle.image}
              source={require("./assets/imagens/guider.jpg")}
              resizeMode="contain"
            />
            <Text>Impressora Guinder 3D</Text>
          </View>
          <View style={estilos.MaquinaStyle.grid}>
            <Image
              style={estilos.MaquinaStyle.image}
              source={require("./assets/imagens/finder.jpg")}
              resizeMode="contain"
            />
            <Text>Impressora Finder 3D</Text>
          </View>
        </ScrollView>
      </View>
    </View >
  );
}
export default Maquinas;
