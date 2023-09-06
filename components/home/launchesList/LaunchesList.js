import { View, FlatList } from "react-native";

import styles from "./LaunchesList.style";
import LaunchCard from "./components/LaunchCard";

function LaunchesList(props) {
  return (
    <View style={styles.container} horizontal={false}>
      <FlatList
        // Flatten obj here to avoid double?
        data={props.launches.launches}
        renderItem={({ item }) => <LaunchCard props={item} />}
        keyExtractor={(item) => item.id}
        horizontal
      />
    </View>
  );
}

export default LaunchesList;
