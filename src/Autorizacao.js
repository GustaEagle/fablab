import React, { useState } from "react";
import estilos from './style/estilos'
import {
  View,
  TouchableHighlight,
  ScrollView,
  TextInput,
  Text,
  Image,
  Linking,
  TouchableOpacity,
} from "react-native";

let dados =[]

function Autorizacao({ navigation }) {
  const [ficha, setFicha]= useState({
    nome:"",
    ra:"",
    email:"",
    curso: "",
    materia: "",
    emailProfessor: "",
    Projeto: "",
    descricaoProjeto: "",
    integrantes: "",
  })

  const confirmaDados = ()=>{
    dados.push(ficha)
    setFicha({
      nome:"",
      ra:"",
      email:"",
      curso: "",
      materia: "",
      emailProfessor: "",
      Projeto: "",
      descricaoProjeto: "",
      integrantes: "",
    })
    alert('Ficha enviada com sucesso!')
    navigation.navigate("Home")
  }
  
  const atualiza = (novo, value)=>{
    setFicha({...ficha,[novo]:value})
  }
  return (
    <View style={estilos.AutorizacaoStyle.viewAutorizacao}>
      <View style={estilos.AutorizacaoStyle.viewAutorizacaoTopo}>

        <TouchableOpacity
          style={estilos.AutorizacaoStyle.iconVoltar}
          activeOpacity={0.7}
          onPress={() => navigation.navigate("Home")}
        ><Image style={estilos.AutorizacaoStyle.iconVoltar} source={require('./assets/imagens/botao-voltar.png')}></Image>
        </TouchableOpacity>
        <Text style={estilos.AutorizacaoStyle.autorizacaoTitle}>Ficha de Autorização</Text>
      </View>

      <View style={estilos.AutorizacaoStyle.limiteScroll}>
      <ScrollView style={estilos.AutorizacaoStyle.scrollAutorizacao}>
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
          style={estilos.AutorizacaoStyle.autorizacaoInput}
          placeholder="Gustavo Henrique de Aguiar Lopes"
          value={ficha.nome}
          onChangeText={(v)=> atualiza("nome",v)}
        ></TextInput>
        </View>
        <View>
          <Text>RA:</Text>
        <TextInput
          style={estilos.AutorizacaoStyle.autorizacaoInput}
          placeholder="219852"
          value={ficha.ra}
          onChangeText={(v)=> atualiza("ra",v)}
        ></TextInput>
        </View>
        <View>
          <Text>E-mail:</Text>
        <TextInput
          style={estilos.AutorizacaoStyle.autorizacaoInput}
          placeholder="gl219852@alunos.unisanta.br"
          value ={ficha.email}
          onChangeText={(v)=> atualiza("email",v)}
        ></TextInput>
        </View>
        <View>
          <Text>Curso:</Text>
        <TextInput
          style={estilos.AutorizacaoStyle.autorizacaoInput}
          placeholder="Engenharia da Computação"
          value={ficha.curso}
          onChangeText={(v)=> atualiza("curso",v)}
        ></TextInput>
        </View>
        <View>
          <Text>Matéria:</Text>
        <TextInput
          style={estilos.AutorizacaoStyle.autorizacaoInput}
          placeholder="Desenvolvimento de Aplicações Móveis"
          value={ficha.materia}
          onChangeText={(v)=> atualiza("materia",v)}
        ></TextInput>
        </View>
        <View>
          <Text>E-mail do professor responsável pelo projeto:</Text>
        <TextInput
          style={estilos.AutorizacaoStyle.autorizacaoInput}
          placeholder="Luis Ferrara"
          value={ficha.emailProfessor}
          onChangeText={(v)=> atualiza("emailProfessor",v)}
        ></TextInput>
        </View>
        <View>
          <Text>Nome do projeto:</Text>
        <TextInput
          style={estilos.AutorizacaoStyle.autorizacaoInput}
          placeholder="Aplicativo FabManager"
          value={ficha.Projeto}
          onChangeText={(v)=> atualiza("Projeto",v)}
        ></TextInput>
        </View>
        <View>
          <Text>Descrição do projeto</Text>
        <TextInput
          style={estilos.AutorizacaoStyle.autorizacaoInput}
          placeholder="Proposta de Aplicativo do InovFabLab"
          value={ficha.descricaoProjeto}
          onChangeText={(v)=> atualiza("descricaoProjeto",v)}
        ></TextInput>
        </View>
        <View>
          <Text>Integrantes (nome : e-mail)</Text>
        <TextInput
          style={estilos.AutorizacaoStyle.autorizacaoInput}
          placeholder="Nome - Email, Nome - Email"
          value={ficha.integrantes}
          onChangeText={(v)=> atualiza("integrantes",v)}
        ></TextInput>
        </View>
        <TouchableOpacity
              style={estilos.AutorizacaoStyle.botaoConfirma}
              activeOpacity={0.7}
              onPress={confirmaDados}
            >
              <Text style={estilos.AutorizacaoStyle.txt}>CONFIRMAR</Text>
            </TouchableOpacity>
      </ScrollView>
      </View>
    </View>
  );
}
export default Autorizacao;
