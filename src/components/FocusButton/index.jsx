import { Pressable, Text } from "react-native";
import styles from "./styles";

export default function FocusButton({ label, onPress, icon }) {
  return (
    <Pressable style={styles.pressableBtn} onPress={() => onPress()}>
      {icon ? icon : null}
      <Text style={styles.pressableBtnText}>{label}</Text>
    </Pressable>
  );
}
