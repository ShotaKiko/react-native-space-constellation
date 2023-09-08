import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 6,
    elevation: 5,
    backgroundColor: "#fff",
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
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 20,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 20,
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
