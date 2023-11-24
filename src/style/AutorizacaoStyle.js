import { StyleSheet } from "react-native"
export default StyleSheet.create({
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
  botaoConfirma: {
    minWidth: 140,
    minHeight: 40,
    backgroundColor: "#9e2626",
    color: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    padding: 2,
    justifyContent: "center",
  },
  txt: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    justifyContent: "center",
    textAlign: "center",
  },
  //FIM TELA AUTORIZAÇÃO
})