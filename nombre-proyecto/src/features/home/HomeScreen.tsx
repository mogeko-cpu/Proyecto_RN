import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1 }}>
          <Text>Bienvenido</Text>
          <Text>Uninorte</Text>
        </View>
        <Text>Icono2</Text>
      </View>

      <Text>Contenido</Text>
    </SafeAreaView>
  );
}
