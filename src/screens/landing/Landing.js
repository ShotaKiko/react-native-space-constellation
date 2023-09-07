import { View } from "react-native";

import styles from "./Landing.style";
import LaunchesListDataLayer from "../../components/launchesList/LaunchesList.dataLayer";

function Landing() {
  return (
    <View style={styles.container}>
      <LaunchesListDataLayer />
    </View>
  );
}

export default Landing;
