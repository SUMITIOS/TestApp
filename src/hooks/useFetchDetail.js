import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Activities from '../commonTasks/activities';
import Strings from '../constants/Strings';
import moviesAction from '../reduxFiles/actions/moviesAction';



export default function useFetchLogin() {
    const [isLoading, setLoading] = useState(false);
    const [hasErrored, setError] = useState(false);
    const [response, setResponse] = useState(null);

    const dispatch = useDispatch()
    const fetch = function (movieId, callback) {
        const apiEndpoint = Strings.detailApi + movieId
        setLoading(true);
        const request = new XMLHttpRequest();
        request.open("Get", apiEndpoint, true);
        return new Promise((resolve, reject) => {
            request.onload = () => {
                setLoading(false);
                Activities.debugOnLoadSuccess(request.response)
                const res = JSON.parse(request.response);
                setResponse(res);
                Activities.debugOnLoadSuccess(res, apiEndpoint)
                setLoading(false)
                if (res.Title) {
                    dispatch(moviesAction.onMoviesDetailLoad(res))
                    if (callback) { callback(res) }
                } else {
                    Activities.displayToastError(res.Error)
                }
                resolve(response)
            };
            request.onerror = e => {
                setLoading(false)
                setError(true);
                Activities.debugFailureError(e)
            };
            request.ontimeout = e => {
                setLoading(false);
                setError(true);
                Activities.debugTimeoutErr(e)
            };
            request.send();
        })
    }
    return [fetch, isLoading];
}