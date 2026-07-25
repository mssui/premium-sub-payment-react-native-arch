import { useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import { signup } from '../../app/integrations/firebase/auth';

export default function SignupScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      await signup(email, password);
      navigation.navigate('Login');
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Email" onChangeText={setEmail} />
      <TextInput placeholder="Password" secureTextEntry onChangeText={setPassword} />

      <Button title="Sign Up" onPress={handleSignup} />
    </View>
  );
}