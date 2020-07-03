import React, { Component } from 'react'
import { databaseBasicUrl } from '../../config'

export class Login extends Component {

    state = { username: "", password: "" }

    handleTextChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleLogin = e => {
        e.preventDefault()
        fetch(`${databaseBasicUrl}/login`, {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.errors) {
                    alert(data.errors)
                    this.props.setUser(null)
                }
                else {
                    this.props.setUser(data)
                }
            })
    }

    render() {
        return (
            <div>
                Login
                <form onSubmit={this.handleLogin}>
                    <input type="text" name="username" value={this.state.username} placeholder="Username" onChange={this.handleTextChange}></input>
                    <input type="password" name="password" value={this.state.password} placeholder="Password" onChange={this.handleTextChange}></input>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Login
