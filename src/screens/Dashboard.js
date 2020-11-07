import React from 'react';
import { FlatList, StatusBar, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import MyIndicator from '../components/myIndicator';
import UserItem from '../components/userItem';
import colors from '../constants/Colors';
import Data from '../constants/Data';
import Dimension from '../constants/Dimension';
import usefetchMovies from '../hooks/useFetchMovies';


export default MoviesList = props => {
    const [fetchMovies, isLoading] = usefetchMovies();
    const dispatch = useDispatch();
    const { movies, searchKey } = useSelector(state => state.movies);
    const callBack = (res) => {
        // alert(JSON.stringify(res))
    }
    const goToDetail = (item) => {
        props.navigation.navigate('MoviesDetail', { item })
    }
    return (
        <>
            <StatusBar backgroundColor={colors.colorPurple} />
            <View style={styles.mainContainer}>
                <FlatList
                    contentContainerStyle={{ paddingBottom: 100 }}
                    data={Data.user}
                    renderItem={({ item, index }) =>
                        <UserItem item={item} />
                    }
                    keyExtractor={item => item.videoId}
                />
            </View>
            {isLoading && <MyIndicator />}
        </>
    )
}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.colorBackgroundBlue,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    headingsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: Dimension._width100per - 40,
        marginBottom: 10
    },
})