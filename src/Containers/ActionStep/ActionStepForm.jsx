import React, { Component } from 'react'
import { databaseUrl } from '../../config'

export class ActionStepForm extends Component {

    state = {
        teacherId: "",
        coachId: "",
        moveId: "",
        shortName: "",
        longText: ""
    }

    handleSubmit = () => {

        var today = new Date();
        var todaysDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        fetch(`${databaseUrl}/action_steps`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                teacherId: this.props.teacherId,
                coachId: this.props.coachId,
                date: todaysDate,
                short_name: this.state.shortName,
                long_text: this.state.longText,
                is_assigned: false,
                is_completed: false
            })
        })
    }

    handleTextChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleScore = (num) => {
        this.setState({ ...this.state, score: num })
    }

    handleMoveChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmitNewReview = event => {
        event.preventDefault()
        this.handleSubmit(this.state)
        this.setState({
            teacherId: "",
            coachId: "",
            moveId: "",
            shortName: "",
            longText: ""
        })
    }
    render() {
        return (
            <div className="actionStepForm">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text" name="shortName" value={this.state.shortName} placeholder="Short Description" onChange={this.handleTextChange}></input>
                        <input type="text" name="longText" value={this.state.longText} placeholder="Long Text Description" onChange={this.handleTextChange}></input>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        )
    }

}

export default ActionStepForm
