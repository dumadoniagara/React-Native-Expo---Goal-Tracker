// import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { Icon } from "react-native-elements";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";
import Example from "./components/safeAreaView";

export default function App() {
  const [inputGoal, setInputGoal] = useState("");
  const [listGoal, setListGoal] = useState([]);

  const goalInputHandler = (text) => {
    setInputGoal(text);
  };

  const addHandler = () => {
    setListGoal((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: inputGoal },
    ]);
    setInputGoal("");
  };

  const deleteHandler = (deletedId) => {
    setListGoal((currentGoals) =>
      currentGoals.filter((el, i) => el.id !== deletedId)
    );
  };
  return (
    <>
      <View style={styles.screen}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Goals App</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder={"Please add your goal today!"}
            style={styles.input}
            onChangeText={goalInputHandler}
            value={inputGoal}
          />
          <View style={styles.buttonContainer}>
            <Button title={"Add"} color={"#00b0b9"} onPress={addHandler} />
          </View>
        </View>
        <FlatList
          data={listGoal}
          keyExtractor={(item) => item.id}
          renderItem={(itemData) => (
            <View style={styles.itemList}>
              <Text style={styles.itemListText}>{itemData.item.value}</Text>
              <View style={styles.closeWrapper}>
                <Icon
                  name="close"
                  color="#ffad00"
                  size={22}
                  onPress={() => deleteHandler(itemData.item.id)}
                />
              </View>
            </View>
          )}
        />
        <View></View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
    paddingTop: 50,
  },
  inputContainer: {
    // borderColor: "black",
    // borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonContainer: { marginTop: -10 },
  input: {
    borderColor: "#00b0b9",
    borderWidth: 1,
    borderRadius: 4,
    height: 40,
    width: "80%",
    marginBottom: 10,
    padding: 10,
  },
  titleWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "#00b0b9",
  },
  itemList: {
    marginTop: 5,
    backgroundColor: "#ffad00",
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemListText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  closeWrapper: {
    backgroundColor: "#dadada",
    borderRadius: 20,
  },
});
