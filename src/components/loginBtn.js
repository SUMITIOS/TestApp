import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../constants/Colors';
import Dimension from '../constants/Dimension';

export default loginBtn = props => {
    const { onPress, text } = props;
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.txt}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Dimension._width100per - 120,
        backgroundColor: colors.colorPrimary,
        height: 40, justifyContent: 'center',
        borderRadius: 20,
        marginVertical: 20
    },
    txt: {
        color: colors.colorWhite,
        fontSize: Dimension.semiLargeText,
        textAlign: 'center'
    }
})