import { View, ImageBackground, Text, Button } from "react-native-web";

import styles from "./GetStarted.styles";
import background from "../../../assets/background.jpeg";

function GetStarted({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.background}>
        <Text style={styles.bannerTitle}>SpaceX Launches</Text>
        <Text style={styles.bannerText}>Explore past launches into space</Text>
      </ImageBackground>

      <View style={styles.buttonContainer}>
        <Button title="Get Started" onPress={() => navigation.push("List")} />
      </View>
    </View>
  );
}

export default GetStarted;
