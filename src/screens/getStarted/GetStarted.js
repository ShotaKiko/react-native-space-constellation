import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
} from "react-native-web";

import styles from "./GetStarted.styles";
import background from "../../../assets/doge.gif";

function GetStarted({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        style={styles.background}
        resizeMode="cover"
      >
        <Text style={styles.bannerTitle}>SpaceX Launches</Text>
        <Text style={styles.bannerText}>Explore past launches into space</Text>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.push("List")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

export default GetStarted;
