import { SafeAreaView, Text } from "react-native";
import { tasksStyles as styles } from "../../styles";

export default function Tasks() {
  return (
    <SafeAreaView style={styles.viewContainer}>
      <Text>Tasks</Text>
    </SafeAreaView>
  );
}
