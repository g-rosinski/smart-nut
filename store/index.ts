import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

import DailyReducer from './reducers/daily/daily.reducer';
import ProjectReducer from './reducers/project/project.reducer';
import SettingsReducer from './reducers/settings/settings.reducer';
import { dailyInitialState } from './reducers/daily/daily.state';
import { projectInitialState } from './reducers/project/project.state';
import { settingsInitialState } from './reducers/settings/settings.state';
import thunk from 'redux-thunk'

const store = combineReducers({
    settings: SettingsReducer(settingsInitialState),
    daily: DailyReducer(dailyInitialState),
    project: ProjectReducer(projectInitialState)
});

export default createStore(store, compose(
    applyMiddleware(thunk),
));