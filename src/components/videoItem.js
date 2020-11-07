import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../constants/Colors';
import Dimension from '../constants/Dimension';
const defaultImg = require('../assets/images/default.jpeg')


export default myIndicator = props => {
    const { item, onClick } = props;
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={onClick}
            style={styles.container}>
            <ImageBackground
                style={styles.img}
                source={defaultImg}
            >
                <Image
                    source={item.Poster ? { uri: item.Poster } : defaultImg}
                    resizeMode={'cover'}
                    style={styles.img}
                />
            </ImageBackground>
            <View style={styles.txtContainer}>
                <Text style={styles.title}
                    ellipsizeMode={'tail'}
                    numberOfLines={2}
                >{item.Title}</Text>
                <Text style={styles.type} >{item.Type}</Text>
                <Text style={styles.year} >{item.Year}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.colorWhite,
        width: Dimension._width50per - 15,
        marginHorizontal: 5,
        elevation: 5,
        marginTop: 20,
    },
    img: {
        width: Dimension._width50per - 15,
        height: 240
    },
    title: {
        fontSize: Dimension.largeTxt,
        fontWeight: 'bold'
    },
    type: {
        fontSize: Dimension.semiLargeText,
    },
    year: {
        fontSize: Dimension.regularTxt,
        color: colors.colorGray
    },
    txtContainer: {
        padding: 5,
    }
})