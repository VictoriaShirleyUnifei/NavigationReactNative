import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackRoutes from "./stackRoutes";
import Sobre from "../pages/Sobre";
import Contato from "../pages/Contato";

const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
     <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle:{
          backgroundColor: "#d6d6d6"
        },
        drawerActiveBackgroundColor: '#383d8f',
        drawerActiveTintColor: '#fff',
       // drawerInactiveBackgroundColor: '#ccc',
        drawerInactiveTintColor: '#000'
      }}
     >
      <Drawer.Screen 
        name="InicioStack"
        component={StackRoutes}
        options={{
          title: 'Inicio'
        }}
      />
      <Drawer.Screen 
        name="Sobre"
        component={Sobre}
      />
      <Drawer.Screen 
        name="Contato"
        component={Contato}
      />
     </Drawer.Navigator>
  );
}
