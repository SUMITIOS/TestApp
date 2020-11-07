import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Activities from '../commonTasks/activities';
import colors from '../constants/Colors';
import Dimension from '../constants/Dimension';


export default DetailRow = props => {
    const { title, info } = props;
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>{Activities.toTitleCase(title)}</Text>
            <Text style={styles.info}>{info}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: Dimension._width100per,
        padding: 10,
        backgroundColor:colors.colorWhite
    },
    heading: {
        width: Dimension._width30per,
        textAlign: 'right',
        fontSize: Dimension.semiLargeText,
        fontWeight: 'bold'
    },
    info: {
        marginLeft: 20,
        fontSize: Dimension.semiLargeText,
        color: colors.colorPrimary,
        width:Dimension._width60per
    }
})