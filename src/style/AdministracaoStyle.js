import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  textInput: {
    flex: 4,
    height: 50,
    width: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    padding:10,
    color:'red',
    fontSize:16
  },
  lupa: {
    flex: 1,
    width: 40,
    height: 40,
    resizeMode: 'contain'
  }
})