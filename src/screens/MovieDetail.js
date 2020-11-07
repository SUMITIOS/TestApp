import React, { useEffect } from 'react';
import { Image, ImageBackground, StatusBar, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import DetailRow from '../components/detailRow';
import MyIndicator from '../components/myIndicator';
import colors from '../constants/Colors';
import Dimension from '../constants/Dimension';
import useFetchDetail from '../hooks/useFetchDetail';

const degaultImg = require('../assets/images/default.jpeg')


export default MovieDetails = props => {
    const currentMovieDetail = useSelector(state => state.movies.currentMovieDetail)
    const [fetchMovieDetail, isLoading] = useFetchDetail();
    const callback = () => {
        //..
    }
    useEffect(() => {
        let id = props.route.params?.item.imdbID;
        fetchMovieDetail(id, callback)
    }, [])

    return (
        <>
            <StatusBar backgroundColor={colors.colorPurple} />
            <ScrollView contentContainerStyle={styles.mainContainer}>
                {(!isLoading && currentMovieDetail != undefined) &&
                    <>
                       
                        <ImageBackground
                            source={degaultImg}
                            resizeMode={'cover'}
                            style={styles.img}
                        >
                            <Image
                                source={currentMovieDetail.Poster ? { uri: currentMovieDetail.Poster } : defaultImg}
                                resizeMode={'cover'}
                                style={styles.img}
                            />
                        </ImageBackground>
                        <DetailRow
                            title={'Title'}
                            info={currentMovieDetail.Title}
                        />
                         <DetailRow
                            title={'Released'}
                            info={currentMovieDetail.Released}
                        />
                         <DetailRow
                            title={'Runtime'}
                            info={currentMovieDetail.Runtime}
                        />
                         <DetailRow
                            title={'Director'}
                            info={currentMovieDetail.Director}
                        />
                         <DetailRow
                            title={'Genre'}
                            info={currentMovieDetail.Genre}
                        />
                         <DetailRow
                            title={'Writer'}
                            info={currentMovieDetail.Writer}
                        />
                        <DetailRow
                            title={'Actors'}
                            info={currentMovieDetail.Actors}
                        />
                        <DetailRow
                            title={'Plot'}
                            info={currentMovieDetail.Plot}
                        />
                    </>
                }
            </ScrollView>
            {isLoading && <MyIndicator />}
        </>
    )
}


const styles = StyleSheet.create({
    mainContainer: {
        flexGrow: 1,
        alignItems: 'center',
        backgroundColor: colors.colorBackgroundBlue,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        paddingHorizontal: 10,
    },
    img:{
        width:Dimension._width100per,
        height:300
    }
})