import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
export default function Index() {
  return (
    <View style={style.view}>
      <Text>Hello, React Native! How are you doing ? </Text>
      <Text> This is the default first screen </Text>
      <Link href="/login" style={style.link}>
        {" "}
        Login page
      </Link>
    </View>
  );
}
const style = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
  },
  link: {
    width: 100,
    heighvft: 10,
    backgroundColor: "tint",
    borderRadius: 8,
    textAlign: "center",
  },
});
