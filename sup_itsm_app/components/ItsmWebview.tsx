import React, { useRef } from 'react';
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
import { Button, StyleSheet } from 'react-native';

export default function ItsmWebview() {
  const BASE_URL = 'https://atendimentoti.previc.gov.br//otrs/index.pl'

  const ref_itsm_webview = useRef<WebView>(null);

  const handleButtonClick = () => {
    if (ref_itsm_webview.current) {
      ref_itsm_webview.current.injectJavaScript(`
        const LogoutButton = document.getElementById('LogoutButton');
        if (LogoutButton) {
          LogoutButton.click();
        } else {
          console.warn('Elemento com id "LogoutButton" não encontrado.');
        }
      `);
    }
  };

  return (
    <>
      <WebView
        ref={ref_itsm_webview}
        style={styles.container}
        source={{ uri: BASE_URL }}
      />
      {/* <Button title="Encerrar sessão" onPress={handleButtonClick} /> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
