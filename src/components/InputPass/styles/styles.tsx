import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
  },
  input: {
    backgroundColor: "#566883",
    borderRadius: 5,
    width: "90%",
    height: 70,
    marginBottom: 30,
    fontSize: 30,
  },
  containerBtn: {
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#6d9ad4",
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  containerBtn2: {
    // borderWidth: 2,
    // borderColor: "#6d9ad4",
    backgroundColor: "#8b99ac",
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 10,
  },
  textBtn: {
    fontSize: 22,
    color: "#fafafa",
    fontWeight: 600,
  },
  textBtn2: {
    fontSize: 18,
    color: "#fafafa",
    fontWeight: 500,
  },
});
