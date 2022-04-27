import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Roboto_400Regular, Roboto_700Bold, Roboto_100Thin } from '@expo-google-fonts/roboto';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionic from 'react-native-vector-icons/Ionicons'
import Thunder from './components/views/Thunder';
import Fog from './components/views/Fog';
import Ice from './components/views/Ice';
import Cloud from './components/views/Cloud/Cloud';
import Turbulence from './components/views/Turbulence';


export default function App() {
  const Tab = createBottomTabNavigator();

  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_100Thin
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Грозы') {
              iconName = focused
                ? 'thunderstorm'
                : 'thunderstorm-outline';
            } else if (route.name === 'Туманы') {
              iconName = focused ? 'albums' : 'albums-outline';
            } else if (route.name === 'Обледенение') {
              iconName = focused ? 'ice-cream' : 'ice-cream-outline';
            } else if (route.name === 'ВНГО') {
              iconName = focused ? 'cloudy-sharp' : 'cloudy-outline';
            } else if (route.name === 'Болтанка') {
              iconName = focused ? 'ios-airplane' : 'ios-airplane-outline';
            }
            return <Ionic name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#7373D9',
          tabBarInactiveTintColor: 'gray',
        })}
      >

        <Tab.Screen name="Грозы" component={Thunder} />
        <Tab.Screen name="Обледенение" component={Ice} />
        <Tab.Screen name="ВНГО" component={Cloud} />
        <Tab.Screen name="Туманы" component={Fog} />
        <Tab.Screen name="Болтанка" component={Turbulence} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}


