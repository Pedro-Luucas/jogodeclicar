import { View, Text } from "react-native";
import { Button } from "react-native-paper";

export default function Modos({ navigation }) {
  return (
    <View style={{paddingTop:200, alignItems: "center", justifyContent: "center"}}>
      <Text style={{ fontSize: 21, marginBottom: 16 }}>Modos de jogo.</Text>
      <Button
        mode="contained"
        style={{ marginBottom: 9 }}
        onPress={() => navigation.navigate("Modos")}
      >
        Jogar
      </Button>
    </View>
  );
}
