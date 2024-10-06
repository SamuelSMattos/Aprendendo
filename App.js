import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import FotoScreen from './screens/FotoScreen';
import VideosScreen from './screens/VideosScreen';
import { initializeApp } from 'firebase/app'; // Firebase
import { getAuth } from 'firebase/auth'; // Firebase Auth

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAa8Yr91OPnhhGE5Guid5VUnuGMuCG6Fx4",
  authDomain: "formatura-gabi.firebaseapp.com",
  projectId: "formatura-gabi",
  storageBucket: "formatura-gabi.appspot.com",
  messagingSenderId: "678771170333",
  appId: "1:678771170333:web:350796f435ab305c973af4",
  measurementId: "G-F8ZFS38LXG"
};

// Inicializando o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} // Oculta o menu na tela de login
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Fotos" component={FotoScreen} />
        <Stack.Screen name="Videos" component={VideosScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
