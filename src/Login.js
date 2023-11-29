import React, { useState } from "react";
import estilos from "./style/estilos";
import { useUsuariosContext } from "./Context";
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

function Login({ navigation }) {
  const { usuarios, updateUsuarios } = useUsuariosContext();
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
      (u) => (u.usuario === usuario || u.email === email) && u.senha === senha
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
              onChangeText={(t) => {
                if (t.includes('@')) {
                  setEmail(t)
                }
                else {
                  setUsuario(t)
                }
              }}></TextInput>
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
