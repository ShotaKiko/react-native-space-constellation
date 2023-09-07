import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import styles from "./Landing.style";
import searchFilterFunction from "./Landing.utils";
import background from "../../../assets/background.jpeg";
import LaunchesListDataLayer from "../launchesList/LaunchesList.dataLayer";

function Landing() {
  const [searchInput, setSearchInput] = useState("");
  // TODO: Update flatlist with this value
  const [filteredData, setFilteredData] = useState("");

  function onSubmitSearch(text, data) {
    setFilteredData(searchFilterFunction(text, data));
  }

  function SearchInputHandler(searchText) {
    setSearchInput(searchText);
  }

  return (
    <View style={styles.container}>
      <View style={styles.bannerStrip}>
        <ImageBackground source={background} style={styles.background}>
          <Text style={styles.bannerTitle}>SpaceX Launches</Text>
          <Text style={styles.bannerText}>
            Explore past launches into space
          </Text>
        </ImageBackground>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchInput}
            onChangeText={(text) => SearchInputHandler(text)}
            placeholder="Search for a specific SpaceX launch"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn}>
          {/* TODO: of corresponding image */}
          {/* <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          /> */}
        </TouchableOpacity>
      </View>

      <LaunchesListDataLayer />
    </View>
  );
}

export default Landing;
