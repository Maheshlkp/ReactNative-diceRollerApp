import React, { useState } from 'react';

import { Text, View, Image, TouchableOpacity, StyleSheet, Pressable } from 'react-native';

import DiceOne from './assets/dice1.png';
import DiceTwo from './assets/dice2.png';
import DiceThree from './assets/dice3.png';
import DiceFour from './assets/dice4.png';
import DiceFive from './assets/dice5.png';
import DiceSix from './assets/dice6.png';
import { grey, blue, black, red } from 'ansi-colors';

const App = () => {
  const [uri, setUri] = useState(DiceOne)

  const playButtonTapped = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setUri(DiceOne)
        break;
      case 2:
        setUri(DiceTwo)
        break;
      case 3:
        setUri(DiceThree)
        break;
      case 4:
        setUri(DiceFour)
        break;
      case 5:
        setUri(DiceFive)
        break;
      case 6:
        setUri(DiceSix)
        break;

      default:
        setUri(DiceOne)
        break;
    }

  }
  return (
    <>
      <View style={styles.container}>
        <Pressable onPress={playButtonTapped}>
        <Image style={styles.image} source={uri} />
        </Pressable>
        <Pressable onPress={playButtonTapped}>
          <Text style={styles.gamePlayButton}>Dice Roller</Text>
        </Pressable>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFBD33",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,

  },
  gamePlayButton: {
    fontSize: 20,
    marginTop: 30,
    color: "red",
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderColor: "#3399FF",
    borderRadius: 5,
    borderWidth: 3,
    //  fontweight:"bold",
  }
})

export default App;

