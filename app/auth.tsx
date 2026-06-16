import { KeyboardAvoidingView, Platform, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
export default function AuthScreen() {
    const [email, setEmail] = useState<boolean>(false);
    const [password, setPassword] = useState("");
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
        <Button mode="contained"> Sign Up</Button>
        <Button mode="text">Already have an account? Sign In</Button>

      </View>
    </KeyboardAvoidingView>
  );
}
