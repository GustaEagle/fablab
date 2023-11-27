import React from 'react'
import estilos from "./style/estilos";
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
    View,
    TouchableHighlight,
    ScrollView,
    TextInput,
    Text,
    Image,
    ImageBackground,
    StyleSheet,
    Linking,
    TouchableOpacity,
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

function Header({ navigation,usuario }) {
    return (
        <View style={estilos.HeaderStyle.headerBackg}>
            <LinearGradient
                style={estilos.HeaderStyle.gradientHeader}
                colors={['#F00000', '#f80759']}
            />
            <View style={estilos.HeaderStyle.header}>
                <TouchableOpacity
                    style={estilos.HeaderStyle.iconeVoltar} 
                    activeOpacity={0.7}
                    onPress={() => navigation.goBack()}>
                    <Image resizeMode='contain' style={estilos.HeaderStyle.iconVoltar} source={require('./assets/imagens/botao-voltar.png')}></Image>
                </TouchableOpacity>
                <View style={estilos.HeaderStyle.profileBorder}>
                    <Image
                        style={estilos.HeaderStyle.profileImage}
                        resizeMode="cover"
                        source={require('./assets/imagens/pocoyo.png')}></Image>
                </View>
                <Text style={estilos.HeaderStyle.profileName}>{(usuario.usuario).charAt(0).toUpperCase() + (usuario.usuario).slice(1)}</Text>
            </View>
        </View>
    )
}
export default Header
