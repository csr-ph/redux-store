import { createStore } from 'redux';
import reducers from './reducers';
export default createStore(reducers);
// simple file that uses redux to create the reducers instead of using the global state.