import { StyleSheet, SafeAreaView } from 'react-native';

import ItsmWebview from '@/components/ItsmWebview';

export default function TabOneScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ItsmWebview />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  safeArea: {
    flex: 1,
  }
});
