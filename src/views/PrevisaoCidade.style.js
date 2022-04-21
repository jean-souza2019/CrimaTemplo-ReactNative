import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "gray",
        margin: 5,
        marginBottom: 40
    }, fontTextoTitulo: {
        fontSize: 20
    }, fontTextoCorpo: {
        fontSize: 25,
        fontWeight: 'bold'
    }, linha: {
        flexDirection: "row",
        margin: 5
    }, coluna: {
        flex: 2
    }, valor: {
        flex: 4
    }, imagem: {
        width: 50,
        height: 50,
        alignSelf: "center"
    }, fontTextoTituloCard: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20
    }
});
