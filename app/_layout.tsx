import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";

const isAuth = false;

export default function RootLayout() {
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    const inAuthScreen = segments[0] === "auth";

    if (!isAuth && !inAuthScreen) {
      router.replace("/auth");
    }

    if (isAuth && inAuthScreen) {
      router.replace("/(tabs)");
    }
  }, [segments]);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="auth" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
