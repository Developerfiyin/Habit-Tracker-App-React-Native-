// import { Stack, useRouter } from "expo-router";
// import { useEffect } from "react";

// function RouteGuard({ children }: { children: React.ReactNode }) {
//   const router = useRouter();
//   const isAuth = false;

//   useEffect(() => {
//     if (!isAuth) {
//       router.replace("/auth");
//     }
//   });
//   return <>{children} </>;
// }

// export default function RootLayout() {
//   return (
//     <RouteGuard>
//       <Stack>
//         <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//       </Stack>
//     {/* </RouteGuard> */}
//   );
// }

import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";

const isAuth = false; // Replace with your real auth state later

export default function RootLayout() {
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    const inAuthScreen = segments[0] === "auth";

    if (!isAuth && !inAuthScreen) {
      router.replace("/auth"); // Send to login
    }

    if (isAuth && inAuthScreen) {
      router.replace("/(tabs)"); // Send to app if already logged in
    }
  }, [isAuth, segments]); // ← Dependency array is critical

  // Stack ALWAYS renders — guard logic is separate
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="auth" options={{ headerShown: false }} />
    </Stack>
  );
}
