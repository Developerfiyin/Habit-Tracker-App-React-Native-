import { Redirect } from "expo-router";

const isAuth = false;

export default function Index() {
  return <Redirect href={isAuth ? "/(tabs)" : "/auth"} />;
}