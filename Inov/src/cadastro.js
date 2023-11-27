import React, { useState } from "react";
import estilos from "./estilos";
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
  Switch,
  Pressable,
} from "react-native";

function Cadastro({ navigation }) {
  const [senha, setSenha] = useState("");
  const [mostrar, setMostrar] = useState(false);

  return (
    <View style={estilos.viewLogin}>
      <ImageBackground
        source={require("./assets/imagens/Fundo.jpg")}
        style={[estilos.fundo, { opacity: 0.2, backgroundColor: "#000" }]}
      ></ImageBackground>
      <View style={estilos.viewLoginWhite}>
        <View style={estilos.viewLoginTopo}>
          <TouchableOpacity
            style={estilos.iconVoltar}
            activeOpacity={0.7}
            onPress={() => navigation.navigate("Login")}
          >
            <Image
              style={estilos.iconVoltar}
              source={require("./assets/imagens/botao-voltar.png")}
            ></Image>
          </TouchableOpacity>

          <Text style={estilos.loginLabelBlue}>CADASTRO</Text>
        </View>

        <View style={estilos.loginViewGrey}>
          <Text style={estilos.loginLabelInput}>E-mail</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#eee",
            }}
          >
            <Image
              source={require("./assets/imagens/email.png")}
              style={estilos.loginImageInput}
            ></Image>
            <TextInput
              style={[estilos.loginInp, { flex: 1 }]}
              placeholder="E-mail"
              keyboardType="email-address"
              autoComplete="email"
              autoCapitalize="none"
            ></TextInput>
          </View>
          <Text style={estilos.loginLabelInput}>Senha</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("./assets/imagens/senha.png")}
              style={estilos.loginImageInput}
            ></Image>

            <TextInput
              style={estilos.loginInp}
              placeholder="Senha"
              value={senha}
              onChangeText={(e) => setSenha(e)}
              secureTextEntry={!mostrar}
            />
          </View>
          <View style={{ alignItems: "center", marginTop: 15 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={(fontSize = 15)}>Mostrar Senha</Text>

              <Switch
                value={mostrar}
                onValueChange={() => setMostrar(!mostrar)}
              />
            </View>
            <TouchableOpacity
              style={estilos.loginConfirma}
              activeOpacity={0.7}
              onPress={() => navigation.navigate("Login")}>
              <Text style={estilos.txt}>CADASTRAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Cadastro;

