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
} from "react-native";

function Login({ navigation }) {
  const [senha, setSenha] = useState('');
  const [mostrar, setMostrar] = useState(false);

  return (
    <View style={estilos.viewLogin}>
      <ImageBackground
        source={require("./assets/imagens/Fundo.jpg")}
        style={[estilos.fundo, { opacity: 0.2, backgroundColor: "#000" }]}
      ></ImageBackground>
      <View style={estilos.viewLoginWhite}>
        <Text
          style={{
            color: "#00f",
            fontSize: 16,
            fontWeight: "bold",
            position: "absolute",
            top: 20,
          }}
        >
          LOGIN
        </Text>
        <View style={estilos.loginViewGrey}>
          <Text style={estilos.loginLabelInput}>Usuário</Text>
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
              placeholder="Usuario"
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
            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
              <Text style={fontSize = 15}>Mostrar Senha</Text>

              <Switch
                value={mostrar}
                onValueChange={() => setMostrar(!mostrar)}
              />
            </View>
            <TouchableOpacity
              style={estilos.loginConfirma}
              activeOpacity={0.7}
              onPress={() => navigation.navigate("Maquinas")}
            >
              <Text style={estilos.txt}>CONFIRMAR</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text
          style={estilos.underline}
          onPress={() => navigation.navigate("Home")}
        >
          Criar Conta
        </Text>
      </View>
    </View>
  );
}

export default Login;

