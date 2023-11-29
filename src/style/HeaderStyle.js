import { StyleSheet,StatusBar } from "react-native"
const statusBarHeight = StatusBar.currentHeight;
export default StyleSheet.create({
    headerBackg: {
        width: '100%',
        height: statusBarHeight + 50,
        borderBottomWidth: 2,
    },
    gradientHeader: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        paddingTop: statusBarHeight,
        alignItems: 'center',
        // justifyContent:'flex-end'
    },
    profileBorder: {
        marginLeft: 15,
        height: 42,
        width: 42,
        borderRadius: 40,
        backgroundColor: 'white',
        borderWidth: 1,
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 40
    },
    profileName: {
        textAlign: 'center',
        marginLeft: 12,
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    },
    iconeVoltar: {
        width: '10%',
        height: '80%',
    },
    iconVoltar: {
        width: 45,
        height: 45,
        justifyContent: "center",
        flex: 1
      },
    viewFabcoins: {
        width: '100%',
        height: '100%',
        paddingTop: statusBarHeight,
        alignItems: 'center',
    },
    imgFabcoins:{
        resizeMode:'contain',
        width:50,
        height:50,
    },
    fabcoinText:{
        fontSize:16,
        fontWeight:'600',
        color:'white',
        marginLeft:-7
    },
    iconeAutorizacao: {
        marginLeft:'auto',
        marginRight:10,
        width: '10%',
        height: '80%',
        justifyContent:'center'
    },
    iconAutorizacao: {
        width: 45,
        height: 45,
        justifyContent: "center",
   },
})