import React, { useState } from "react";
import estilos from "./style/estilos";
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


function dados (){
    let user = [['gustavo','12345'],['vinelo','123456789']];
}

function Login({ navigation }) {
  const [senha, setSenha] = useState("");
  const [mostrar, setMostrar] = useState(false);

  return (
    <View style={estilos.LoginStyle.viewLogin}>
      <ImageBackground
        source={require("./assets/imagens/Fundo.jpg")}
        style={[estilos.LoginStyle.fundo, { opacity: 0.2, backgroundColor: "#000" }]}
      ></ImageBackground>
      <View style={estilos.LoginStyle.viewLoginWhite}>
        <View style={estilos.LoginStyle.viewLoginTopo}>
          <TouchableOpacity
            style={estilos.LoginStyle.iconVoltar}
            activeOpacity={0.7}
            onPress={() => navigation.navigate("Home")}
          >
            <Image
              style={estilos.LoginStyle.iconVoltar}
              source={require("./assets/imagens/botao-voltar.png")}
            ></Image>
          </TouchableOpacity>

          <Text style={estilos.LoginStyle.loginLabel}>LOGIN</Text>
        </View>

        <View style={estilos.LoginStyle.loginViewGrey}>
          <Text style={estilos.LoginStyle.loginLabelInput}>Usuário</Text>
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
              style={estilos.LoginStyle.loginImageInput}
            ></Image>
            <TextInput
              style={[estilos.LoginStyle.loginInp, { flex: 1 }]}
              placeholder="Usuario"
            ></TextInput>
          </View>
          <Text style={estilos.LoginStyle.loginLabelInput}>Senha</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("./assets/imagens/senha.png")}
              style={estilos.LoginStyle.loginImageInput}
            ></Image>

            <TextInput
              style={estilos.LoginStyle.loginInp}
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
              style={estilos.LoginStyle.botaoConfirma}
              activeOpacity={0.7}
              onPress={() => navigation.navigate("Maquinas")}
            >
              <Text style={estilos.LoginStyle.txt}>CONFIRMAR</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableHighlight
        onPress={() => navigation.navigate("Home")}
        style={estilos.LoginStyle.underline}
        >
         
        <Text style={estilos.LoginStyle.underline}
          
        >
          Criar Conta
        </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

export default Login;
