import React, { useState } from "react";
import estilos from "./style/estilos";
import Header from "./Header";
import {
  View,
  TextInput,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

function Administracao({ navigation, route }) {
  const { usuario } = route.params;
  const { usuarios } = route.params;
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([""]);

  const handleFilter = () => {
    const filtered = usuarios.filter((user) =>
      user.email.toUpperCase().includes(searchTerm.toUpperCase())
    );
    setFilteredUsers(filtered);
  };

  return (
    <View style={estilos.AdministracaoStyle.container}>
      <Header navigation={navigation} usuario={usuario} />
      <View style={estilos.AdministracaoStyle.infoContainer}>
        <View style={estilos.AdministracaoStyle.rowContainer}>
          <TextInput
            style={estilos.AdministracaoStyle.textInput}
            placeholder="Pesquisar por e-mail"
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
          />
          <TouchableOpacity
            style={estilos.AdministracaoStyle.lupa}
            onPress={handleFilter}
          >
            <Image
              resizeMode="cover"
              style={estilos.AdministracaoStyle.lupa}
              source={require('./assets/imagens/lupa.png')}
            />
          </TouchableOpacity>
        </View>
        <View>
          <ScrollView>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user, idx) => (
                <View  style={{width:'100%',backgroundColor:'blue',borderRadius:10,borderColor:'black',padding:10,}} key={idx}>
                  <Text>Usuario: {user.usuario}</Text>
                  <Text>Email: {user.email}</Text>
                  <Text>Fabcoins: {user.fabcoins} $</Text>
                </View>
              ))
            ) : (
              <Text>Nenhum usuário encontrado.</Text>
            )}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

export default Administracao;
