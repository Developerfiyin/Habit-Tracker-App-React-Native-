// import { useState } from "react";
// import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
// import { Button, Text, TextInput, useTheme } from "react-native-paper";

// export default function AuthScreen() {
//   const [isSignUp, setIsSignUp] = useState<boolean>(false);
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [error, setError] = useState<string | null>(null);

//   const theme = useTheme();

//   const handleAuth = async () => {
//     if (!email || !password) {
//       setError("fill in all fields correctly before moving to the next stage.");
//       return;
//     }

//     if (password.length < 6) {
//       setError("Password must be at least 6 characters long.");
//       return;
//     }
//     setError(null);
//   };

//   const handleSubmitMode = () => {
//     setIsSignUp((prev) => !prev);
//   };

//   return (
//     <KeyboardAvoidingView
//       style={styles.container}
//       behavior={Platform.OS === "android" ? "padding" : "height"}
//     >
//       <View style={styles.content}>
//         <Text style={styles.text} variant="headlineMedium">
//           {isSignUp ? "Welcome Back!" : "Create Account"}
//         </Text>

//         <TextInput
//           style={styles.input}
//           label="Email"
//           autoCapitalize="none"
//           keyboardType="email-address"
//           placeholder="daniel@example.com"
//           mode="outlined"
//           onChangeText={(text) => setEmail(text)}
//         />

//         <TextInput
//           style={styles.input}
//           label="Password"
//           autoCapitalize="none"
//           secureTextEntry
//           placeholder="••••••••"
//           mode="outlined"
//           onChangeText={(text) => setPassword(text)}
//         />

//         {error && <Text style={{ color: theme.colors.error }}> {error} </Text>}

//         <Button
//           mode="contained"
//           onPress={handleSubmitMode}
//           style={styles.button}
//         >
//           {isSignUp ? "Sign Up" : "Sign In"}
//         </Button>

//         <Button
//           mode="text"
//           onPress={handleSubmitMode}
//           style={styles.switchModeText}
//         >
//           {isSignUp
//             ? "Already have an account ? Sign In"
//             : "Don't have an account ? Sign Up"}
//         </Button>
//       </View>
//     </KeyboardAvoidingView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     padding: 16,
//     backgroundColor: "#f5f5f5",
//   },
//   content: {
//     padding: 16,
//     justifyContent: "center",
//     flex: 1,
//   },
//   text: {
//     marginBottom: 24,
//     textAlign: "center",
//     fontSize: 24,
//     fontWeight: "bold",
//   },
//   input: {
//     marginBottom: 16,
//   },
//   button: {
//     marginTop: 8,
//   },
//   switchModeText: {
//     marginTop: 16,
//     textAlign: "center",
//     color: "#007bff",
//   },
// });

import { useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import { Button, Text, TextInput, useTheme } from "react-native-paper";

export default function AuthScreen() {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const theme = useTheme();

  const handleAuth = async () => {
    if (!email || !password) {
      setError("Fill in all fields correctly before moving to the next stage.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    setError(null);

    if (isSignUp) {
      // TODO: await signUp(email, password)
    } else {
      // TODO: await signIn(email, password)
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "android" ? "padding" : "height"}
    >
      <View style={styles.content}>
        <Text style={styles.text} variant="headlineMedium">
          {isSignUp ? "Create Account" : "Welcome Back!"}
        </Text>

        <TextInput
          style={styles.input}
          label="Email"
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="daniel@example.com"
          mode="outlined"
          onChangeText={(text) => setEmail(text)}
        />

        <TextInput
          style={styles.input}
          label="Password"
          autoCapitalize="none"
          secureTextEntry
          placeholder="••••••••"
          mode="outlined"
          onChangeText={(text) => setPassword(text)}
        />

        {error && <Text style={{ color: theme.colors.error }}>{error}</Text>}

        {/* ✅ Calls handleAuth to submit */}
        <Button mode="contained" onPress={handleAuth} style={styles.button}>
          {isSignUp ? "Sign Up" : "Sign In"}
        </Button>

        {/* ✅ Calls handleSubmitMode to toggle between modes */}
        <Button
          mode="text"
          onPress={() => setIsSignUp((prev) => !prev)}
          style={styles.switchModeText}
          labelStyle={{ color: "#007bff" }}
        >
          {isSignUp
            ? "Already have an account? Sign In"
            : "Don't have an account? Sign Up"}
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
  content: {
    padding: 16,
    justifyContent: "center",
    flex: 1,
  },
  text: {
    marginBottom: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 8,
  },
  switchModeText: {
    marginTop: 16,
  },
});
