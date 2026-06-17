import { useState } from "react";
import { KeyboardAvoidingView, Platform, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
export default function AuthScreen() {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSumbit = () => {
    setIsSignUp((prev) => !prev);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "android" ? "padding" : "height"}
    >
      <View>
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
        <Button mode="contained"> Sign Up</Button>
        <Button mode="text">Already have an account? Sign In</Button>
      </View>
    </KeyboardAvoidingView>
  );
}
