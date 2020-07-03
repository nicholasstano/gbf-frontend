import React, { Component } from 'react'
import { databaseUrl } from '../../config'

export class Registration extends Component {

    state = {
        toggleRegistration: false,
        username: "",
        password: "",
        isTeacher: false,
        isCoach: false,
        isLeader: false,
        organization: "",
        teacherName: ""
    }

    handleSubmit = () => {
        fetch(`${databaseUrl}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password_digest: this.state.password,
                is_teacher: this.state.isTeacher,
                is_coach: this.state.isCoach,
                is_leader: this.state.isLeader,
                organization: this.state.organization,
                teacher_name: this.state.teacherName
            })
        })
    }

    handleTextChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleIsTeacher = event => {
        this.setState({ ...this.state, isTeacher: !this.state.isTeacher })
    }

    handleIsCoach = event => {
        this.setState({ ...this.state, isCoach: !this.state.isCoach })
    }

    handleIsLeader = event => {
        this.setState({ ...this.state, isLeader: !this.state.isLeader })
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text" name="username" value={this.state.username} placeholder="Username" onChange={this.handleTextChange}></input>
                        <input type="password" name="password" value={this.state.password_digest} placeholder="Password" onChange={this.handleTextChange}></input>
                        <input type="text" name="teacherName" value={this.state.teacherName} placeholder="Teacher Name" onChange={this.handleTextChange}></input>
                        <input type="text" name="organization" value={this.state.organization} placeholder="Organization" onChange={this.handleTextChange}></input>
                        <input
                            name="isTeacher"
                            type="checkbox"
                            checked={this.state.isTeacher}
                            onChange={this.handleIsTeacher} />
                        <label>Is Teacher?</label>
                        <input
                            name="isCoach"
                            type="checkbox"
                            checked={this.state.isCoach}
                            onChange={this.handleIsCoach} />
                        <label>Is Coach?</label>
                        <input
                            name="isLeader"
                            type="checkbox"
                            checked={this.state.isLeader}
                            onChange={this.handleIsLeader} />
                        <label>Is Leader?</label>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Registration