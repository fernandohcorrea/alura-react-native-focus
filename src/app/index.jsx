import { router } from "expo-router";
import { Image, View } from "react-native";
import FocusButton from "../components/FocusButton";
import TextFont from "../components/TextFont";
import { homeStyles as styles } from "../styles";

export default function Index() {
  return (
    <View style={styles.viewContainer}>
      <Image
        style={[styles.viewLogo, styles.gap32]}
        source={require("../assets/images/fokus-logo.png")}
      />
      <View style={styles.viewContainerCall}>
        <TextFont
          fontFamily="Unbounded-ExtraLight"
          style={[styles.viewTextCall, styles.gap32]}
        >
          Otimize sua
        </TextFont>
        <TextFont fontFamily="Unbounded-ExtraLight" style={styles.viewTextCall}>
          produtividade,
        </TextFont>
        <TextFont style={[styles.viewTextCall, styles.viewTextCallBold]}>
          mergulhe no que
        </TextFont>
        <TextFont style={[styles.viewTextCall, styles.viewTextCallBold]}>
          importa
        </TextFont>
      </View>
      <View style={styles.viewImageInicial}>
        <Image source={require("../assets/images/inicial.png")} />
      </View>

      <View style={styles.viewImageInicial}>
        <FocusButton
          label="Iniciar!"
          onPress={() => {
            router.replace("/pomodoro");
          }}
        />
      </View>
    </View>
  );
}
