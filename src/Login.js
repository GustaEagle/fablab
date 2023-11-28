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
  Modal,
  Alert
} from "react-native";

// Array de usuários para autenticação
const ImgPadrao = require('./assets/imagens/user.png')
let usuarios = [
  { id: 1, usuario: 'a', email: 'a', senha: 'a', fabcoins: 0, isAdm: true, img: ImgPadrao },
  { id: 2, usuario: 'vinelo', email: 'vinelo@example.com', senha: '123456789', fabcoins: 0, isAdm: false, img: ImgPadrao },
  { id: 3, usuario: 'zequinha', email: 'zequinha@example.com', senha: 'doublebiceps', fabcoins: 0, isAdm: true, img: require('./assets/imagens/ze.jpeg') },
  { id: 4, usuario: 'yuri', email: 'yuri@example.com', senha: 'koalaboy', fabcoins: 0, isAdm: true, img: require('./assets/imagens/koalaboy.png') },
  { id: 5, usuario: 'conde', email: 'conde@example.com', senha: '001122', fabcoins: 50, isAdm: false, img: ImgPadrao },
  { id: 6, usuario: 'ricardo', email: 'ricardo@example.com', senha: 'vegan', fabcoins: 0, isAdm: true, img: require('./assets/imagens/ricardo.jpeg') },
  { id: 7, usuario: 'rhuan', email: 'rhuan@example.com', senha: 'asmogod', fabcoins: 0, isAdm: false, img: require('./assets/imagens/ricardo.jpeg') },
  { id: 8, usuario: 'ana', email: 'ana@example.com', senha: 'ana123', fabcoins: 0, isAdm: false, img: ImgPadrao },
  { id: 9, usuario: 'carlos', email: 'carlos@example.com', senha: 'carlos456', fabcoins: 0, isAdm: false, img: ImgPadrao },
  { id: 10, usuario: 'lucas', email: 'lucas@example.com', senha: 'lucas789', fabcoins: 0, isAdm: false, img: ImgPadrao },
  { id: 11, usuario: 'maria', email: 'maria@example.com', senha: 'maria101', fabcoins: 0, isAdm: false, img: ImgPadrao },
  { id: 12, usuario: 'joao', email: 'joao@example.com', senha: 'joao2022', fabcoins: 0, isAdm: false, img: ImgPadrao },
  { id: 13, usuario: 'fernanda', email: 'fernanda@example.com', senha: 'fernanda3030', fabcoins: 0, isAdm: false, img: ImgPadrao },
  { id: 14, usuario: 'pedro', email: 'pedro@example.com', senha: 'pedro4040', fabcoins: 0, isAdm: false, img: ImgPadrao },
  { id: 15, usuario: 'isabela', email: 'isabela@example.com', senha: 'isabela5050', fabcoins: 0, isAdm: false, img: ImgPadrao },
  { id: 16, usuario: 'felipe', email: 'felipe@example.com', senha: 'felipe6060', fabcoins: 0, isAdm: false, img: ImgPadrao },
  { id: 17, usuario: 'sophia', email: 'sophia@example.com', senha: 'sophia7070', fabcoins: 0, isAdm: false, img: ImgPadrao },
  { id: 18, usuario: 'gabriel', email: 'gabriel@example.com', senha: 'gabriel8080', fabcoins: 0, isAdm: false, img: ImgPadrao },
  { id: 19, usuario: 'clara', email: 'clara@example.com', senha: 'clara9090', fabcoins: 0, isAdm: false, img: ImgPadrao },
  { id: 20, usuario: 'enzo', email: 'enzo@example.com', senha: 'enzo1010', fabcoins: 0, isAdm: false, img: ImgPadrao },
];

function Login({ navigation }) {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("")
  const [mostrar, setMostrar] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const Cadastrados = usuarios.map(user => user.usuario)


  const Valida = () => { // Função de validação
    if (!usuario || !senha) {
      alert('Por favor, preencha todos os campos.')
      return false;
    }
    const UserExiste = usuarios.find(
      (u) => (u.usuario === usuario || u.usuario === email) && u.senha === senha
    )
    return UserExiste
  }

  const Login = () => {
    const usuarioExistente = Valida(); // Chama a função para verificar
    if (usuarioExistente) {
      navigation.navigate(usuarioExistente.isAdm ? 'Administracao' : 'Maquinas',
       { usuario: usuarioExistente, usuarios: usuarios })
    }
    else {
      alert("Usuário ou senha inválidos. Tente novamente.")
    }
  }

  const Registra = () => {
    if (Cadastrados.includes(usuario)) {
      alert("Usuario já cadastrado")
    }
    else {
      if (!usuario || !senha || !email) {
        alert("Favor preencher todos os dados")
      }
      else {
        const idSoma = Number(usuarios.length) + 1
        const NovoUser = {
          id: idSoma,
          usuario: usuario,
          email: email,
          senha: senha,
          fabcoins: 0,
          isAdm: false,
          img: ImgPadrao
        }
        usuarios.push(NovoUser)
        setUsuario('')
        setEmail('')
        setSenha('')
        setModalVisible(false);
      }
    }
  }

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
              onPress={Login}
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
                  onPress={Registra}
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
