import type { ImageSourcePropType } from 'react-native';

export type MealCourse = 'breakfast' | 'lunch' | 'dinner';

export interface Recipe {
    id: number;
    name: string;
    description?: string;
    tags?: string[];
    prepTime?: string;
    cookTime?: string;
    servings?: number;
    totalTime?: string;
    ingredients?: string[];
    steps?: string[];
    videoUrl?: string;
    course: MealCourse;
    categories: string[];
    image: ImageSourcePropType;
    source: string;
}
