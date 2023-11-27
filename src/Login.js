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
  Modal
} from "react-native";

// Array de usuários para autenticação
let usuarios = [
  { id: 1, usuario: 'gustavo', email: 'gustavo@example.com', senha: '12345', fabcoins: 0, isAdm: false, img: require('./assets/imagens/user.png') },
  { id: 2, usuario: 'vinelo', email: 'vinelo@example.com', senha: '123456789', fabcoins: 0, isAdm: false , img: require('./assets/imagens/user.png') },
  { id: 3, usuario: 'zequinha', email: 'zequinha@example.com', senha: '122333', fabcoins: 0, isAdm: true, img: require('./assets/imagens/pocoyo.png') },
  { id: 4, usuario: 'yuri', email: 'storino@example.com', senha: 'koalaboy', fabcoins: 0, isAdm: true, img: require('./assets/imagens/koalaboy.png') },
  { id: 5, usuario: 'conde', email: 'conde@example.com', senha: '001122', fabcoins: 0, isAdm: false, img: require('./assets/imagens/user.png') },
  { id: 6, usuario: 'ricardo', email: 'careca@example.com', senha: 'vegan', fabcoins: 0, isAdm: true, img: require('./assets/imagens/user.png') },
];

function Login({ navigation }) {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [email,setEmail] = useState("")
  const [mostrar, setMostrar] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [usuariosCadastrados, setUsuariosCadastrados] = useState([]);

  const NovoLogin = () => {
    const user = usuarios.find(u => u.nome === nomeUsuario)
    if (user.isAdm == true){
      navigation.navigate("Administração")
    }
    else {navigation.navigate("Maquinas")}
  }

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
      navigation.navigate("Maquinas", { usuario: usuarioExistente });
    } else {
      // Erro
      alert("Usuário ou senha inválidos. Tente novamente.");
    }
  };

  const Registrar = () => {
    const usuarioExiste = usuariosCadastrados.find((u) => u.usuario === usuario);
    if (usuarioExiste) {
      alert('Usuário já registrado');
    } else {
      const idSoma = Number(usuarios.length)+2
      const novoUsuario = { id: idSoma, usuario, email, senha, fabcoins: 1, isAdm: false, img: require('./assets/imagens/user.png') };
      setUsuario('');
      setEmail('');
      setSenha('');
      setModalVisible(false); 
      alert('Usuário cadastrado com sucesso');
      usuarios.push(novoUsuario)
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
              onPress={NovoLogin}
            >
              <Text style={estilos.LoginStyle.txt}>CONFIRMAR</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={estilos.LoginStyle.underline}
        >
          <Text style={estilos.LoginStyle.underline}>Criar Conta</Text>
        </TouchableOpacity>
      </View>

      <Modal style={estilos.LoginStyle.viewLogin}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }
        }>
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

          <Text style={estilos.LoginStyle.loginLabel}>CADASTRAR</Text>
        </View>

        <View style={estilos.LoginStyle.loginViewGreyCadastro}>
          <Text style={estilos.LoginStyle.loginLabelInput}>Email</Text>
          <View style={estilos.LoginStyle.rowIcon}>
            <Image
              source={require("./assets/imagens/email.png")}
              style={estilos.LoginStyle.loginImageInput}
            ></Image>
            <TextInput
              style={estilos.LoginStyle.loginInp}
              placeholder="Email"
              onChangeText={(text) => setEmail(text)}
            ></TextInput>
          </View>
          <Text style={estilos.LoginStyle.loginLabelInput}>Usuário</Text>
          <View style={estilos.LoginStyle.rowIcon}>
            <Image
              source={require("./assets/imagens/user.png")}
              style={estilos.LoginStyle.loginImageInput}
            ></Image>
            <TextInput
              style={estilos.LoginStyle.loginInp}
              placeholder="Usuário"
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
              onPress={Registrar}
            >
              <Text style={estilos.LoginStyle.txt}>CONFIRMAR</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => setModalVisible(false)}
          style={estilos.LoginStyle.underline}
        >
          <Text style={estilos.LoginStyle.underline}>Fazer Login</Text>
        </TouchableOpacity>
      </View>
      </View>
      </Modal>
    </View>

  );
}
export default Login;
