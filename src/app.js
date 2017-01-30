import React from 'react'
import ReactDOM from 'react-dom'
import LogInForm from './components/LogInForm'
import AppContainer from './components/AppContainer'
import store from './store'
import { Provider } from 'react-redux'

ReactDOM.render(
    <Provider store = {store}>
        <AppContainer />
    </Provider>, document.getElementById('container'))
