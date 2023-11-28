import { StyleSheet } from "react-native"
export default StyleSheet.create({
    viewMaquinas: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    image: {
        width: '90%',
        height: 200,
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 10,
    },
    scrollMaquinas: {
        padding: 10,
        marginBottom: 20,
        width: '100%',
    },
    grid: {
        width: '90%',
        height: 300,
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 25,
        padding: 5,
        marginTop: 10,
        marginBottom: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    info: {
        flexDirection: 'row',
        height: 25,
        padding: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerMaquinas: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    title:{
        fontSize:18,
        fontWeight:'600',
        color:'black'
    },
    rowContainer:{
        flexDirection:'row',
    },
    subTitle:{
        color:'blue',
        fontSize:15,
        fontWeight:'500',
    },
    botoes:{
        width:100,
        height:50,
        marginTop:10,
        borderWidth:1.5,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15,
        backgroundColor:'#dddddd',
        marginHorizontal:10
    },
    image2: {
        width: '50%',
        height: 200,
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 10,
    },
})