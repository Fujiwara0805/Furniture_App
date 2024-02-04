import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useCallback } from 'react';
import  BottomTabNavigation from './navigation/BottomTabNavigation';
import { Cart, ProductDetails, NewRivals } from './screens';

const Stack = createNativeStackNavigator();

export default function App() {
  /* fonts */
  const [fontsLoaded] = useFonts({
    regular: require('./assets/fonts/Poppins-Bold.ttf'),
    medium: require('./assets/fonts/Poppins-Medium.ttf'),
    bold: require('./assets/fonts/Poppins-Bold.ttf'),
    light: require('./assets/fonts/Poppins-Light.ttf'),
    semibold: require('./assets/fonts/Poppins-SemiBold.ttf'),
    extrabold: require('./assets/fonts/Poppins-ExtraBold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Bottom Navigation" component={BottomTabNavigation} options={{headerShown: false}}/>
        <Stack.Screen name="Cart" component={Cart} options={{headerShown: false}}/>
        <Stack.Screen name="ProductDetails" component={ProductDetails} options={{headerShown: false}}/>
        <Stack.Screen name="ProductList" component={NewRivals} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
