// App.tsx

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/Home";
import Login from "./src/Login";
import Autorizacao from "./src/Autorizacao";
import Maquinas from "./src/Maquinas";
import Administracao from "./src/Administracao";
import AutorizacaoAdm from "./src/AutorizacaoAdm";
import Reserva from "./src/Reserva";
import { UsuariosProvider } from "./src/Context";

const Stack = createStackNavigator();

function App() {
  return (
    <UsuariosProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "Home",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              title: "Login",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Autorizacao"
            component={Autorizacao}
            options={{
              title: "Autorizacão",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Maquinas"
            component={Maquinas}
            options={{
              title: "Maquinas",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Administracao"
            component={Administracao}
            options={{
              title: "Administração",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="AutorizacaoAdm"
            component={AutorizacaoAdm}
            options={{
              title: "AutorizacaoAdm",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Reserva"
            component={Reserva}
            options={{
              title: "Reserva",
              headerShown: false,
          }}
        />
        </Stack.Navigator>
      </NavigationContainer>
    </UsuariosProvider>
  );
}

export default App;
