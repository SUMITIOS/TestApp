import Strings from '../../constants/Strings';

const initialState = {
    movies: [],
    isLoading: false,
    searchKey: '',
    currentMovieDetail: null,
    email:'',
    password:''
}
export function moviesReducer(state = initialState, action) {
    switch (action.type) {
        case Strings.UPDATE_TXT:
            return {
                ...state,
                [action.attr]: action.text
            }
        case Strings.LOGIN:
            return state;
        case Strings.GET_MOVIES:
            return {
                ...state,
                movies: action.movies
            }
        case Strings.GET_MOVIE_DETAIL:
            return {
                ...state,
                currentMovieDetail: action.detail
            }
        default:
            return state;
    }
}
