import { StyleSheet } from "react-native";
function Styles() {
  return {
    viewTasksListItem: {
      flexDirection: "row",
      borderRadius: 8,
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "#98A0A8",
      paddingHorizontal: 8,
      paddingVertical: 18,
      gap: 8,
    },
    viewTasksListItemCompleted: {
      backgroundColor: "#0F725C",
    },
    viewTaskText: {
      flex: 1,
    },
  };
}

export default StyleSheet.create(Styles());
