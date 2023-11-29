import React from 'react'
import estilos from "./style/estilos";
import { StatusBar } from 'react-native';
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
import { LinearGradient } from 'expo-linear-gradient';

function Header({ navigation, usuario, aut }) {
  // Verifica se a propriedade usuario existe e tem a propriedade usuario dentro dela
  const nomeUsuario = usuario && usuario.usuario ? usuario.usuario : '';

  return (
    <View style={estilos.HeaderStyle.headerBackg}>
      <LinearGradient
        style={estilos.HeaderStyle.gradientHeader}
        colors={['#F00000', '#f80759']}
      />
      <View style={estilos.HeaderStyle.header}>
        <TouchableOpacity
          style={estilos.HeaderStyle.iconeVoltar}
          activeOpacity={0.7}
          //função goBack() retorna para tela anterior sempre
          onPress={() => navigation.goBack()}>
          <Image resizeMode='contain' style={estilos.HeaderStyle.iconVoltar} source={require('./assets/imagens/botao-voltar.png')} />
        </TouchableOpacity>
        <View style={estilos.HeaderStyle.profileBorder}>

          <Image
            style={estilos.HeaderStyle.profileImage}
            resizeMode="contain"
            source={usuario.img}></Image>
        </View>

        <Text style={estilos.HeaderStyle.profileName}>{nomeUsuario.charAt(0).toUpperCase() + nomeUsuario.slice(1)}</Text>
        <Image style={estilos.HeaderStyle.imgFabcoins} source={require('./assets/imagens/fabcoins.png')}></Image>
        <Text style={estilos.HeaderStyle.fabcoinText}>{usuario.fabcoins} $</Text>
        {/* se aut for true, aparece o icon de autorização, se não, não aparece. É para a funcionalidade da tela de autorizaçaoAdm */}
        {aut ? (
          <TouchableHighlight
            style={estilos.HeaderStyle.iconeAutorizacao}
            onPress={() => navigation.navigate('AutorizacaoAdm', { usuario })}
          >
            <Image
              source={require('./assets/imagens/autorizacao.png')}
              resizeMode='contain'
              style={estilos.HeaderStyle.iconAutorizacao}
            />
          </TouchableHighlight>
        ) : null}
      </View>
    </View>
  )
}
export default Header
