import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { registerRootComponent } from 'expo';
import SignUpScreen from './src/screens/SignUpScreen';
import SignInScreen from './src/screens/SignInScreen';
import SplashScreen from './src/screens/SplashScreen';
import DonationScreen from './src/screens/Donation';
import StoryDetails from './src/screens/StoryDetails';

type RootStackParamList = {
  Splash: undefined;
  SignUp: undefined;
  SignIn: undefined;
  Donation: undefined;
  StoryDetails: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
          gestureEnabled: false
        }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Donation" component={DonationScreen} />
        <Stack.Screen name="StoryDetails" component={StoryDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

registerRootComponent(App);
export default App;