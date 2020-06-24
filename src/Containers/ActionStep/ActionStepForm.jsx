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
                teacherId: 13,
                coachId: 14,
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
            <div className="observe">
                <div className="observeHeader">
                    <h4>GBF Move:</h4>
                    <h4>Score:</h4>
                    <h4>Notes:</h4>
                </div>
                <div className="observeBody">
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <input type="text" name="shortName" value={this.state.shortName} placeholder="Short Description" onChange={this.handleTextChange}></input>
                            <input type="text" name="longText" value={this.state.longText} placeholder="Long Text Description" onChange={this.handleTextChange}></input>
                        </div>
                        <button>Submit</button>
                    </form>
                </div>
                <div className="observeLatestActionSteps">
                    <h4>Lastest Action Steps:</h4>
                </div>
            </div>
        )
    }

}

export default ActionStepForm
