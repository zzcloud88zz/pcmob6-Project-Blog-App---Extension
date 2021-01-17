import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import DataFetching from "../components/DataFetching";
import { commonStyles } from "../styles/commonStyles";
import { useSelector } from "react-redux";

export default function IndexScreen({ navigation }) {
  const isDarkModeOn = useSelector((state) => state.prefs.darkMode);

  return (
    <View style={[
      styles.container,
      isDarkModeOn && { backgroundColor: "black" },    
    ]}
    >
      <DataFetching navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
  },
});
