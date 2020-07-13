import React, { Component } from 'react'

export class UserHome extends Component {
    render() {
        return (
            <div>
                Welcome to GBF 2.0 {this.props.user.teacher_name}
            </div>
        )
    }
}

export default UserHome
