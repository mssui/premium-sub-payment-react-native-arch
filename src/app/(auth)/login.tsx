import { googleAuthConfig } from "@/integrations/firebase/config";
import * as AuthSession from "expo-auth-session";
import * as Google from "expo-auth-session/providers/google";
import { router } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import { useEffect, useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { completeGoogleLogin, login } from "../../integrations/firebase/auth";

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await login(
        email,
        password
      );
    } catch (error) {
      console.error(error);
    }
  };

  const redirectUri = AuthSession.makeRedirectUri();

  console.log("Redirect URI:", redirectUri);

  const [request, response, promptAsync] =
    Google.useIdTokenAuthRequest({
      clientId:
        googleAuthConfig,
      redirectUri,
    });

  useEffect(() => {
    const signIn = async () => {
      if (response?.type !== "success") {
        return;
      }

      console.log("Response type:", response?.type);
      console.log("Response params:", response?.params);
      console.log("Response error:", response?.error);

      const idToken = response.params?.id_token;

      if (!idToken) {
        console.error("No ID token found");
        return;
      }

      try {
        const userCredential =
          await completeGoogleLogin(
            idToken
          );

        console.log(
          "Firebase user:",
          userCredential.user.email
        );
      } catch (error) {
        console.error(
          "Firebase sign-in failed:",
          error
        );
      }
    };

    signIn();
  }, [response]);


  return (
    <View className="flex-1 bg-gray-100 justify-center align-center px-6">
      <Text className="text-m font-normal text-blue-300">
        Login or Create a new account!
      </Text>
      <Button
        title="Continue with Google"
        disabled={!request}
        onPress={() => promptAsync()}
      />
      <TextInput placeholder="Email" className="text-m font-normal border-2 border-spacing-2  border-solid border-indigo-500 rounded-md" onChangeText={setEmail} />
      <TextInput placeholder="Password" className="text-m font-normal border-2 border-spacing-2  border-solid border-indigo-500 rounded-md" secureTextEntry onChangeText={setPassword} />

      <Button title="Login" onPress={handleLogin} />

      <Text className="text-m font-normal text-blue-300">
        Create a new account!
      </Text>
      <Button title="Go to Signup" onPress={() => router.push("/signup")} />

      <Text className="text-s font-normal text-blue-300">
        Forgot password?
      </Text>
    </View>
  );
}
