import React, { Component } from 'react'
import { databaseUrl } from '../../config'

export class ActionStep extends Component {
    _isMounted = false;

    state = {
        openActionSteps: [],
        moveName: []
    }

    componentDidMount() {
        this._isMounted = true;
        this.fetchActionSteps()
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    fetchActionSteps = () => {
        fetch(`${databaseUrl}/action_steps`)
            .then(res => res.json())
            .then(actionSteps => {
                if (this._isMounted) {
                    this.setState({
                        openActionSteps: actionSteps.filter(actionStep =>
                            !actionStep.is_completed
                            // && actionStep.teacherId === this.props.user.id
                        )
                    })
                }
            })
    }

    render() {
        let openActionSteps = this.state.openActionSteps
        let userActionSteps = openActionSteps.map(actionStep => <div key={actionStep.id}>
            <p>{actionStep.long_text}</p>
            <p>Date Assigned: {actionStep.date.slice(0, 10)}</p>
            <hr />
        </div>
        )
        return (
            <div>
                {userActionSteps}
            </div>
        )
    }
}

export default ActionStep
