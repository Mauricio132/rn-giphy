import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AwesomeIcon from "react-native-vector-icons/FontAwesome";

import HomeStack from "../components/HomeStack";
import CategorieStack from "../components/CategorieStack";
import FavoriteStack from "../components/FavoriteStack";
import { color, layoutStyle } from "../../styles";

//requerido, instancia para crear botones en TabNavigation
const Tab = createBottomTabNavigator();

export default function UserNavegation() {
  //asignacion de iconos
  const setIcon = (route) => {
    //objeto de opciones principales del menu con su respectivo icono
    const icon = {
      home: "home",
      categorie: "bars",
      favorite: "heart",
    };
    //buscar iconos por opcion
    const iconName = icon[route.name];
    //retorna icono solicitado
    return <AwesomeIcon name={iconName} style={[styles.icon]} />;
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        barStyle={layoutStyle.tabNavigator}
        screenOptions={({ route }) => ({
          tabBarIcon: () => {
            return setIcon(route);
          },
        })}
      >
        <Tab.Screen
          name="home"
          component={HomeStack}
          options={{ title: "Inicio", headerShown: false }}
        />
        <Tab.Screen
          name="categorie"
          component={CategorieStack}
          options={{ title: "Categorias", headerShown: false }}
        />
        <Tab.Screen
          name="favorite"
          component={FavoriteStack}
          options={{ title: "Favoritos", headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 20,
    color: color.dark,
  },
});
