import React, { Component, PropTypes } from 'react'
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap'
import { makeRequest } from '../AC'
import { connect } from 'react-redux'
import FaCog from 'react-icons/lib/fa/cog'
import './styles.css'

export default class LogInForm extends Component {
    state = {
        login: '',
        password: ''
    }
    render() {
        const { loading, loaded, error, isPasswordCorrect, isLoginCorrect } = this.props
        console.log(isPasswordCorrect)
        return (
            <div>
                <Form inline className="formWrapper">
                    <FormControl type="text" placeholder="  login"
                        className={!(isLoginCorrect === false) ? "userInput" : "userInput error"}
                        value={this.state.login}
                        onChange={this.handleChange('login')}
                    />
                    <FormControl type="password" placeholder="  password"
                    className={!(isPasswordCorrect === false) ? "userInput" : "userInput error"}
                    value={this.state.password}
                    onChange={this.handleChange('password')}
                    />
                  <Button type="button" onClick={this.handleClick}>
                    {loading ? <FaCog /> : 'Login ➔'}
                  </Button>
                </Form>
            </div>
        )
    }

    handleChange = field => ev => {
        this.setState({
            [field]: ev.target.value
        })
    }

    handleClick = ev => {
        const { login, password } = this.state
        const { makeRequest } = this.props

        login && password && makeRequest(login, password)
    }
}
