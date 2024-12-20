import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Inicio from "../pages/Inicio";
import Detalhes from "../pages/Detalhes";

const Stack = createNativeStackNavigator();

export default function StackRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Inicio"
                component={Inicio}
                options={{
                    headerShown: false
                }}
            />
             <Stack.Screen
                name="Detalhes"
                component={Detalhes}
            />
        </Stack.Navigator>
    )
}