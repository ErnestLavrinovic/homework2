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
        color: '#344E41'
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
    detailsScreen: {
        flex: 1,
        backgroundColor: '#344E41',
    },
    detailsImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 320,
    },
    detailsScroll: {
        flex: 1,
    },
    detailsScrollContent: {
        paddingTop: 160,
    },
    detailsTitleGradient: {
        paddingTop: 90,
        paddingHorizontal: 24,
        paddingBottom: 16,
    },
    detailsBody: {
        backgroundColor: '#344E41',
        padding: 24,
        paddingBottom: 12,
    },
    detailsTitle: {
        color: '#FFF8ED',
        fontSize: 30,
        lineHeight: 36,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    detailsDescription: {
        color: '#E0E8DF',
        fontSize: 16,
        lineHeight: 25,
    },
    detailsMeta: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 20,
    },
    detailsMetaItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    detailsMetaIcon: {
        fontSize: 20,
    },
    detailsMetaText: {
        color: '#E0E8DF',
        fontSize: 14,
    },
    detailsDivider: {
        height: 1,
        backgroundColor: 'rgba(255, 248, 237, 0.2)',
        marginVertical: 24,
    },
    detailsSectionTitle: {
        color: '#FFF8ED',
        fontSize: 22,
        fontWeight: '700',
        marginBottom: 16,
    },
    detailsIngredient: {
        color: '#E0E8DF',
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 10,
    },
    detailsStep: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 12,
        marginBottom: 20,
    },
    detailsStepNumber: {
        color: '#FFF8ED',
        backgroundColor: 'rgba(255, 248, 237, 0.12)',
        width: 32,
        height: 32,
        borderRadius: 16,
        textAlign: 'center',
        lineHeight: 32,
        fontWeight: '700',
    },
    detailsStepText: {
        flex: 1,
        color: '#E0E8DF',
        fontSize: 16,
        lineHeight: 25,
    },
    noteInput: {
        minHeight: 100,
        backgroundColor: 'rgba(255, 248, 237, 0.08)',
        borderWidth: 1,
        borderColor: 'rgba(255, 248, 237, 0.3)',
        borderRadius: 12,
        padding: 14,
        color: '#FFF8ED',
        fontSize: 16,
        textAlignVertical: 'top',
    },
    noteButton: {
        backgroundColor: '#FFF8ED',
        borderRadius: 12,
        paddingVertical: 14,
        alignItems: 'center',
        marginTop: 12,
    },
    noteButtonDisabled: {
        opacity: 0.4,
    },
    noteButtonText: {
        color: '#344E41',
        fontSize: 16,
        fontWeight: '700',
    },
    noteItem: {
        backgroundColor: 'rgba(255, 248, 237, 0.08)',
        borderRadius: 12,
        padding: 14,
        marginBottom: 12,
    },
    noteText: {
        color: '#FFF8ED',
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 10,
    },
    noteDeleteText: {
        color: '#F2B8AE',
        fontSize: 14,
        fontWeight: '600',
    },
});
