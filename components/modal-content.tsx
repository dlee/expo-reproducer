import { Pressable, StyleSheet, Text, View } from "react-native";

interface ModalContentProps {
  title: string;
  onClose: () => void;
  closeButtonText?: string;
  backgroundColor?: string;
}

export function ModalContent({
  title,
  onClose,
  closeButtonText = "Close",
  backgroundColor = "white",
}: ModalContentProps) {
  return (
    <View style={[styles.content, { backgroundColor }]}>
      <Text style={styles.title}>{title}</Text>
      <Pressable style={styles.closeButton} onPress={onClose}>
        <Text style={styles.closeButtonText}>{closeButtonText}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 20,
    borderRadius: 8,
    alignItems: "center",
    minWidth: 200,
  },
  title: {
    fontSize: 18,
    marginBottom: 15,
    color: "black",
    fontWeight: "bold",
  },
  closeButton: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 6,
  },
  closeButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});