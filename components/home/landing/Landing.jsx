import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./Landing.style";
import LaunchesList from "../list/LaunchesList";

function Landing () {
  const router = useRouter();
  // Add styles
  return (
    <View>
      <View style={styles.container}>
        <Text>Hello fellow space enthusiast</Text>
        <Text>Explore past launches into space</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder='What are you looking for?'
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

     <LaunchesList value={value} /> 
    </View>
  );
};

export default Landing;