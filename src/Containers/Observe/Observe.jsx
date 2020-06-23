import React, { Component } from 'react'
import { databaseUrl } from '../../config'
import './observe.scss'

let defaultState = {

}

export class Observe extends Component {

    state = {
        teacherId: "",
        coachId: "",
        date: "",
        move: "",
        score: "",
        notes: "",
        comments: "",
    }

    handleSubmit = () => {
        debugger
        fetch(`${databaseUrl}/observations`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                teacherId: 13,
                coachId: 14,
                date: this.state.date,
                move: this.state.move,
                score: this.state.score,
                notes: this.state.notes,
                comments: this.state.comments,
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
            date: "",
            move: "",
            score: "",
            notes: "",
            comments: "",
            isReleased: false
        })
    }
    render() {
        console.log(this.state)
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
                            <select name="move" value={this.state.move} onChange={this.handleTextChange} >
                                <option value="Routines and Procedures">Routines & Procedures 101</option>
                                <option value="Strong Voice">Strong Voice</option>
                                <option value="What to Do">What to Do</option>
                            </select>
                            <div className="observeButtons">
                                <label>
                                    <input
                                        type="radio"
                                        name="score"
                                        value={this.state.score}
                                        onClick={() => this.handleScore(1)}
                                        className="form-check-input" />
                                        1
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="score"
                                        value={this.state.score}
                                        onClick={() => this.handleScore(2)}
                                        className="form-check-input" />
                                        2
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="score"
                                        value={this.state.score}
                                        onClick={() => this.handleScore(3)}
                                        className="form-check-input" />
                                        3
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="score"
                                        value={this.state.score}
                                        onClick={() => this.handleScore(4)}
                                        className="form-check-input" />
                                        4
                                </label>
                            </div>
                            <input type="text" name="notes" value={this.state.notes} placeholder="Notes" onChange={this.handleTextChange}></input>
                        </div>
                        <button>Submit</button>
                    </form>
                </div>

                {/* <div>
                    <select>
                        <option value="rp">Routines & Procedures 101</option>
                        <option value="sv">Strong Voice</option>
                        <option value="wtd">What to Do</option>
                    </select>
                    <div className="observeButtons">
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>4</button>
                    </div>
                    <input></input>
                </div>
                <div>
                    <select>
                        <option value="rp">Routines & Procedures 101</option>
                        <option value="sv">Strong Voice</option>
                        <option value="wtd">What to Do</option>
                    </select>
                    <div className="observeButtons">
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>4</button>
                    </div>
                    <input></input>
                </div> */}
                <div className="observeLatestActionSteps">
                    <h4>Lastest Action Steps:</h4>
                </div>
            </div>
        )
    }
}

export default Observe