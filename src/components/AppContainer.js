import React, { Component, PropTypes } from 'react'
import LogInForm from './LogInForm'
import { makeRequest } from '../AC'
import { connect } from 'react-redux'
import FaCheck from 'react-icons/lib/fa/check'
import url from '../img/LoginPage.png'
import './styles.css'

class AppContainer extends Component {
    render() {
        const { loaded, isLoginCorrect, isPasswordCorrect } = this.props
        console.log(this.props)
        if (loaded) return <div>{<FaCheck className='checkIcon'/>} Successful logged </div>
        return (
            <div className='appWrapper'>
                <img src={url} />
                <LogInForm {...this.props}/>
            </div>
        )
    }
}

export default connect((store) => {
    const { loading, loaded, error, isLoginCorrect, isPasswordCorrect } = store.logInReducer
    return {
        loading, loaded, error, isLoginCorrect, isPasswordCorrect
    }
}, {makeRequest})(AppContainer)
