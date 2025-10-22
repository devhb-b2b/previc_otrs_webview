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
  safeArea: {
    flex: 1,
  }
});
