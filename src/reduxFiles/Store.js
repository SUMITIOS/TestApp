import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reduxFiles/reducers/rootReducer';


const middlewares = [thunk];

const Store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
)

export default Store;

