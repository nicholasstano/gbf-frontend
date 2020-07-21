import React, { Component } from 'react'
import MoveRows from './MoveRows'

class TeacherStats extends Component {
    render() {
        return (
            <div>
                <h2>Teacher Moves:</h2>
                <table>
                <tr>
                  <th>Teacher Move</th>
                  <th>Scores</th>
                </tr>
                <MoveRows user={this.props.user}/>
                </table>
            </div>
        )
    }
}

export default TeacherStats;
