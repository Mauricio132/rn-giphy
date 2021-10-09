import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Categorie from "../../categorie/screens/Categorie";
import { color } from "../../styles";

//instacia de stack navigation (transccion entre pantallas)
const Stack = createStackNavigator();

export default function CategorieStack() {
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
        name="categorie-home"
        component={Categorie}
        options={{ title: "Categorias" }}
      />
    </Stack.Navigator>
  );
}
