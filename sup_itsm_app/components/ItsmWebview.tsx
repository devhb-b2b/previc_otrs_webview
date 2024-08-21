import React from 'react';
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';

export default function ItsmWebview() {
  const BASE_URL = 'https://atendimentoti.previc.gov.br//otrs/index.pl'

  return (
    <WebView
      style={styles.container}
      source={{ uri: BASE_URL }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
