import React, { useState } from "react";
import estilos from './style/estilos'
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
  StatusBar,
} from "react-native";

function Autorizacao({ navigation }) {
  return (
    <View style={estilos.AutorizacaoStyle.viewAutorizacao}>
      <View style={estilos.AutorizacaoStyle.viewAutorizacaoTopo}>

        <TouchableOpacity
          style={estilos.AutorizacaoStyle.iconVoltar}
          activeOpacity={0.7}
          onPress={() => navigation.navigate("Home")}
        ><Image style={estilos.AutorizacaoStyle.iconVoltar} source={require('./assets/imagens/botao-voltar.png')}></Image>
        </TouchableOpacity>
        <Text style={estilos.AutorizacaoStyle.autorizacaoTitle}>Ficha de Autorização</Text>
      </View>

      <View style={estilos.AutorizacaoStyle.limiteScroll}>
      <ScrollView style={estilos.AutorizacaoStyle.scrollAutorizacao}>
      <View style={[{alignItems:'center'}]}>
        <TouchableHighlight
          onPress={() => Linking.openURL("https://inovfablab.unisanta.br")}
        >
          <Image
            source={require("./assets/imagens/logofablab.png")}
            style={[{width:70,height:70}]}
          ></Image>
        </TouchableHighlight>
      </View>
        <View>
          <Text>Nome:</Text>
        <TextInput
          style={estilos.AutorizacaoStyle.autorizacaoInput}
          placeholder="Gustavo Henrique de Aguiar Lopes"
        ></TextInput>
        </View>
        <View>
          <Text>RA:</Text>
        <TextInput
          style={estilos.AutorizacaoStyle.autorizacaoInput}
          placeholder="219852"
        ></TextInput>
        </View>
        <View>
          <Text>E-mail:</Text>
        <TextInput
          style={estilos.AutorizacaoStyle.autorizacaoInput}
          placeholder="gl219852@alunos.unisanta.br"
        ></TextInput>
        </View>
        <View>
          <Text>Curso:</Text>
        <TextInput
          style={estilos.AutorizacaoStyle.autorizacaoInput}
          placeholder="Engenharia da Computação"
        ></TextInput>
        </View>
        <View>
          <Text>Matéria:</Text>
        <TextInput
          style={estilos.AutorizacaoStyle.autorizacaoInput}
          placeholder="Desenvolvimento de Aplicações Móveis"
        ></TextInput>
        </View>
        <View>
          <Text>E-mail do professor responsável pelo projeto:</Text>
        <TextInput
          style={estilos.AutorizacaoStyle.autorizacaoInput}
          placeholder="Luis Ferrara"
        ></TextInput>
        </View>
        <View>
          <Text>Nome do projeto:</Text>
        <TextInput
          style={estilos.AutorizacaoStyle.autorizacaoInput}
          placeholder="Aplicativo FabManager"
        ></TextInput>
        </View>
        <View>
          <Text>Descrição do projeto</Text>
        <TextInput
          style={estilos.AutorizacaoStyle.autorizacaoInput}
          placeholder="Proposta de Aplicativo do InovFabLab"
        ></TextInput>
        </View>
        <View>
          <Text>Integrantes (nome : e-mail)</Text>
        <TextInput
          style={estilos.AutorizacaoStyle.autorizacaoInput}
          placeholder="Nome - Email, Nome - Email"
        ></TextInput>
        </View>
        <TouchableOpacity
              style={estilos.AutorizacaoStyle.botaoConfirma}
              activeOpacity={0.7}
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={estilos.AutorizacaoStyle.txt}>CONFIRMAR</Text>
            </TouchableOpacity>
      </ScrollView>
      </View>
    </View>
  );
}
export default Autorizacao;
