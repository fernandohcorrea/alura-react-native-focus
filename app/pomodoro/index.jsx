import { useRef, useState } from "react";
import { Image, View } from "react-native";
import ActionButton from "../components/ActionButton";
import FocusButton from "../components/FocusButton";
import IconPause from "../components/Images/icons/IconPause";
import IconPlay from "../components/Images/icons/IconPlay";
import Timer from "../components/Timer";
import styles from "./styles";

const dataTimers = [
  {
    id: 0,
    name: "Foco",
    initValue: 25 * 60,
    image: require("../../assets/images/foco.png"),
  },
  {
    id: 1,
    name: "Pausa Curta",
    initValue: 5 * 60,
    image: require("../../assets/images/short.png"),
  },
  {
    id: 2,
    name: "Pausa Longa",
    initValue: 10 * 60,
    image: require("../../assets/images/long.png"),
  },
];

export default function Pomodoro() {
  const [idxActive, setIdxActive] = useState(0);
  const [timerType, setTimerType] = useState(dataTimers[idxActive]);
  const [seconds, setSeconds] = useState(dataTimers[idxActive].initValue);
  const [timeRunner, setTimeRunner] = useState(null);

  const timerRef = useRef(null);

  const clearTimer = () => {
    if (timerRef.current != null) {
      clearInterval(timerRef.current);
      setTimeRunner(null);
      timerRef.current = null;
    }
  };

  const onPressBtnPlayPause = () => {
    if (timerRef.current) {
      clearTimer();
      return;
    }
    onToggleTimer();
  };

  const onToggleTimer = () => {
    if (timerRef.current) {
      clearTimer();
      return;
    }

    const id = setInterval(() => {
      setSeconds((oldState) => {
        if (oldState === 0) {
          clearTimer();
          return timerType.initValue;
        }
        return oldState - 1;
      });
      console.log("timer");
    }, 1000);

    setTimeRunner(true);
    timerRef.current = id;
  };

  const onPressMenuItem = (idx) => {
    clearTimer();
    setIdxActive(idx);
    setTimerType(dataTimers[idx]);
    setSeconds(dataTimers[idx].initValue);
  };

  const buildViewActionsMenu = () => {
    return (
      <View style={styles.viewActionsMenu}>
        {dataTimers.map((timerItem) => {
          const isActive = timerItem.id === idxActive;

          return (
            <ActionButton
              key={timerItem.id}
              label={timerItem.name}
              isActive={isActive}
              onPress={() => onPressMenuItem(timerItem.id)}
            />
          );
        })}
      </View>
    );
  };

  return (
    <View style={styles.viewContainer}>
      <Image source={timerType.image} />
      <View style={styles.viewActions}>
        {buildViewActionsMenu()}
        <Timer secondsTotal={seconds} />
        <FocusButton
          label={timeRunner ? "Pausar" : "Começar"}
          onPress={onPressBtnPlayPause}
          icon={timeRunner ? <IconPause /> : <IconPlay />}
        />
      </View>
    </View>
  );
}
