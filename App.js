import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <View className={`flex-1 justify-center items-center`} >
      <Text className="text-green-700">Home Screen</Text>
    </View>
  );
}

function Authentication({navigation}) {
  return (
    <View className={`flex-1 justify-center items-center`}>
      <Text onPress={e => navigation.push("Home")}>Authentication</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Authentication'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Authentication" component={Authentication} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;