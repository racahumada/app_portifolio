import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { Inicio } from '../screens/Inicio';
import { Skills } from '../screens/Skills';
import { RootStackParamsList } from '../types/RootStackParamsList';

const { Navigator, Screen } = createBottomTabNavigator<RootStackParamsList>();

const RoutesView = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Screen name="Inicio" component={Inicio} />
        <Screen name="Skills" component={Skills} />
      </Navigator>
    </NavigationContainer>
  );
};

export default RoutesView;
