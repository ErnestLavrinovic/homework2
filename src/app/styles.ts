import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
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
    recipeCard: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 12,
        overflow: 'hidden',
        marginBottom: 12,
    },
    recipeImage: {
        width: 110,
        height: 120,
        resizeMode: 'cover',
    },
    recipeContent: {
        flex: 1,
        padding: 12,
        justifyContent: 'center',
    },
    recipeTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#344E41',
        marginBottom: 6,
    },
    recipeDescription: {
        fontSize: 13,
        lineHeight: 18,
        color: '#666',
    },
});
