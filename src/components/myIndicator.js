import React from 'react';
import { ActivityIndicator } from 'react-native';
import colors from '../constants/Colors';

export default myIndicator = props => {
    return (
        <ActivityIndicator
            style={{ position: 'absolute', top: 70, bottom: 0, right: 0, left: 0, backgroundColor: colors.colorWhite }}
            size="large"
            color={colors.colorPrimary}
        />
    )
}