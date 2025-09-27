import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';

type RootStackParamList = {
  "Home": undefined;
  "Home 2": undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppNavigator(){
    return <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen 
            name='Home' 
            component={Home}
            options={{headerShown:false}}/>
        </Stack.Navigator>
    </NavigationContainer>
}