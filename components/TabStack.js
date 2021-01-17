import React from "react";
import { TouchableOpacity } from "react-native";
import AccountScreen from "../screens/AccountScreen";
import IndexScreen from "../screens/IndexScreen";
import CreateScreen from "../screens/CreateScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Entypo } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function BlogStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Index"
        component={IndexScreen}
        // Create post button on header
        options={{ headerRight: () => (
          <TouchableOpacity style={{ paddingRight: 10 }}>
            <Entypo
              onPress={() => navigation.navigate("createPost")}
              name="new-message"
              size={40}
              color="black"
            />
          </TouchableOpacity>
        ), }}
      />
      <Stack.Screen component={CreateScreen} name="createPost" options={{ title: 'Create Post' }}/>
    </Stack.Navigator>
  );
}

export default function TabStack() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Blog" component={BlogStack} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}