import React from 'react';
import { StyleSheet, View } from 'react-native';
import Dimension from '../constants/Dimension';
import DetailRow from './detailRow';

export default UserItem = props => {
    const { id, name, age, gender, email, phoneNo } = props.item;
    return (
        <View style={styles.container}>
            <DetailRow
                title={'Id'}
                info={id}
            />
            <DetailRow
                title={'name'}
                info={name}
            />
            <DetailRow
                title={'age'}
                info={age}
            />
            <DetailRow
                title={'gender'}
                info={gender}
            />
            <DetailRow
                title={'email'}
                info={email}
            />
            <DetailRow
                title={'phone'}
                info={phoneNo}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: Dimension._width100per - 20,
        padding: 10,
        elevation: 5
    },
})