import { useState } from "react";
import { KeyboardAvoidingView, Platform, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { StyleSheet } from "react-native"; 

export default function AuthScreen() {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [email, setEmail] = useState("");

  const handleSubmitMode = () => {
    setIsSignUp((prev) => !prev);
  };

  return (
    <KeyboardAvoidingView style={styles.container}
      behavior={Platform.OS === "android" ? "padding" : "height"}
    >
      <View style={styles.content}>
        <Text>{isSignUp ? "Welcome Back!" : "Create Account"}</Text>

        <TextInput
          label="Email"
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="daniel@example.com"
          mode="outlined"
        />

        <TextInput
          label="Password"
          autoCapitalize="none"
          secureTextEntry
          placeholder="••••••••"
          mode="outlined"
        />
        <Button mode="contained" onPress={handleSubmitMode}>
          {isSignUp ? "Sign Up" : "Sign In"}
        </Button>
        <Button mode="text" onPress={handleSubmitMode}>
          {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#f5f5f5",
  }, 
  content : {
    backgroundColor: "red",
     padding: 16,
     borderRadius: 8,
     flex: 1,
  }, 
});