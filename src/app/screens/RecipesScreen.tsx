import { View } from 'react-native';
import { style } from '../styles';
import { FlatList } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../data/types';
import { recipes } from '../../data/recipes';
import RecipeCard from '../../components/RecipeCard';

type Props = NativeStackScreenProps<RootStackParamList, 'Recipes'>;

export default function Recipes({ route }: Props) {
    const { course } = route.params;

    const filteredRecipes =
        course === 'all'
            ? recipes
            : recipes.filter(recipe => recipe.course === course);
    return (
        <View style={style.container}>
            <FlatList
                data={filteredRecipes}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <RecipeCard recipe={item} />
                )}
            />
        </View>
    );
}