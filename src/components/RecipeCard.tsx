import { View, Text, Image, Pressable } from 'react-native';
import { style } from '../app/styles';
import type { Recipe } from '../data/types';

interface Props {
    recipe: Recipe;
    onPress?: () => void;
}

export default function RecipeCard({ recipe, onPress }: Props) {
    return (
        <Pressable onPress={onPress} style={style.recipeCard}>
            <Image source={recipe.image} style={style.recipeImage} />
            <View style={style.recipeContent}>
                <Text style={style.recipeTitle}>{recipe.name}</Text>
                <Text style={style.recipeDescription} numberOfLines={2}>
                    {recipe.description}
                </Text>
            </View>
        </Pressable>
    );
}