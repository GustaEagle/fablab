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
    ImgFabcoins:{
        resizeMode:'contain',
        width:50,
        height:50,
    }
})