import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import ExploreScreen from '../screens/ExploreScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const SCREENS = {
  EXPLORE: 'Explore',
  PROFILE: 'Profile',
};

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={SCREENS.EXPLORE}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#080A18',
          borderTopColor: '#171A2E',
          height: 76,
          paddingTop: 8,
          paddingBottom: 12,
        },
        tabBarActiveTintColor: '#F4F4FF',
        tabBarInactiveTintColor: '#7B819E',
        tabBarLabelStyle: {
          fontSize: 13,
          marginTop: 2,
        },
        tabBarIcon: ({ color, size }) => {
          let iconName = 'compass-outline';

          if (route.name === SCREENS.EXPLORE) {
            iconName = 'compass-outline';
          }

          if (route.name === SCREENS.PROFILE) {
            iconName = 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name={SCREENS.EXPLORE}
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore',
        }}
      />

      <Tab.Screen
        name={SCREENS.PROFILE}
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
}