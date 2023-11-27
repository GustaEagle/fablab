import { StyleSheet } from "react-native"
export default StyleSheet.create({
  // INICIO TELA DE LOGIN ------------------------------------------------------------------------------------------------
  fundo: {
    flexGrow: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    opacity: 1,
    width: "100%",
    height: "100%",
  },
  viewLoginTopo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 30,
    flex: 0.5

  },
  loginLabel: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
    position: "absolute",
    top: 20,
  },
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
    minWidth: 300,
    height: 480,
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
  loginViewGreyCadastro:{
    backgroundColor: "#eee",
    minWidthwidth: "80%",
    height: "70%",
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,

  },
  rowIcon: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
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
  underline: {
    marginTop: 15,
    color: "#00f",
    fontSize: 20,
    textDecorationLine: "underline",
    justifyContent: "center",
    textAlign: "center",
  },
  iconVoltar: {
    width: 45,
    height: 45,
    justifyContent: "center",
    flex: 1
  },
  txt: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    justifyContent: "center",
    textAlign: "center",
  },
  // FIM DA TELA DE LOGIN
})