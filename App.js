import React from 'react'
import AppNavigator from './view/AppNavigator'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import friendReducer from './redux/AppReducer';

const store = createStore(friendReducer);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppNavigator/>
            </Provider>);
    }
}