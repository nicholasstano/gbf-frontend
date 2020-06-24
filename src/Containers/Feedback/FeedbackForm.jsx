import React, { Component } from 'react'
import { databaseUrl } from '../../config'
import './feedback.scss'

export class FeedbackForm extends Component {

    state = {
        teacherId: "",
        coachId: "",
        praise: "",
        quickHits: "",
        actionStepId: "",
        seeIt: "",
        nameIt: "",
        doIt: "",
    }

    handleSubmit = () => {

        var today = new Date();
        var todaysDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        fetch(`${databaseUrl}/feedbacks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                teacherId: 13,
                coachId: 14,
                action_step_id: 1,
                observation_id: 1,
                date: todaysDate,
                praise: this.state.praise,
                quick_hits: this.state.quickHits,
                see_it: this.state.seeIt,
                name_it: this.state.nameIt,
                do_it: this.state.doIt,
                is_released: false
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
            praise: "",
            quickHits: "",
            actionStepId: "",
            seeIt: "",
            nameIt: "",
            doIt: "",
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
                            <input type="text" name="praise" value={this.state.praise} placeholder="Praise" onChange={this.handleTextChange}></input>
                            <input type="text" name="quickHits" value={this.state.quickHits} placeholder="Quick Hits" onChange={this.handleTextChange}></input>
                            <input type="text" name="seeIt" value={this.state.seeIt} placeholder="See It" onChange={this.handleTextChange}></input>
                            <input type="text" name="nameIt" value={this.state.nameIt} placeholder="Name It" onChange={this.handleTextChange}></input>                            <input type="text" name="doIt" value={this.state.doIt} placeholder="Do It" onChange={this.handleTextChange}></input>
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

export default FeedbackForm