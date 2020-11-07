import React from 'react';
import { FlatList, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { FloatingTitleTextInputField } from '../components/FloatingInput';
import MyIndicator from '../components/myIndicator';
import VideoItem from '../components/videoItem';
import colors from '../constants/Colors';
import Dimension from '../constants/Dimension';
import Strings from '../constants/Strings';
import usefetchMovies from '../hooks/useFetchMovies';
import moviesAction from '../reduxFiles/actions/moviesAction';


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
    const headerComp = () => {
        if (movies.length == 0) {
            return (<Text style={{ padding: 50 }}>No Items to Show!</Text>)
        } else {
            return null
        }
    }
    return (
        <>
            <StatusBar backgroundColor={colors.colorPurple} />
            <View style={styles.mainContainer}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: Dimension._width100per - 20 }}>
                    <FloatingTitleTextInputField
                        attrName='searchKey'
                        title={Strings.searchPlaceholder}
                        value={searchKey}
                        updateMasterState={(attrName, value) => dispatch(moviesAction.updateMasterState(attrName, value))}
                    />
                    <TouchableOpacity
                        onPress={() => fetchMovies(searchKey, callBack)}
                        style={{ backgroundColor: colors.colorLightGray, paddingHorizontal: 10, paddingVertical: 6 }}>
                        <Text style={{ textAlign: 'center', fontSize: Dimension.semiLargeText }}>
                            {Strings.btnLabel}
                        </Text>
                    </TouchableOpacity>
                </View>
                <FlatList                    
                    ListHeaderComponent={() => headerComp()}
                    contentContainerStyle={{ paddingBottom: 100 }}
                    numColumns={2}
                    data={movies}
                    renderItem={({ item, index }) =>
                        <VideoItem item={item}
                            onClick={() => goToDetail(item)}
                            item={item}
                            key={item.imdbID}
                        />
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