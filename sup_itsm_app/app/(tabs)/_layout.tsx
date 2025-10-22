import React from 'react';
import { Alert } from 'react-native';
import { Tabs, useRouter } from 'expo-router';

import FontAwesome from '@expo/vector-icons/FontAwesome';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

// Atribuir Comportamente ao pressionar um botão tab
function handleExitTabPress(event: any) {
  // previne navegação ao pressionar tab EXIT
  event.preventDefault();

  Alert.alert('Deseja encerrar a sessão?', 'Acesse o menu central clicando em "PREVIC" para acessar o botão de LogOut', [
    {
      text: 'OK',
      onPress: () => null
    }
  ]);
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="exit"
        options={{
          title: 'Sair',
          tabBarIcon: ({ color }) => <TabBarIcon name="sign-out" color={color} />,
        }}
        listeners={{
          tabPress: handleExitTabPress,
        }}
      />
    </Tabs>
  );
}
