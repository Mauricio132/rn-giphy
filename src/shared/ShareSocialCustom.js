//import React from 'react'
//import { View, Text } from 'react-native'
import * as Sharing from "expo-sharing";

export const openShareDialogAsync = async (selectedUri) => {
  if (!(await Sharing.isAvailableAsync())) {
    alert(`Lo sentimos, compartir no esta disponible para su plataforma`);
    return;
  }

  try {
    await Sharing.shareAsync(selectedUri);
  } catch (error) {
    console.log(error);
  }
};
