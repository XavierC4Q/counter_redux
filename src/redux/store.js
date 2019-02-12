import { createStore } from 'redux'
import allReducers from './reducer/root'

export default () => {
    const store = createStore(
        allReducers,
        {}
    )
    return store
}