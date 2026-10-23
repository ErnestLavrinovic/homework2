import { Text, View, Pressable, Image } from 'react-native';
import { style } from '../styles';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../data/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Categories'>;

const categories = [
    { value: "breakfast", label: "Pusryčiai", image: require('../../../assets/images/pancake.png') },
    { value: "lunch", label: "Pietūs", image: require('../../../assets/images/ciliSriuba.jpg') },
    { value: "dinner", label: "Vakarienė", image: require('../../../assets/images/vistienaGrietinesPadaze.png') },
    { value: "all", label: "Visi receptai", image: require('../../../assets/images/cheesburgerBowl.png') }
] as const;

export default function Categories({ navigation }: Props) {
    return (
        <View style={style.container}>
            <View style={style.grid}>
                {categories.map(category => <Pressable
                    style={style.categoryCard}
                    key={category.value}
                    onPress={() =>
                        navigation.navigate('Recipes', { course: category.value })
                    }
                >
                    <Image source={category.image} style={style.categoryImage} />
                    <View style={style.categoryFooter}>
                        <Text style={style.categoryLabel}>{category.label}</Text>
                    </View>
                </Pressable>)}
            </View>
        </View >
    );
}