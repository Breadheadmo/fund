import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
import { StackNavigationProp } from '@react-navigation/stack';
import { COLORS } from '../constants/colors';
import LogoPlaceholder from '../components/LogoPlaceholder';

// Define types for user registration
type UserType = 'funder' | 'youth';

type SignUpScreenProps = {
  navigation: StackNavigationProp<any>;
};

// Sign Up Screen Component - Handles user registration
const SignUpScreen: React.FC<SignUpScreenProps> = ({ navigation }) => {
  // Add state for user type selection
  const [userType, setUserType] = useState<UserType>('funder');

  const handleSignUp = () => {
    // Add your sign-up logic here
    // After successful sign-up:
    navigation.replace('SignIn');
  };

  return (
    <View style={styles.container}>
      <LogoPlaceholder />
      {/* Rest of your sign up form */}
      <View style={styles.form}>
        {/* Username input */}
        <Input
          placeholder="Username e.g 0771232546"
          containerStyle={styles.input}
          inputContainerStyle={styles.inputContainer}
        />

        {/* Email input */}
        <Input
          placeholder="Email Address"
          containerStyle={styles.input}
          inputContainerStyle={styles.inputContainer}
          keyboardType="email-address"
        />

        {/* Password input */}
        <Input
          placeholder="Password"
          secureTextEntry
          containerStyle={styles.input}
          inputContainerStyle={styles.inputContainer}
        />
        
        {/* User type selection */}
        <Text style={styles.registerText}>Register as:</Text>
        <View style={styles.radioContainer}>
          {/* Funder selection button */}
          <Button
            title="Funder"
            type={userType === 'funder' ? 'solid' : 'outline'}
            onPress={() => setUserType('funder')}
            buttonStyle={[styles.radioButton, userType === 'funder' && styles.radioButtonActive]}
            titleStyle={userType === 'funder' ? styles.radioTextActive : styles.radioText}
          />
          {/* Youth selection button */}
          <Button
            title="Youth"
            type={userType === 'youth' ? 'solid' : 'outline'}
            onPress={() => setUserType('youth')}
            buttonStyle={[styles.radioButton, userType === 'youth' && styles.radioButtonActive]}
            titleStyle={userType === 'youth' ? styles.radioTextActive : styles.radioText}
          />
        </View>

        {/* Sign up button */}
        <Button
          title="Sign up"
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.button}
          onPress={handleSignUp}
        />

        {/* Sign in link */}
        <Text 
          style={styles.signInLink}
          onPress={() => navigation.navigate('SignIn')}
        >
          Already have an account? Sign in
        </Text>
      </View>
    </View>
  );
};

// Styles remain the same as before, just moved to bottom of file
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
  registerText: {
    marginBottom: 10,
    fontSize: 16,
    color: COLORS.black,
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  radioButton: {
    width: 120,
    borderRadius: 25,
    backgroundColor: 'transparent',
  },
  radioButtonActive: {
    backgroundColor: COLORS.secondary,
  },
  radioText: {
    color: COLORS.secondary,
  },
  radioTextActive: {
    color: COLORS.white,
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: COLORS.secondary,
    height: 50,
    borderRadius: 5,
  },
  signInLink: {
    textAlign: 'center',
    marginTop: 20,
    color: COLORS.secondary,
    textDecorationLine: 'underline',
  },
});

export default SignUpScreen;