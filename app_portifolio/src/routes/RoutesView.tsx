import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Main } from '../screens/Main';
import { Skills } from '../screens/Skills';
import { RootStackParamsList } from '../types/RootStackParamsList';

const { Navigator, Screen } = createStackNavigator<RootStackParamsList>();

const RoutesView = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Main">
        <Screen name="Main" component={Main} />
        <Screen name="Skills" component={Skills} />
      </Navigator>
    </NavigationContainer>
  );
};

export default RoutesView;
