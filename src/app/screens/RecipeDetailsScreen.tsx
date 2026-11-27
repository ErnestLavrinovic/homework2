import { View, Text, ScrollView, Image, KeyboardAvoidingView, Keyboard, Platform } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { style } from '../styles'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { RootStackParamList } from '../../data/types';
import { recipes } from '../../data/recipes'
import { useState, useRef, useEffect } from 'react';
import type { ComponentRef } from 'react';
import { useHeaderHeight } from '@react-navigation/elements';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import RecipeNotes from '../../components/RecipeNotes';

type Props = NativeStackScreenProps<RootStackParamList, 'RecipeDetails'>;


export default function RecipeDetails({ route }: Props) {
    const { recipeId } = route.params;
    const recipe = recipes.find(item => item.id === recipeId)
    const scrollRef = useRef<ComponentRef<typeof ScrollView>>(null);
    const headerHeight = useHeaderHeight();
    const insets = useSafeAreaInsets();
    const [keyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardVisible(true);
            requestAnimationFrame(() => {
                scrollRef.current?.scrollToEnd({ animated: true });
            });
        });
        const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardVisible(false);
        });

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);

    if (!recipe) return (
        <View style={style.container}>
            <Text>Receptas nerastas</Text>
        </View>
    );
    return (
        <KeyboardAvoidingView
            style={style.detailsScreen}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={headerHeight}
        >
            <Image source={recipe.image} style={style.detailsImage} resizeMode="cover" />

            <ScrollView style={style.detailsScroll} contentContainerStyle={[
                style.detailsScrollContent,
                { paddingBottom: keyboardVisible ? 0 : insets.bottom },
            ]} keyboardShouldPersistTaps="handled"
                ref={scrollRef}>
                <LinearGradient
                    colors={['rgba(52, 78, 65, 0)', 'rgba(52, 78, 65, 0.85)', '#344E41']}
                    locations={[0, 0.65, 1]}
                    style={style.detailsTitleGradient}
                >
                    <Text style={style.detailsTitle}>{recipe.name}</Text>
                </LinearGradient>
                <View style={style.detailsBody}>
                    <View style={style.detailsMeta}>
                        {recipe.servings != null && (
                            <View style={style.detailsMetaItem}>
                                <Text style={style.detailsMetaIcon}>🍽️</Text>
                                <Text style={style.detailsMetaText}>
                                    Porcijos: {recipe.servings}
                                </Text>
                            </View>
                        )}

                        {recipe.totalTime && (
                            <View style={style.detailsMetaItem}>
                                <Text style={style.detailsMetaIcon}>⏱️</Text>
                                <Text style={style.detailsMetaText}>
                                    {recipe.totalTime}
                                </Text>
                            </View>
                        )}
                    </View>

                    <View style={style.detailsDivider} />
                    <Text style={style.detailsDescription}>
                        {recipe.description}
                    </Text>
                    {recipe.ingredients && recipe.ingredients.length > 0 && (
                        <View>
                            <View style={style.detailsDivider} />
                            <Text style={style.detailsSectionTitle}>Ingredientai</Text>

                            {recipe.ingredients.map((ingredient, index) => (
                                <Text key={index} style={style.detailsIngredient}>
                                    • {ingredient}
                                </Text>
                            ))}
                        </View>
                    )}

                    {recipe.steps && recipe.steps.length > 0 && (
                        <View>
                            <View style={style.detailsDivider} />
                            <Text style={style.detailsSectionTitle}>Gaminimo eiga</Text>

                            {recipe.steps.map((step, index) => (
                                <View key={index} style={style.detailsStep}>
                                    <Text style={style.detailsStepNumber}>{index + 1}</Text>
                                    <Text style={style.detailsStepText}>{step}</Text>
                                </View>
                            ))}
                        </View>
                    )}

                    <View style={style.detailsDivider} />
                    <RecipeNotes
                        key={recipeId}
                        recipeId={recipeId}
                        onInputFocus={() => {
                            setTimeout(() => {
                                scrollRef.current?.scrollToEnd({ animated: true });
                            }, 200);
                        }}
                    />

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
