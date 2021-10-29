import { Button, FlatList, Keyboard, Modal, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

import { StatusBar } from 'expo-status-bar';

type Word = {
  id:number,
  value:string
}

export default function App() {
  const [newWord, setNewWord] = useState<string>("")
  const [words, setWords] = useState<Word[]>([])
  const [wordSelected, setWordSelected] = useState<Word>()
  const [displayModal, setDisplayModal] = useState<boolean>(false)
  
  const handleOnChangeText = (value:string) => setNewWord(value)
  const handleOnPressAdd = () => {
    if(newWord){
      const word = {
        value: newWord,
        id: Math.random()
      }
      setWords([...words, word])
      setNewWord("")
    }
    Keyboard.dismiss()
  }

  const openRemoveWordModal = (id:number) => {
    setDisplayModal(true)
    setWordSelected(words.find(word => word.id == id))
  }

  const handleOnPressRemove = (id:number) => {
    setWords(words.filter(word => word.id !== id))
    setWordSelected(undefined)
    setDisplayModal(false)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title_app}>Smart Nut</Text>
      </View>
      <Text style={styles.title_coder}>Hola, Coder!</Text>
      <View>
        <TextInput onChangeText={ handleOnChangeText } value={newWord}/>
        <Button title="Add word" onPress={ handleOnPressAdd } />
      </View>
      <FlatList 
        data={words} 
        keyExtractor={item => item.id.toString()} 
        renderItem={({item}: {item: Word}) => (
          <View key={item.id}>
            <Text style={styles.title_coder}>{item.value}</Text>
            <Button title="Remove" onPress={ () => openRemoveWordModal(item.id) } />
          </View>
        )} 
      />
      {/* <View>
        {words.map(word => (
          <View key={word.id}>
            <Text style={styles.title_coder}>{word.value}</Text>
          </View>
        ))}
      </View> */}
      <Modal visible={displayModal} animationType="slide">
        <View>
          <View>
            <Text style={styles.title_coder}>{`Quiere borrar la palabra ${wordSelected?.value}`}</Text>
          </View>
          <View>
            <Button title="Cancel" onPress={ () => setDisplayModal(false) } />
            <Button title="Confirm" onPress={ () => handleOnPressRemove(wordSelected?.id ? wordSelected.id : 1) } />
        </View>
        </View>
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    height: '100%'
  },
  header: {
    backgroundColor: '#904b1d', // nut color palette
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    height: 50,
    width: '100%'
  },
  title_app: {
    fontSize: 24,
    fontWeight: '400',
    color: '#fff'
  },
  title_coder: {
    fontSize: 32,
    fontWeight: '700',
    fontStyle: 'italic',
    alignItems: 'center',
    color: '#38231c'
  }
});
