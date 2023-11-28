import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container:{
        backgroundColor: 'white',
        width:'100%',
        height:'100%',
        alignItems:'center',
    },
    viewTitle:{
        width:'80%',
        borderRadius:20,
        height:'5%',
        margin:10,
        backgroundColor: "#dc261e",
    },
    tituloMaquinas:{
        fontSize:20,
        textAlign:'center',
        fontWeight:'bold',
        color:'white',
    },
    imgMaquina:{
        width:'60%',
        height:'20%',
        borderColor:'black',
        borderWidth:5,
        borderRadius:20,
        resizeMode:'contain',
    },
    viewHorario:{
        flexGrow:1,
        width:'20%',
        height:'80%',
        alignItems:'center',
        margin:10,
        borderRadius:10,
        borderWidth:5,
        borderColor:'black'
    },
    botoes:{
        backgroundColor:'white',
        borderRadius:10,
        borderWidth:1,
    },
    textBotao:{
        fontSize:12,
    },
})