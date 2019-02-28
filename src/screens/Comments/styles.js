import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,

    },
    comments: {
        flex: 1
    },
    commentsContainer: {
        flex: 1,
        flexDirection: "row"
    },
    lefttPart: {
        padding: 10
    },
    avatar: {
        width: 70,
        height: 70,
        backgroundColor: "red"
    },
    rightPart: {
        flex: 1,
        padding: 10,
        paddingLeft: 0
    },
    footer: {
        height: 50,
        flexDirection: "row",
        backgroundColor: "gray",
        alignItems: "center",
        justifyContent: "space-around"
    },

});