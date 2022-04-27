import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts, Roboto_400Regular, Roboto_700Bold, Roboto_100Thin } from '@expo-google-fonts/roboto';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationStackData } from './data/navigationStackData';

const Stack = createNativeStackNavigator()


export default function App() {


  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_100Thin
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          {navigationStackData.map((data, index) => (
            <Stack.Screen
              key={index}
              name={data.name}
              component={data.component}
              options={data.options}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}


