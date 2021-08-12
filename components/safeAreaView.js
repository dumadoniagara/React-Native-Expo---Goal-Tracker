import React from "react";
import { SafeAreaView, FlatList, View, Text } from "react-native";

const data = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28asda",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa9asdadf",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571ejnasdjn",
    title: "Third Item",
  },
  {
    id: "bd7acbea-c1b1-46c2-asdadd5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fadsada91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-14557adsadd72",
    title: "Third Item",
  },
  {
    id: "bd7acb46c2-asdadd5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac6-c605-48d3-a4f8-fadsada91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0a1-471f-bd96-14557adsadd72",
    title: "Third Item",
  },
];

const exampleList = () => {
  //dalam flatList data berupa bentuk array

  // render Item

  return (
    <FlatList
      style={{ padding: 30, paddingTop: 0 }}
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <View
          style={{
            borderColor: "black",
            borderWidth: 1,
            color: "black",
            marginVertical: 5,
            height: 100,
          }}
        >
          <Text>{itemData.item.title}</Text>
        </View>
      )}
    />
  );
};

export default exampleList;
