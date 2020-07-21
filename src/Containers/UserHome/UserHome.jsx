import React, { Component } from 'react'
import TeacherStats from './TeacherStats'

export class UserHome extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to Get Better Faster 2.0, {this.props.user.teacher_name}</h1>
                <TeacherStats user={this.props.user}/>
            </div>
        )
    }
}

export default UserHome
