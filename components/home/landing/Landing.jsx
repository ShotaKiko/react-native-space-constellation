import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./Landing.style";

const launchTypes = ["Satellite", "Spaceship", "ISS"];

const Landing = ({ searchTerm, setSearchTerm, handleClick }) => {
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

      <View style={styles.tabsContainer}>
        <FlatList
          data={launchTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
                // TODO: on press that routes to launch details page
              
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Landing;