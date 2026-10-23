import Categories from './screens/CategoriesScreen';
import Recipes from './screens/RecipesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../data/types';

const Stack = createNativeStackNavigator<RootStackParamList>();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Categories">
        <Stack.Screen
          name="Categories"
          component={Categories}
          options={{ title: 'Kategorijos' }}
        />
        <Stack.Screen
          name="Recipes"
          component={Recipes}
          options={{ title: 'Receptai' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
