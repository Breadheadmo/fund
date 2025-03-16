import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text } from 'react-native-elements';
import { StackNavigationProp } from '@react-navigation/stack';
import { COLORS } from '../constants/colors';
import LogoPlaceholder from '../components/LogoPlaceholder';

// Define the navigation props type
type SplashScreenProps = {
  navigation: StackNavigationProp<any>;
};

// Splash Screen Component - First screen users see when opening the app
const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
  // Auto-navigate to SignIn screen after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('SignUp');
    }, 3000);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <LogoPlaceholder />
      <Text style={styles.tagline}>Helping future leaders today.</Text>
    </View>
  );
};

// Update styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 80,
  },
  tagline: {
    marginTop: 10,
    fontSize: 16,
    color: COLORS.black,
  },
  logoContainer: {
    alignItems: 'center',
  },
  logoText: {
    fontSize: 60,
    fontWeight: 'bold',
    color: COLORS.secondary,
  },
  logoSubtext: {
    fontSize: 20,
    color: COLORS.secondary,
    marginTop: -5,
  },
});

export default SplashScreen;