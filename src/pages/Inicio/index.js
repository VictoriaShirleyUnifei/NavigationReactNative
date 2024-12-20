import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Inicio() {
  const navigation = useNavigation();

  const navegaDetalhes = () => {
    navigation.navigate("Detalhes");
  }

  return (
    <View style={styles.container}>
      <Text>Tela de Início</Text>
      <View style={styles.buttons}>
        <Button
          style={styles.button}
          title="Ir para Detalhes"
          onPress={navegaDetalhes}
        />
         <Button
          style={styles.button}
          title="Abrir drawer"
          onPress={() => navigation.openDrawer()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttons:{
    display: 'flex',
    gap: 6,
    marginTop: 6
  }
});
