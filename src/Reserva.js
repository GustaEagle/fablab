import React, { useState } from "react";
import estilos from "./style/estilos";
import Header from "./Header";
import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";


function Reserva({ navigation, route }) {
  const { usuario, machines } = route.params;
  const [isPressed, setisPressed] = useState(false);
  const [modal, setModal] = useState(false)
  const [estadoBotao, setestadoBotao] = useState(Array(28).fill(false))

  const Pressionado = (n) => {
    setestadoBotao((prevState) => {
      const novoEstado = [...prevState];
      novoEstado[n - 1] = !novoEstado[n - 1];
      return novoEstado;
    });
  };

  const Confirma = () => {
    const valor = Number(12.5);
    const selecionados = estadoBotao.filter((state) => state === true);
    const total = valor * Number(selecionados.length);
    return total.toFixed(2);
  };

  const Finalizar = (total) => {
    if (usuario.fabcoins >= total) {
      usuario.fabcoins = usuario.fabcoins - total
      alert('Reserva feita com sucesso!')
    }
    else {
      alert('Saldo Insuficiente, preencha a ficha para solicitar fabcoins')
    }
    setModal(false)
    navigation.navigate("Home")
  }


  return (

    <View style={estilos.ReservaStyle.containerReserva}>
      <Header navigation={navigation} usuario={usuario} />
      <View style={estilos.ReservaStyle.viewTitle}>
        <Text style={estilos.ReservaStyle.tituloMaquinas}>{machines.nome}</Text>
      </View>

      <Image style={estilos.ReservaStyle.imgMaquina} source={machines.img} resizeMode='center'></Image>
      <View style={estilos.ReservaStyle.viewScroll}>
      <ScrollView style={estilos.ReservaStyle.scroll}>
          <TouchableOpacity style={[estilos.ReservaStyle.botoes, isPressed ? estilos.ReservaStyle.pressionado : null]} onPress={() => { Pressionado(1) }}>
            <Text style={estilos.ReservaStyle.textBotao} >08:00-08:30</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[estilos.ReservaStyle.botoes, isPressed ? estilos.ReservaStyle.pressionado : null]} onPress={() => { Pressionado(2) }}>
            <Text style={estilos.ReservaStyle.textBotao}>08:30-09:00</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[estilos.ReservaStyle.botoes, isPressed ? estilos.ReservaStyle.pressionado : null]} onPress={() => { Pressionado(3) }}>
            <Text style={estilos.ReservaStyle.textBotao}>09:00-09:30</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[estilos.ReservaStyle.botoes, isPressed ? estilos.ReservaStyle.pressionado : null]} onPress={() => { Pressionado(4) }}>
            <Text style={estilos.ReservaStyle.textBotao}>09:30-10:00</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[estilos.ReservaStyle.botoes, isPressed ? estilos.ReservaStyle.pressionado : null]} onPress={() => { Pressionado(5) }}>
            <Text style={estilos.ReservaStyle.textBotao}>10:00-10:30</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[estilos.ReservaStyle.botoes, isPressed ? estilos.ReservaStyle.pressionado : null]} onPress={() => { Pressionado(6) }}>
            <Text style={estilos.ReservaStyle.textBotao}>10:30-11:00</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[estilos.ReservaStyle.botoes, isPressed ? estilos.ReservaStyle.pressionado : null]} onPress={() => { Pressionado(7) }}>
            <Text style={estilos.ReservaStyle.textBotao}>11:00-11:30</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[estilos.ReservaStyle.botoes, isPressed ? estilos.ReservaStyle.pressionado : null]} onPress={() => { Pressionado(8) }}>
            <Text style={estilos.ReservaStyle.textBotao}>11:30-12:00</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[estilos.ReservaStyle.botoes, isPressed ? estilos.ReservaStyle.pressionado : null]} onPress={() => { Pressionado(9) }}>
            <Text style={estilos.ReservaStyle.textBotao}>12:00-12:30</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[estilos.ReservaStyle.botoes, isPressed ? estilos.ReservaStyle.pressionado : null]} onPress={() => { Pressionado(10) }}>
            <Text style={estilos.ReservaStyle.textBotao}>12:30-13:00</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[estilos.ReservaStyle.botoes, isPressed ? estilos.ReservaStyle.pressionado : null]} onPress={() => { Pressionado(11) }}>
            <Text style={estilos.ReservaStyle.textBotao}>13:00-13:30</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[estilos.ReservaStyle.botoes, isPressed ? estilos.ReservaStyle.pressionado : null]} onPress={() => { Pressionado(12) }}>
            <Text style={estilos.ReservaStyle.textBotao}>13:30-14:00</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[estilos.ReservaStyle.botoes, isPressed ? estilos.ReservaStyle.pressionado : null]} onPress={() => { Pressionado(13) }}>
            <Text style={estilos.ReservaStyle.textBotao}>14:00-14:30</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[estilos.ReservaStyle.botoes, isPressed ? estilos.ReservaStyle.pressionado : null]} onPress={() => { Pressionado(14) }}>
            <Text style={estilos.ReservaStyle.textBotao}>14:30-15:00</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[estilos.ReservaStyle.botoes, isPressed ? estilos.ReservaStyle.pressionado : null]} onPress={() => { Pressionado(15) }}>
            <Text style={estilos.ReservaStyle.textBotao}>15:00-15:30</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[estilos.ReservaStyle.botoes, isPressed ? estilos.ReservaStyle.pressionado : null]} onPress={() => { Pressionado(16) }}>
            <Text style={estilos.ReservaStyle.textBotao}>15:30-16:00</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[estilos.ReservaStyle.botoes, isPressed ? estilos.ReservaStyle.pressionado : null]} onPress={() => { Pressionado(17) }}>
            <Text style={estilos.ReservaStyle.textBotao}>16:00-16:30</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[estilos.ReservaStyle.botoes, isPressed ? estilos.ReservaStyle.pressionado : null]} onPress={() => { Pressionado(18) }}>
            <Text style={estilos.ReservaStyle.textBotao}>16:30-17:00</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[estilos.ReservaStyle.botoes, isPressed ? estilos.ReservaStyle.pressionado : null]} onPress={() => { Pressionado(19) }}>
            <Text style={estilos.ReservaStyle.textBotao}>17:00-17:30</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[estilos.ReservaStyle.botoes, isPressed ? estilos.ReservaStyle.pressionado : null]} onPress={() => { Pressionado(20) }}>
            <Text style={estilos.ReservaStyle.textBotao}>17:30-18:00</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[estilos.ReservaStyle.botoes, isPressed ? estilos.ReservaStyle.pressionado : null]} onPress={() => { Pressionado(21) }}>
            <Text style={estilos.ReservaStyle.textBotao}>18:00-18:30</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[estilos.ReservaStyle.botoes, isPressed ? estilos.ReservaStyle.pressionado : null]} onPress={() => { Pressionado(22) }}>
            <Text style={estilos.ReservaStyle.textBotao}>18:30-19:00</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[estilos.ReservaStyle.botoes, isPressed ? estilos.ReservaStyle.pressionado : null]} onPress={() => { Pressionado(23) }}>
            <Text style={estilos.ReservaStyle.textBotao}>19:00-19:30</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[estilos.ReservaStyle.botoes, isPressed ? estilos.ReservaStyle.pressionado : null]} onPress={() => { Pressionado(24) }}>
            <Text style={estilos.ReservaStyle.textBotao}>19:30-20:00</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[estilos.ReservaStyle.botoes, isPressed ? estilos.ReservaStyle.pressionado : null]} onPress={() => { Pressionado(25) }}>
            <Text style={estilos.ReservaStyle.textBotao}>20:00-20:30</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[estilos.ReservaStyle.botoes, isPressed ? estilos.ReservaStyle.pressionado : null]} onPress={() => { Pressionado(26) }}>
            <Text style={estilos.ReservaStyle.textBotao}>20:30-21:00</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[estilos.ReservaStyle.botoes, isPressed ? estilos.ReservaStyle.pressionado : null]} onPress={() => { Pressionado(27) }}>
            <Text style={estilos.ReservaStyle.textBotao}>21:00-21:30</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[estilos.ReservaStyle.botoes, isPressed ? estilos.ReservaStyle.pressionado : null]} onPress={() => { Pressionado(28) }}>
            <Text style={estilos.ReservaStyle.textBotao}>21:30-22:00</Text>
          </TouchableOpacity>
      </ScrollView>
      </View>
      <TouchableOpacity style={estilos.ReservaStyle.confirmButton}>
        <Text style={estilos.ReservaStyle.confirmTxt} onPress={() => Finalizar(Number(Confirma()))}>CONFIRMAR RESERVA</Text>
      </TouchableOpacity>
    </View>
  )

}

export default Reserva
