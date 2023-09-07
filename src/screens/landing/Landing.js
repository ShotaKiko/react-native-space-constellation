import { View } from "react-native";

import styles from "./Landing.style";
import LaunchesListDataLayer from "../../components/launchesList/LaunchesList.dataLayer";

function Landing() {
  return (
    <View style={styles.container}>
      {/* <View style={styles.bannerStrip}>
        <ImageBackground source={background} style={styles.background}>
          <Text style={styles.bannerTitle}>SpaceX Launches</Text>
          <Text style={styles.bannerText}>
            Explore past launches into space
          </Text>
        </ImageBackground>
      </View> */}

      <LaunchesListDataLayer />
    </View>
  );
}

export default Landing;
