import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Inicio() {
  const navigation = useNavigation();

  const navegaSobre = () => {
    navigation.navigate("Sobre");
  }

  return (
    <View style={styles.container}>
      <Text>Tela de Início</Text>
      <Button
        style={styles.button}
        title="Ir para Sobre"
        onPress={navegaSobre}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
