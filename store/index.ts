import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

import SettingsReducer from './reducers/settings/settings.reducer';
import { settingsInitialState } from './reducers/settings/settings.state';
import thunk from 'redux-thunk'

const store = combineReducers({
    settings: SettingsReducer(settingsInitialState)
});

export default createStore(store, compose(
    applyMiddleware(thunk),
));