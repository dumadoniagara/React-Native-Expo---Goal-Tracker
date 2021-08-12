import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

const BelajarFlex = () => {
  return (
    <View>
      <Text>Belajar Flex Box</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "stretch",
          borderColor: "black",
          borderWidth: 1,
          height: 200,
        }}
      >
        <View
          style={{
            backgroundColor: "#00b0b9",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
          }}
        >
          <Text>1</Text>
        </View>
        <View
          style={{
            backgroundColor: "#ffad00",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
          }}
        >
          <Text>2</Text>
        </View>
        <View
          style={{
            backgroundColor: "#dadada",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
          }}
        >
          <Text>3</Text>
        </View>
      </View>
    </View>
  );
};

export default BelajarFlex;
