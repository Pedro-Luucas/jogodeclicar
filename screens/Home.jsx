import { View, Text, StyleSheet} from "react-native";
import { Button } from "react-native-paper";

export default function Home({ navigation }) {
  return (
    <View style={ styles.container}>
      <Text style={{ fontSize: 21, marginBottom: 16 }}>Jogo de Clicar.</Text>
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

const styles = StyleSheet.create({
    container: {
        flex:1, 
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FF0000"

    },
  });
  