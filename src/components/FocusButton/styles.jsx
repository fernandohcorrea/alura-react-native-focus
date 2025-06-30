import { StyleSheet } from "react-native";
function Styles() {
  return {
    pressableBtn: {
      borderColor: "#B872FF",
      borderWidth: 1,
      padding: 8,
      borderRadius: 50,
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      gap: 8,
    },
    pressableBtnFill: {
      backgroundColor: "#B872FF",
    },
    pressableBtnText: {
      color: "#B872FF",
      fontSize: 22,
      fontWeight: "bold",
      textAlign: "center",
    },
    pressableBtnTextFill: {
      color: "#021123",
    },
  };
}

export default StyleSheet.create(Styles());
