import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  infoContainer: {
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
    marginBottom: 10,
  },
  textInput: {
    flex: 4,
    height: 50,
    width: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
    color: 'red',
    fontSize: 16
  },
  lupa: {
    flex: 1,
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  scrollViewArea: {
    width: '95%',
    height: '76%',
    backgroundColor: 'rgba(355,0,0,0.5)',
    borderRadius: 10,
    borderWidth: 3,
    padding: 15,
  },
  scrollView: {
    flex: 1,
    width: '100%',
    height: '80%',
  },
  grid: {
    width: '100%',
    backgroundColor: 'white',
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 20,
    padding: 20,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileBorder: {
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
  info: {
    justifyContent:'center',
    alignItems:'flex-start',
    marginLeft:10,
    width:'65%',
  },
  fabcoin: {
    width: 35,
    height: 35
  },
  name: {
    fontSize: 17,
    color: 'red',
    fontWeight: '800'
  },
  emailText: {
    fontSize: 16,
    fontWeight:'500'
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft:-10,
  },
  fabcoinText:{
    fontSize: 17,
    color: 'red',
    fontWeight: '800'
  }
}
)