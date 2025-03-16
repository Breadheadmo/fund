import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Input, Button, Text, Icon } from 'react-native-elements';
import { StackNavigationProp } from '@react-navigation/stack';
import { COLORS } from '../constants/colors';
import LogoPlaceholder from '../components/LogoPlaceholder';

// Define navigation props type
type SignInScreenProps = {
  navigation: StackNavigationProp<any>;
};

// Sign In Screen Component - Handles user authentication
const SignInScreen: React.FC<SignInScreenProps> = ({ navigation }) => {
  const handleSignIn = () => {
    // Add your sign-in logic here
    // After successful sign-in:
    navigation.replace('Home');
  };

  return (
    <View style={styles.container}>
      <LogoPlaceholder />
      {/* App logo */}
      <Image
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Login form */}
      <View style={styles.form}>
        {/* Username input */}
        <Input
          placeholder="Username e.g 0771232546"
          containerStyle={styles.input}
          inputContainerStyle={styles.inputContainer}
        />

        {/* Password input */}
        <Input
          placeholder="Password"
          secureTextEntry
          containerStyle={styles.input}
          inputContainerStyle={styles.inputContainer}
        />

        {/* Sign in button */}
        <Button
          title="Sign in"
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.button}
          onPress={handleSignIn}
        />

        {/* Sign up link */}
        <Text 
          style={styles.signUpLink}
          onPress={() => navigation.navigate('SignUp')}
        >
          Don't have an account? Sign up
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    padding: 20,
  },
  logo: {
    width: 150,
    height: 60,
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 40,
  },
  form: {
    flex: 1,
    width: '100%',
  },
  input: {
    marginBottom: 15,
  },
  inputContainer: {
    borderRadius: 5,
    backgroundColor: COLORS.white,
    borderBottomWidth: 0,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: COLORS.secondary,
    height: 50,
    borderRadius: 5,
  },
  signUpLink: {
    textAlign: 'center',
    marginTop: 20,
    color: COLORS.secondary,
    textDecorationLine: 'underline',
  },
});

export default SignInScreen;