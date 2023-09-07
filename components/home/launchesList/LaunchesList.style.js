import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {},
  searchContainer: {
    // border: "2px solid orange",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  searchInput: {
    borderColor: "#ccc",
    borderRadius: 7,
    borderWidth: 1.5,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  list: {
    elevation: 5,
  },
  loading: {
    flex: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
