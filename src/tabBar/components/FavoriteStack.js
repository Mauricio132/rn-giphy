import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Favorite from "../../favorite/screens/Favorite";
import { color } from "../../styles";

//instacia de stack navigation (transccion entre pantallas)
const Stack = createStackNavigator();

export default function FavoriteStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: color.dark,
        headerStyle: { backgroundColor: color.white },
        cardStyle: {
          backgroundColor: color.white,
        },
      }}
    >
      <Stack.Screen
        name="favorite-giphy"
        component={Favorite}
        options={{ title: "Gifs Favoritos" }}
      />
    </Stack.Navigator>
  );
}
