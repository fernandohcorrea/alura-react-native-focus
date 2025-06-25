import { StyleSheet } from "react-native";
function Styles() {
  return {
    viewContainer: {
      backgroundColor: '#021123',
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      gap: 40,
    },
    viewActions: {
      alignItems: "center",
      padding: 24,
      backgroundColor: '#14448080',
      borderRadius: 32,
      borderColor: '#144480',
      borderWidth: 2,
      width: '85%',
      gap: 32
    },
    viewActionsMenu: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    viewActionsMenuBtnActive: {
      borderRadius: 8,
      backgroundColor: '#144480',
    },
    viewActionsMenuBtnText: {
      padding: 8,
      color: '#FFF',
      fontSize: 12.5,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    textTimer: {
      color: '#FFF',
      fontSize: 54,
      fontWeight: 'bold',
      textAlign: 'center'
    },
  }
}

export default StyleSheet.create(Styles())