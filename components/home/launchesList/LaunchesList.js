import {
    View,
    SafeAreaView,
    TouchableOpacity,
    FlatList,
  } from "react-native";
  
import styles from "./LaunchesList.style";
import LaunchCard from "./components/LaunchCard";
  
  
function LaunchesList(props) {
    return (
        <SafeAreaView style={styles.container}>
        <FlatList
        // Flatten obj here to avoid double call?
          data={props.launches.launches}
          renderItem={({ item }) => (
            <LaunchCard props={item}/>
          )}
          keyExtractor={(item) => item.id}
          horizontal
        />
        </SafeAreaView>
    );
  };
  
  export default LaunchesList;