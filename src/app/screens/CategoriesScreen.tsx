import { Text, View, StyleSheet, Pressable, Image } from 'react-native';

const categories = [
    { value: "breakfast", label: "Pusryčiai", image: require('../../../assets/images/pancake.png') },
    { value: "lunch", label: "Pietūs", image: require('../../../assets/images/ciliSriuba.jpg') },
    { value: "dinner", label: "Vakarienė", image: require('../../../assets/images/vistienaGrietinesPadaze.png') },
    { value: "all", label: "Visi receptai", image: require('../../../assets/images/cheesburgerBowl.png') }
];

export default function Categories() {
    return (
        <View style={style.container}>
            <Text style={style.ScreenTitle}>Mano receptai</Text>
            <View style={style.grid}>
                {categories.map(category => <Pressable
                    style={style.categoryCard}
                    key={category.value}
                    onPress={() => console.log(`Category ${category.value} pressed`)}
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

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        marginTop: 50,
    },
    ScreenTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'left',
        marginLeft: 10,
    },
    categoryCard: {
        width: '30%',
        aspectRatio: 1,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#ddd',
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
        width: '100%',
    },
    categoryImage: {
        flex: 1,
        width: '100%',
        resizeMode: 'cover',
    },
    categoryFooter: {
        backgroundColor: '#344E41',
        paddingVertical: 8,
        alignItems: 'center',
    },
    categoryLabel: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
    },
});
