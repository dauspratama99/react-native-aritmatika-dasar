import {StyleSheet} from 'react-native';
const style = StyleSheet.create({
    container: {
        flex: 1,
    },

    textHeader: {
        color: "black",
        fontFamily: "RobotoMono-Bold",
        fontSize: 30,
    },

    content: {
        flex: 1,
    },

    kotak: {
        paddingVertical: 0,
        backgroundColor: "#FAFAD2",
        marginVertical: 20,
        justifyContent: "flex-start",
        alignItems: "center",
        marginHorizontal: 20,
        elevation: 5,
        borderRadius: 50,
        flexDirection: "row",
    },

    background: {
        flex: 1,
    },

    img: {
        width: 80,
        height: 80,
        borderRadius:50,
    },

    textNama: {
        
        fontSize: 16,
        fontFamily: "RobotoMono-Regular",
        color: "#000080",
    },
});

export {style};