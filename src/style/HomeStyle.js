 // INICIO TELA HOME ------------------------------------------------------------------------------------------------
import { StyleSheet } from "react-native"
 export default StyleSheet.create({
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
 })

 