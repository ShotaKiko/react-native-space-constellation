import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  searchContainer: {
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
    flexGrow: 1,
    alignItems: "center",
  },
  loading: {
    flex: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
