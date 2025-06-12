import * as Crypto from 'expo-crypto';
import { useEffect, useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import styles from "./styles";


const dataTimers = [
  {
    id: 0,
    name: 'Foco',
    initValue: 25,
    image: require('../assets/images/foco.png')
  },
  {
    id: 1,
    name: 'Pausa Curta',
    initValue: 5,
    image: require('../assets/images/short.png')
  },
  {
    id: 2,
    name: 'Pausa Longa',
    initValue: 10,
    image: require('../assets/images/long.png')
  }
]

export default function Index() {
  const [idxActive, setIdxActive] = useState(0);
  const [timerType, setTimerType] = useState(dataTimers[idxActive]);

  useEffect(() => {
    (async () => {
      const digest = await Crypto.digestStringAsync(
        Crypto.CryptoDigestAlgorithm.SHA256,
        'GitHub stars are neat 🌟'
      );
      console.log('Digest: ', digest);
      /* Some crypto operation... */
    })();
  }, []);

  const doStart = async () => {
    console.log('start')
    const digest = await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA256,
      'GitHub stars are neat 🌟'
    );
    console.log('Digest: ', digest);
  }

  const onPressMenuItem = (idx) => {
    setIdxActive(idx);
    setTimerType(dataTimers[idx]);
  }

  const buildViewActionsMenu = () => {
    return (
      <View style={styles.viewActionsMenu}>
        {dataTimers.map((timerItem) => {
          const isActive = timerItem.id === idxActive;

          let stylesPressable = null;
          if (isActive) {
            stylesPressable = styles.viewActionsMenuBtnActive;
          }
          return (
            <Pressable style={stylesPressable} onPress={() => onPressMenuItem(timerItem.id)} key={timerItem.id}>
              <Text style={styles.viewActionsMenuBtnText}>
                {timerItem.name}
              </Text>
            </Pressable>
          );
        })}
      </View>
    )
  }

  return (
    <View style={styles.viewContainer} >
      <Image source={timerType.image} />
      <View style={styles.viewActions}>
        {buildViewActionsMenu()}
        <Text style={styles.textTimer}>
          25:00
        </Text>
        <Pressable style={styles.pressableBtn} onPress={doStart}>
          <Text style={styles.pressableBtnText}>
            Começar
          </Text>
        </Pressable>
      </View>
    </View>
  );
}


