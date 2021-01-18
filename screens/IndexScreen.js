import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import axios from "axios";
import { useSelector } from "react-redux";

const API = "https://zzcloud88zz.pythonanywhere.com";
const API_ALLPOSTS = "/posts";

export default function IndexScreen({ navigation, route }) {
  const [posts, setPosts] = useState([]);
  const isDarkModeOn = useSelector((state) => state.prefs.darkMode);

  useEffect(() => {
    axios.get(API + API_ALLPOSTS)
    .then(response => {
      console.log(response)
      setPosts(response.data)
    })
    .catch(error => {
      console.log(error)
    })
  }, [route.params?.title, route.paramas?.content])

  return (
    <View style={[
      styles.container,
      isDarkModeOn && { backgroundColor: "black" },
    ]}
    >
      {posts.map(post => (
        <TouchableOpacity key={post.id} onPress={() => navigation.navigate("showPost", post)}>
          <Text style={styles.list}>
            Post {post.id}.   {post.title}
            <TouchableOpacity onPress={() => deletePost(post.id)} style={{paddingLeft: 80}}>
              <AntDesign name="delete" size={30} color="maroon" />
            </TouchableOpacity>
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  function deletePost(id) {
    Alert.alert(
      "Hold On!",
      "Are you sure you want to delete?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => 
          axios.delete("https://zzcloud88zz.pythonanywhere.com/posts/" + id)
          .then(response => {
            console.log(response.data)
            const refresh = posts.filter(post=>post.id !== id)
            setPosts(refresh)
          })
      }],
      { cancelable: false }
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
  },
  list: {
    fontSize: 30,
    padding: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomColor: "black",
    color: "grey",
  }
});
