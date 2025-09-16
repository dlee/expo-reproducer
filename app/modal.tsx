import { router } from "expo-router";
import { StyleSheet } from "react-native";

import { ThemedView } from "@/components/themed-view";
import { ModalContent } from "@/components/modal-content";

export default function ModalScreen() {
  return (
    <ThemedView style={styles.container}>
      <ModalContent
        title="Expo Router Modal"
        onClose={() => router.dismissTo("/")}
        backgroundColor="white"
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6b8b6b",
  },
});
