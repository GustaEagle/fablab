import React from "react";
import { StyleSheet, StatusBar } from "react-native";

const estilos = StyleSheet.create({
  // INICIO TELA HOME ------------------------------------------------------------------------------------------------
  fundo: {
    flexGrow: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    opacity: 1,
    width: "100%",
    height: "100%",
  },

  logo: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },

  view: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    spacing: 20,
  },

  botao1: {
    borderRadius: 20,
    borderColor: "#fff",
    backgroundColor: "#2b156c",
    width: 180,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderWidth: 2,
  },

  botao2: {
    borderRadius: 20,
    borderColor: "#fff",
    backgroundColor: "#dc261e",
    width: 180,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderWidth: 2,
  },

  txt: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    justifyContent: "center",
    textAlign: "center",
  },

  view2: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

  unisanta: {
    width: 75,
    height: 75,
    resizeMode: "contain",
    position: "absolute",
    bottom: 3,
    right: 3,
  },
  // FIM TELA HOME

  // INICIO TELA DE LOGIN ------------------------------------------------------------------------------------------------
  loginInp: {
    width: 150,
    height: 40,
    borderRadius: 15,
    borderWidth: 2,
    backgroundColor: "#fff",
    padding: 10,
    color: "#000",
  },
  viewLogin: {
    backgroundColor: "#fff",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  viewLoginWhite: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    minWidth: 280,
    height: 400,
    textAlign: "center",
    borderRadius: 30,
    borderWidth: 2,
    opacity: 1,
    position: "absolute",
  },
  loginLabelInput: {
    fontSize: 16,
    position: "relative",
  },
  loginImageInput: {
    width: 30,
    height: 30,
    margin: 8,
  },
  loginViewGrey: {
    backgroundColor: "#eee",
    minWidthwidth: "80%",
    height: "60%",
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
  loginConfirma: {
    minWidth: 140,
    minHeight: 40,
    backgroundColor: "#9e2626",
    color: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    padding: 2,
    justifyContent: "center",
  },
  underline: {
    marginTop: 15,
    color: "#00f",
    fontSize: 20,
    textDecorationLine: "underline",
    justifyContent: "center",
    textAlign: "center",
  },
  // FIM DA TELA DE LOGIN

  //INICIO TELA AUTORIZAÇÃO ------------------------------------------------------------------------------------------------

  //VIEW GERAL RED AUTORIZAÇÃO
  viewAutorizacao: {
    backgroundColor: "#9e2626",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  //CONFIGURAÇÕES DO SCROLL
  scrollAutorizacao: {
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
  },
  //ICONE DE VOLTAR
  iconVoltar: {
    width: 45,
    height: 45,
    justifyContent: "center",
    flex: 1
  },
  //TEXT DO TOPO
  autorizacaoTitle: {
    color: '#fff',
    fontSize: 23,
    flex: 5,
  },
  //VIEW COM BOTÃO DE VOLTAR E TEXT
  viewAutorizacaoTopo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 30,

  },
  //TEXT INPUT DA FICHA
  autorizacaoInput: {
    borderRadius: 15,
    borderWidth: 3,
    backgroundColor: "white",
    padding: 10,
    margin: 10,
    color: "#000",
    minHeight: 40,
    borderColor: '#2b156c'
  },
  //PARTE BRANCA
  limiteScroll: {
    height: '80%',
    borderWidth: 7,
    borderRadius: 25,
    borderColor: "#2b156c",
    backgroundColor: 'white',
    width: '90%',
    maxHeight: '95%',
    borderRadius: 20,
    padding: 15,
  },
  //FIM TELA AUTORIZAÇÃO
  viewMaquinas: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '90%',
    height: 200,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
  },
  scrollMaquinas: {
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
  },
  grid: {
    width: '100%',
    height:300,
    alignItems:'center',
    borderWidth:2,
    borderRadius:25,
    padding:5,
    marginTop:10,
    marginBottom:20,
  },
  info:{
    flexDirection:'row',
    height: 25,
    padding: 0,
    justifyContent:'center',
    alignItems:'center',
  },
  containerMaquinas:{
    width:'100%',
    height:'90%',
    alignItems:'center',
  },
});

export default estilos;


