import { StyleSheet } from "react-native";

function HomeStyles() {
  return {
    viewContainer: {
      backgroundColor: "#021123",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      gap: 35,
    },
    viewLogo: {
      width: 180,
      height: 50,
    },
    viewContainerCall: {
      justifyContent: "center",
      alignItems: "center",
      gap: 10,
    },
    viewTextCall: {
      color: "#fff",
      fontSize: 25,
    },
    viewTextCallBold: {
      fontWeight: "bold",
    },
    viewImageInicial: {
      alignItems: "center",
      width: "85%",
    },
  };
}

export const homeStyles = StyleSheet.create(HomeStyles());

function PomodoroStyles() {
  return {
    viewContainer: {
      backgroundColor: "#021123",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      gap: 40,
    },
    viewActions: {
      alignItems: "center",
      padding: 24,
      backgroundColor: "#14448080",
      borderRadius: 32,
      borderColor: "#144480",
      borderWidth: 2,
      width: "85%",
      gap: 32,
    },
    viewActionsMenu: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
    },
    viewActionsMenuBtnActive: {
      borderRadius: 8,
      backgroundColor: "#144480",
    },
    viewActionsMenuBtnText: {
      padding: 8,
      color: "#FFF",
      fontSize: 12.5,
      fontWeight: "bold",
      textAlign: "center",
    },
    textTimer: {
      color: "#FFF",
      fontSize: 54,
      fontWeight: "bold",
      textAlign: "center",
    },
  };
}

export const pomodoroStyles = StyleSheet.create(PomodoroStyles());

function TasksStyles() {
  return {
    viewContainer: {
      backgroundColor: "#021123",
      flex: 1,
      alignItems: "center",
    },

    viewTextTasksList: {
      color: "#fff",
      fontSize: 37,
      fontWeight: "bold",
      height: 60,
    },
    viewTasksList: {
      gap: 20,
    },
    viewTaskButton: {
      marginTop: 50,
    },
  };
}

export const tasksStyles = StyleSheet.create(TasksStyles());
