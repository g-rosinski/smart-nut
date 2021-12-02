import { combineReducers, createStore } from 'redux';

import SettingsReducer from './reducers/settings/settings.reducer';
import { settingsInitialState } from './reducers/settings/settings.state';

const store = combineReducers({
    settings: SettingsReducer(settingsInitialState)
});

export default createStore(store);