import { Text } from "react-native";
import styles from "./styles";

export default function Timer({ secondsTotal }) {
  const date = new Date(secondsTotal * 1000);
  const options = { minute: "2-digit", second: "2-digit" };
  return (
    <Text style={styles.textTimer}>
      {date.toLocaleTimeString("pt-BR", options)}
    </Text>
  );
}
