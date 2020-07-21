import React, { Component } from 'react'

class MoveRows extends Component {
    render() {
        return (
                this.props.user.feedback.map((obs) => (
                  <tr> 
                    <td>{obs.move.name}</td>
                    <td>{obs.observation.score}</td>
                  </tr>
        )
      )
    )
    }
}

export default MoveRows;
