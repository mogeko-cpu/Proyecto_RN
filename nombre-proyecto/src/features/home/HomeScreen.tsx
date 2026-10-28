import React from "react";
import { FlatList, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const data = Array.from({ length: 20 }, (_, i) => ({
    id: String(i),
    title: `Elemento ${i + 1}`,
  }));
  return (
    <SafeAreaView>
      <View style={{ flexDirection: "row", padding: 9, paddingBottom: 10 }}>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 22.67, fontWeight: "bold" }}>
            Bienvenido
          </Text>
          <Text style={{ fontSize: 14, color: "gray" }}>Uninorte</Text>
        </View>
        <Ionicons name="notifications-outline" size={28} color="black" />
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </SafeAreaView>
  );
}
