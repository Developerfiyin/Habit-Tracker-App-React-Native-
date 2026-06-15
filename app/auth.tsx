import { KeyboardAvoidingView, Platform, View } from "react-native";

 
 export default function AuthScreen() {
    return (
        <KeyboardAvoidingView behavior={Platform.OS ==="android" ? "padding" : "height"}>
            
            <View> </View>
             </KeyboardAvoidingView>
    )
 }