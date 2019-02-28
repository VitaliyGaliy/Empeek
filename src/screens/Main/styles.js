import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        marginLeft: 15
    },
    bigTitle: {
        fontWeight: 'bold',
        fontSize: 25,
        color: "white"
    },
    smallTitle: {
        fontSize: 14,
        color: "white"
    },
    itemWrapper: {
        flexDirection: "row",
        padding: 10,
        alignItems: "center",
        justifyContent: "space-between"
    },
    footerBtnWrapper: {
        alignItems: "center",
        padding: 15
    }
});