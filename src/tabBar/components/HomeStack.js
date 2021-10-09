import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeGiphy from "../../home/screens/HomeGiphy";
import { color } from "../../styles";

//instacia de stack navigation (transccion entre pantallas)
const Stack = createStackNavigator();

export default function FavoriteStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: color.white,
        },
      }}
    >
      <Stack.Screen
        name="home-giphy"
        component={HomeGiphy}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
