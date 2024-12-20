import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import Inicio from "./src/pages/Inicio";
import Sobre from "./src/pages/Sobre";
import Contato from "./src/pages/Contato";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#fff",
          tabBarStyle:{
            backgroundColor: "#202225",
            borderTopWidth: 0
          }
        }}
      >
        <Tab.Screen 
          name="Inicio"
          component={Inicio}
          options={{
            //tabBarLabel: 'Tela início'
            tabBarIcon: ({color, size}) => {
              return <Ionicons name="home" size={size} color={color}/>
            }
          }}
        />
         <Tab.Screen 
          name="Sobre"
          component={Sobre}
          options={{
            tabBarIcon: ({color, size}) => {
              return <Ionicons name="document-outline" size={size} color={color}/>
            }
          }}
        />
         <Tab.Screen 
          name="Contato"
          component={Contato}
          options={{
            //headerShown: false,
            tabBarIcon: ({color, size}) => {
              return <Ionicons name="call-outline" size={size} color={color}/>
            }
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
