import { StyleSheet, Pressable, Text, View, Modal } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { useState } from "react";
import { ModalContent } from "@/components/modal-content";

export default function HomeScreen() {
  const [showRNModal, setShowRNModal] = useState(false);

  return (
    <SafeAreaView style={styles.container} edges={[]}>
      <View style={styles.content}>
        <Pressable style={styles.button} onPress={() => router.push("/modal")}>
          <Text style={styles.buttonText}>Expo Router Modal</Text>
        </Pressable>

        <Pressable
          style={[styles.button, styles.rnModalButton]}
          onPress={() => setShowRNModal(true)}
        >
          <Text style={styles.buttonText}>React Native Modal</Text>
        </Pressable>


        <Modal
          visible={showRNModal}
          animationType="fade"
          transparent={true}
          onRequestClose={() => setShowRNModal(false)}
        >
          <View style={styles.modalContainer}>
            <ModalContent
              title="React Native Modal"
              onClose={() => setShowRNModal(false)}
            />
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8b6b6b",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  rnModalButton: {
    marginTop: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
