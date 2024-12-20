import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import StackRoutes from "./stackRoutes";
import Sobre from "../pages/Sobre";
import Contato from "../pages/Contato";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
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
          name="InicioStack"
          component={StackRoutes}
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
  );
}
