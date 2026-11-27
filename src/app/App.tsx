import Categories from './screens/CategoriesScreen';
import Recipes from './screens/RecipesScreen';
import RecipeDetails from './screens/RecipeDetailsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../data/types';

const Stack = createNativeStackNavigator<RootStackParamList>();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Categories" screenOptions={{ headerTintColor: '#344E41' }}>
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
        <Stack.Screen
          name="RecipeDetails"
          component={RecipeDetails}
          options={{ title: 'Recepto detalės' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
