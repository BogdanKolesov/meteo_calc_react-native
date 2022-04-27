import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Roboto_400Regular, Roboto_700Bold, Roboto_100Thin } from '@expo-google-fonts/roboto';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionic from 'react-native-vector-icons/Ionicons'
import Thunder from '../Thunder';
import Fog from '../Fog';
import Ice from '../Ice';
import Cloud from '../Cloud';
import Turbulence from '../Turbulence';


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
        <>
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
                    tabBarActiveTintColor: '#8484e3',
                    tabBarInactiveTintColor: 'gray',
                })}
            >

                <Tab.Screen name="Грозы" component={Thunder} />
                <Tab.Screen name="Обледенение" component={Ice} />
                <Tab.Screen name="ВНГО" component={Cloud} />
                <Tab.Screen name="Туманы" component={Fog} />
                <Tab.Screen name="Болтанка" component={Turbulence} />

            </Tab.Navigator>
        </>
    );
}


