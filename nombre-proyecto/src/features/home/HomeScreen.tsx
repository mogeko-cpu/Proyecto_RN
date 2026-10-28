import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View>
        <Text>Header</Text>
        <Text>Contenido</Text>
      </View>
    </SafeAreaView>
  );
}
