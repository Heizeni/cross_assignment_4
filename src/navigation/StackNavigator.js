import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabNavigator from './TabNavigator';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createNativeStackNavigator();

const SCREENS = {
  MAIN_TABS: 'MainTabs',
  SETTINGS: 'Settings',
};

export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: '#050713',
        },
      }}
    >
      <Stack.Screen name={SCREENS.MAIN_TABS} component={TabNavigator} />
      <Stack.Screen name={SCREENS.SETTINGS} component={SettingsScreen} />
    </Stack.Navigator>
  );
}