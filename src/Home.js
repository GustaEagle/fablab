import React from "react";
import estilos from "./style/estilos";
import {
  View,
  TouchableHighlight,
  Text,
  Image,
  ImageBackground,
  Linking,
  TouchableOpacity,
} from "react-native";

function Home({ navigation }) {
  return (
    <ImageBackground
      source={require("./assets/imagens/Fundo.jpg")}
      style={estilos.HomeStyle.fundo}
    >
      <View style={estilos.HomeStyle.view}>
        <TouchableHighlight
          onPress={() => Linking.openURL("https://inovfablab.unisanta.br")}
        >
          <Image
            source={require("./assets/imagens/logofablab.png")}
            style={estilos.HomeStyle.logo}
          ></Image>
        </TouchableHighlight>
      </View>

      <View style={estilos.HomeStyle.view}>
        <TouchableOpacity
          style={estilos.HomeStyle.botao1}
          activeOpacity={0.7}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={estilos.HomeStyle.txt}>Entrar no FabManager</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={estilos.HomeStyle.botao2}
          activeOpacity={0.7}
          onPress={() => navigation.navigate("Autorizacao")}
        >
          <Text style={estilos.HomeStyle.txt}>Ficha de Autorização</Text>
        </TouchableOpacity>
      </View>

      <TouchableHighlight
        onPress={() => Linking.openURL("https://www.unisanta.br")}
        style={estilos.HomeStyle.unisanta}
      >
        <Image
          source={require("./assets/imagens/unisanta.png")}
          style={estilos.HomeStyle.unisanta}
        />
      </TouchableHighlight>
    </ImageBackground>
  );
}
export default Home;
