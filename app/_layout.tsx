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
//   return <>{children}</>;
// }

// export default function RootLayout() {
//   return (
//     <RouteGuard>
//       <Stack>
//         <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//       </Stack>
//     </RouteGuard>
//   );
// }
 import { Link } from "expo-router";
 import { StyleSheet, Text, View } from "react-native";
 export default function IndexScreen() {
   return (
     <View style={style.view}>
       <Text>Hello, React Native </Text>
       <Text> This is the default first screen </Text>
       <Link href="/(tabs)/login" style={style.link}>
         {" "}
         {/* Login page */}
       </Link>
    </View>
   );
 }
 const style = StyleSheet.create({
   view: {
     flex: 1,
     justifyContent: "center",
     alignItems: "center",
   },
   link: {
     width: 100,
     height: 20,
     backgroundColor: "red",
     borderRadius: 8,
     textAlign: "center",
   },
 });

