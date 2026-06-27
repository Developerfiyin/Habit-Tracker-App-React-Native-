import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Welcome Home! 🎉</Text>
      <Text variant="bodyMedium" style={styles.subtitle}>
        This is your main screen.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  subtitle: {
    color: "#666",
  },
});
