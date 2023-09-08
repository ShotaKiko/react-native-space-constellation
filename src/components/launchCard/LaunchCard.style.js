import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 4,
    elevation: 10,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    width: 350,
    height: "fitContent",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#091221",
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 20,
    color: "#ccc",
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 20,
    color: "#ccc",
    borderBottomColor: "#03050a",
    paddingBottom: 3,
    borderBottomWidth: 3,
  },
  cardButton: {
    width: "30%",
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default styles;
