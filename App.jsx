import { StyleSheet, Text } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/Home";
import Modos from "./screens/Modos";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" options={{}}>
          <Stack.Screen name="Home" component={Home} options={{ title: "Bem-vindo!", headerStyle: { backgroundColor : '#00FFFF'}, }} />
          <Stack.Screen name="Modos" component={Modos} options={{ title: "Modos de jogo" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
