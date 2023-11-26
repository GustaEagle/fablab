import React, { useState } from "react";
import estilos from "./style/estilos";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Switch,
  ImageBackground,
} from "react-native";

// Array de usuários para autenticação
let usuarios = [
  { usuario: 'gustavo', email: 'gustavo@example.com', senha: '12345' },
  { usuario: 'vinelo', email: 'vinelo@example.com', senha: '123456789' },
];

function Login({ navigation }) {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrar, setMostrar] = useState(false);

  const identificaLogin = () => {
    // Verifique se as credenciais são válidas
    const usuarioExistente = usuarios.find(
      (e) => 
        (e.usuario === usuario || e.email === usuario) &&
        e.senha === senha
    );
    console.log(usuarioExistente)
    if (usuarioExistente) {
      // Login efetuado
      navigation.navigate("Maquinas",{usuario:usuarioExistente});
    } else {
      // Erro
      alert("Usuário ou senha inválidos. Tente novamente.");
    }
  };

  return (
    <View style={estilos.LoginStyle.viewLogin}>
      <ImageBackground
        source={require("./assets/imagens/Fundo.jpg")}
        style={[
          estilos.LoginStyle.fundo,
          { opacity: 0.2, backgroundColor: "#000" },
        ]}
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
          <View style={estilos.LoginStyle.rowIcon}>
            <Image
              source={require("./assets/imagens/email.png")}
              style={estilos.LoginStyle.loginImageInput}
            ></Image>
            <TextInput
              style={estilos.LoginStyle.loginInp}
              placeholder="Usuário ou Email"
              onChangeText={(text) => setUsuario(text)}
            ></TextInput>
          </View>
          <Text style={estilos.LoginStyle.loginLabelInput}>Senha</Text>
          <View style={estilos.LoginStyle.rowIcon}>
            <Image
              source={require("./assets/imagens/senha.png")}
              style={estilos.LoginStyle.loginImageInput}
            ></Image>

            <TextInput
              style={estilos.LoginStyle.loginInp}
              placeholder="Senha"
              value={senha}
              onChangeText={(text) => setSenha(text)}
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
              onPress={identificaLogin}
            >
              <Text style={estilos.LoginStyle.txt}>CONFIRMAR</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={estilos.LoginStyle.underline}
        >
          <Text style={estilos.LoginStyle.underline}>Criar Conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Login;
