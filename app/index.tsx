import { Text, View } from "react-native";
import { Link } from "expo-router";
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
      <Text>Hello, React Native! How are you doing ?  </Text>
      <Text> This is the default first screen </Text>
      <Link href={"/_sitemap"}> Login page</Link>
    </View>
  );
}
