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
  StatusBar,
} from "react-native";

function Autorizacao({ navigation }) {
  return (
    <View style={estilos.viewAutorizacao}>
      <View style={estilos.viewAutorizacaoTopo}>

        <TouchableOpacity
          style={estilos.iconVoltar}
          activeOpacity={0.7}
          onPress={() => navigation.navigate("Home")}
        ><Image style={estilos.iconVoltar} source={require('./assets/imagens/botao-voltar.png')}></Image>
        </TouchableOpacity>
        <Text style={estilos.autorizacaoTitle}>Ficha de Autorização</Text>
      </View>

      <View style={estilos.limiteScroll}>
      <ScrollView style={estilos.scrollAutorizacao}>
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
          style={estilos.autorizacaoInput}
          placeholder="Gustavo Henrique de Aguiar Lopes"
        ></TextInput>
        </View>
        <View>
          <Text>RA:</Text>
        <TextInput
          style={estilos.autorizacaoInput}
          placeholder="219852"
        ></TextInput>
        </View>
        <View>
          <Text>E-mail:</Text>
        <TextInput
          style={estilos.autorizacaoInput}
          placeholder="gl219852@alunos.unisanta.br"
        ></TextInput>
        </View>
        <View>
          <Text>Curso:</Text>
        <TextInput
          style={estilos.autorizacaoInput}
          placeholder="Engenharia da Computação"
        ></TextInput>
        </View>
        <View>
          <Text>Matéria:</Text>
        <TextInput
          style={estilos.autorizacaoInput}
          placeholder="Desenvolvimento de Aplicações Móveis"
        ></TextInput>
        </View>
        <View>
          <Text>E-mail do professor responsável pelo projeto:</Text>
        <TextInput
          style={estilos.autorizacaoInput}
          placeholder="Luis Ferrara"
        ></TextInput>
        </View>
        <View>
          <Text>Nome do projeto:</Text>
        <TextInput
          style={estilos.autorizacaoInput}
          placeholder="Aplicativo FabManager"
        ></TextInput>
        </View>
        <View>
          <Text>Descrição do projeto</Text>
        <TextInput
          style={estilos.autorizacaoInput}
          placeholder="Proposta de Aplicativo do InovFabLab"
        ></TextInput>
        </View>
        <View>
          <Text>Integrantes (nome : e-mail)</Text>
        <TextInput
          style={estilos.autorizacaoInput}
          placeholder="Nome - Email, Nome - Email"
        ></TextInput>
        </View>
        <TouchableOpacity
              style={estilos.loginConfirma}
              activeOpacity={0.7}
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={estilos.txt}>CONFIRMAR</Text>
            </TouchableOpacity>
      </ScrollView>
      </View>
    </View>
  );
}
export default Autorizacao;
