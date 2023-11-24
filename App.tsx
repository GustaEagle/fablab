import React from "react";
import {NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/Home";
import Login from "./src/Login";
import Autorizacao from "./src/Autorizacao";
import Maquinas from "./src/Maquinas";

import {
  
} from "react-native";

const Stack = createStackNavigator();


function App() {
  return (
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
            title: "Autorização",
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
