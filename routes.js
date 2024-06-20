import { createStackNavigator } from '@react-navigation/stack';
import Inicial from './pages/index';
import HomeScreen from './pages/HomeScreen';

const Stack = createStackNavigator();

export default function Routes() {
    return (

        <Stack.Navigator>

            <Stack.Screen
                options={{ headerShown: false }}
                name="index"
                component={Inicial}
            />

            <Stack.Screen
                options={{ headerShown: false }}
                name="homeScreen"
                component={HomeScreen}
            />

        </Stack.Navigator>
    )
} 