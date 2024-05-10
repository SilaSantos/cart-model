import { StyleSheet } from "react-native";

export const styles =  StyleSheet.create({
    container: {
        flex: 1,
        padding: 32
    },
    btn:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 32,
        gap: 7,
    },
    form:{
        gap: 12
    },
    inputInline:{
        flexDirection: 'row',
        gap: 12
    },
    smallInput:{
        width: 70
    },
    title:{
        marginBottom: 15,
        fontSize: 17
    }
})