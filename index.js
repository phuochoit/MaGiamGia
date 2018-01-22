import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import AppNavigator from './navigators/appNavigation';

//Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';


import AllReducer from './reducers';

//Redux saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga'; 


const sagaMiddleware = createSagaMiddleware();

let store = createStore(AllReducer, applyMiddleware(sagaMiddleware));

const App = () => (
    <Provider store={store}>
        <AppNavigator />
    </Provider>
);
sagaMiddleware.run(rootSaga);
AppRegistry.registerComponent('magiamgia', () => App);
