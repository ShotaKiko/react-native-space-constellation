import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    border: "5px solid green",
    flex: 1,
  },
  searchContainer: {
    border: "2px solid orange",
  },
  searchWrapper: {
    display: "flex",
    flexDirection: "row",
  },
  searchInput: {
    width: "80%",
    height: "100%",
    padding: 5,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
  },
  tabsContainer: {
    width: "100%",
  },
  background: {
    flex: 2,
  },
  bannerStrip: {},
  bannerTitle: {
    color: "#fff",
    fontSize: 18,
  },
  bannerText: {
    color: "#fff",
  },
});

export default styles;
