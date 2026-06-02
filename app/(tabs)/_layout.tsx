import { Stack } from "expo-router";
import {Tabs} from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Home", headerShown: false }} />
      <Tabs.Screen name="login" options={{title: "Login", headerShown: false}} />
    </Tabs>
  );
}