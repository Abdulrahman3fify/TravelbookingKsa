import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from '../../constants/Routes';
import {Home} from '../../screens/home';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={Routes.HomeScreen} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export {RootStack};
