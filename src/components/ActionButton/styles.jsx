import { StyleSheet } from "react-native";
function Styles() {
  return {
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
  }
}

export default StyleSheet.create(Styles())