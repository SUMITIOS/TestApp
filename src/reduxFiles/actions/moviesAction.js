import Strings from "../../constants/Strings";

export default moviesAction = {
    onMoviesLoad,
    updateMasterState,
    onMoviesDetailLoad
};
function onMoviesLoad(movies) {
    return { type: Strings.GET_MOVIES, movies }
}
function updateMasterState(attr, text) {
    return { type: Strings.UPDATE_TXT, attr, text }
}
function onMoviesDetailLoad(detail) {
    return { type: Strings.GET_MOVIE_DETAIL, detail }
}