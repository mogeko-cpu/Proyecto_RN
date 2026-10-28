import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 22.67, fontWeight: "bold" }}>
            Bienvenido
          </Text>
          <Text style={{ fontSize: 14, color: "gray" }}>Uninorte</Text>
        </View>
        <Ionicons name="notifications-outline" size={28} color="black" />
      </View>

      <Text>Contenido</Text>
    </SafeAreaView>
  );
}
