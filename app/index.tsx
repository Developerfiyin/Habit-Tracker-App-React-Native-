import { Link } from "expo-router";
import { Text, View } from "react-native";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "orange",
      }}
    >
      <Text>Hello, React Native! How are you doing ? </Text>
      <Text> This is the default first screen </Text>
      <Link
        href="/login"
        style={{
          width: 100,
          height: 50,
          backgroundColor: "tint",
          borderRadius: 8,
          textAlign: "center",
        }}
      >
        {" "}
        Login page
      </Link>
    </View>
  );
}
