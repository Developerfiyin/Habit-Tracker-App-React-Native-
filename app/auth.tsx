import { KeyboardAvoidingView, Platform, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
export default function AuthScreen() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "android" ? "padding" : "height"}
    >
      <View>
        <Text>Create Account</Text>
        
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
        < Button mode="contained"> Sign Up</Button>

      </View>
    </KeyboardAvoidingView>
  );
}
