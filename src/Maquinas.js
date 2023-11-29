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

const machines = [
  { nome: 'Cortadora e Gravadora a laser', img: require("./assets/imagens/cortadora.jpg") },
  { nome: 'Estação de Solda e Retrabalho', img: require("./assets/imagens/solda.jpg") },
  { nome: 'PCB-PROTO 15', img: require("./assets/imagens/pcb.jpg") },
  { nome: 'Impressora Guider 3D', img: require("./assets/imagens/guider.jpg") },
  { nome: 'Impressora Finder 3D', img: require("./assets/imagens/finder.jpg") },
]

function Maquinas({ navigation, route }) {
  const { usuario } = route.params;
  console.log(usuario);
  const IrReserva = (machines) => {
    navigation.navigate('Reserva', { machines, usuario: usuario })
  }
  return (
    <View style={estilos.MaquinaStyle.viewMaquinas}>
      <Header navigation={navigation} usuario={usuario} />

      <View style={estilos.MaquinaStyle.containerMaquinas}>
        <ScrollView style={estilos.MaquinaStyle.scrollMaquinas}>
          <View style={estilos.MaquinaStyle.grid}>
            <Image
              style={estilos.MaquinaStyle.image}
              source={require("./assets/imagens/cortadora.jpg")}
              resizeMode="contain"
            />
            <Text style={estilos.MaquinaStyle.title}>Cortadora e Gravadora a laser</Text>
            <View style={estilos.MaquinaStyle.rowContainer}>
              <TouchableHighlight
                style={estilos.MaquinaStyle.botoes}
                onPress={() => console.warn('Em Manutenção')}
              >
                <Text style={estilos.MaquinaStyle.subTitle}>
                  Consultar
                </Text>
              </TouchableHighlight>
              <TouchableHighlight style={estilos.MaquinaStyle.botoes} onPress={() => IrReserva(machines[0])}>
                <Text style={estilos.MaquinaStyle.subTitle}>
                  Reservar
                </Text>
              </TouchableHighlight>
            </View>
          </View>
          <View style={estilos.MaquinaStyle.grid}>
            <Image
              style={estilos.MaquinaStyle.image}
              source={require("./assets/imagens/solda.jpg")}
              resizeMode="contain"
            />
            <Text style={estilos.MaquinaStyle.title}>Estação de Solda e Retrabalho</Text>
            <View style={estilos.MaquinaStyle.rowContainer}>
              <TouchableHighlight
                style={estilos.MaquinaStyle.botoes}
                onPress={() => console.warn('Em Manutenção')}
              >
                <Text style={estilos.MaquinaStyle.subTitle}>
                  Consultar
                </Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={estilos.MaquinaStyle.botoes}
                onPress={() => IrReserva(machines[1])}>
                <Text style={estilos.MaquinaStyle.subTitle}>
                  Reservar
                </Text>
              </TouchableHighlight>
            </View>
          </View>
          <View style={estilos.MaquinaStyle.grid}>
            <Image
              style={estilos.MaquinaStyle.image}
              source={require("./assets/imagens/pcb.jpg")}
              resizeMode="contain"
            />
            <Text style={estilos.MaquinaStyle.title}>Prototipadora de Circuitos Impressos</Text>
            <View style={estilos.MaquinaStyle.rowContainer}>
              <TouchableHighlight
                style={estilos.MaquinaStyle.botoes}
                onPress={() => console.warn('Em Manutenção')}
              >
                <Text style={estilos.MaquinaStyle.subTitle}>
                  Consultar
                </Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={estilos.MaquinaStyle.botoes}
                onPress={() => IrReserva(machines[2])}>
                <Text style={estilos.MaquinaStyle.subTitle}>
                  Reservar
                </Text>
              </TouchableHighlight>
            </View>
          </View>
          <View style={estilos.MaquinaStyle.grid}>
            <Image
              style={estilos.MaquinaStyle.image}
              source={require("./assets/imagens/guider.jpg")}
              resizeMode="contain"
            />
            <Text style={estilos.MaquinaStyle.title}>Impressora Guider 3D</Text>
            <View style={estilos.MaquinaStyle.rowContainer}>
              <TouchableHighlight
                style={estilos.MaquinaStyle.botoes}
                onPress={() => console.warn('Em Manutenção')}
              >
                <Text style={estilos.MaquinaStyle.subTitle}>
                  Consultar
                </Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={estilos.MaquinaStyle.botoes}
                onPress={() => IrReserva(machines[3])}>
                <Text style={estilos.MaquinaStyle.subTitle}>
                  Reservar
                </Text>
              </TouchableHighlight>
            </View>
          </View>
          <View style={estilos.MaquinaStyle.grid}>
            <Image
              style={estilos.MaquinaStyle.image}
              source={require("./assets/imagens/finder.jpg")}
              resizeMode="contain"
            />
            <Text style={estilos.MaquinaStyle.title}>Impressora Finder 3D</Text>
            <View style={estilos.MaquinaStyle.rowContainer}>

              <TouchableHighlight
                style={estilos.MaquinaStyle.botoes}
                onPress={() => console.warn('Em Manutenção')}
              >
                <Text style={estilos.MaquinaStyle.subTitle}>
                  Consultar
                </Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={estilos.MaquinaStyle.botoes}
                onPress={() => IrReserva(machines[4])}>
                <Text style={estilos.MaquinaStyle.subTitle}>
                  Reservar
                </Text>
              </TouchableHighlight>
            </View>
          </View>
        </ScrollView>
      </View>
    </View >
  );
}
export default Maquinas;
