import React, { Component } from 'react'
import { databaseUrl } from '../../config'

export class ObserveForm2 extends Component {
    _isMounted = false;

    state = {
        teacherId: "",
        coachId: "",
        date: "",
        moveId: "",
        score: "",
        notes: "",
        comments: "",
        isReleased: false,
        quickHits: "",
        observationId: "",
        praise: "",
        seeIt: "",
        nameIt: "",
        doIt: "",
        shortText: "",
        longText: "",
        isAssigned: false,
        isCompleted: false,
        teacherMoves: [],
        teachers: []
    }

    componentDidMount() {
        this._isMounted = true;
        this.fetchMovesAndTeachers()
        this.setCoachId()
    }

    fetchMovesAndTeachers = () => {
        fetch(`${databaseUrl}/moves`)
            .then(res => res.json())
            .then(moves => {
                if (this._isMounted) {
                    this.setState({ teacherMoves: moves })
                }
            })
        fetch(`${databaseUrl}/users`)
            .then(res => res.json())
            .then(users => {
                if (this._isMounted) {
                    this.setState({ teachers: users.filter(user => user.is_teacher && (user.coachInformation.coachId === this.state.coachId)) })
                }
            })
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    handleTextChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleIdSelect = (e) => {
        this.setState({ [e.target.name]: parseInt(e.target.value) })
    }

    setCoachId = () => {
        this.setState({ coachId: this.props.user.id })
    }

    handleScore = (num) => {
        this.setState({ ...this.state, score: num })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        var today = new Date();
        var todaysDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var observationData;
        var actionStepData;

        fetch(`${databaseUrl}/observations`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                teacherId: this.state.teacherId,
                coachId: this.state.coachId,
                date: todaysDate,
                score: this.state.score,
                notes: this.state.notes,
                comments: this.state.comments,
                move: this.state.moveId,
                is_released: false
            })
        })
            .then(response => response.json())
            .then(oData => {
                observationData = oData
                fetch(`${databaseUrl}/action_steps`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        teacherId: this.state.teacherId,
                        coachId: this.state.coachId,
                        date: todaysDate,
                        short_text: this.state.shortText,
                        long_text: this.state.longText,
                        is_assigned: false,
                        is_completed: false
                    })
                })
                    .then(response => response.json())
                    .then(asData => {
                        actionStepData = asData
                        fetch(`${databaseUrl}/feedbacks`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Accept': 'application/json'
                            },
                            body: JSON.stringify({
                                teacherId: this.state.teacherId,
                                coachId: this.state.coachId,
                                action_step_id: actionStepData.id,
                                observation_id: observationData.id,
                                date: todaysDate,
                                praise: this.state.praise,
                                quick_hits: this.state.quickHits,
                                see_it: this.state.seeIt,
                                name_it: this.state.nameIt,
                                do_it: this.state.doIt,
                                is_released: false
                            })
                        })
                    })
            }
            );
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {this.state.teachers.length >= 1 &&
                        <select name="teacherId" value={this.state.teacherId} onChange={this.handleIdSelect} >
                            <option>Select A Teacher</option>
                            {this.state.teachers.map(teacher => <option key={teacher.teacher_name} value={teacher.id}>{teacher.teacher_name}</option>)}
                        </select>
                    }
                    {this.state.teacherMoves.length > 1 &&
                        <select name="moveId" value={this.state.moveId} onChange={this.handleIdSelect} >
                            <option>Select A Move</option>
                            {this.state.teacherMoves.map(move => <option key={move.id} value={move.id}>{move.name}</option>)}
                        </select>
                    }
                    <div className="observeButtons">
                        <label>1</label>
                        <input
                            type="radio"
                            name="score"
                            value={this.state.score}
                            onClick={() => this.handleScore(1)}
                            className="form-check-input" />
                        <label>2</label>
                        <input
                            type="radio"
                            name="score"
                            value={this.state.score}
                            onClick={() => this.handleScore(2)}
                            className="form-check-input" />
                        <label>3</label>
                        <input
                            type="radio"
                            name="score"
                            value={this.state.score}
                            onClick={() => this.handleScore(3)}
                            className="form-check-input" />
                        <label>4</label>
                        <input
                            type="radio"
                            name="score"
                            value={this.state.score}
                            onClick={() => this.handleScore(4)}
                            className="form-check-input" />
                    </div>
                    <div>
                        <label>Observation Notes</label>
                        <input type="text" name="notes" value={this.state.notes} placeholder="Notes" onChange={this.handleTextChange}></input>
                    </div>
                    <div>
                        <label>Observation Comments</label>
                        <input type="text" name="comments" value={this.state.comments} placeholder="Comments" onChange={this.handleTextChange}></input>
                    </div>
                    <div>
                        <label>Praise</label>
                        <input type="text" name="praise" value={this.state.praise} placeholder="Praise" onChange={this.handleTextChange}></input>
                    </div>
                    <div>
                        <label>Quick Hits</label>
                        <input type="text" name="quickHits" value={this.state.quickHits} placeholder="Quick Hits" onChange={this.handleTextChange}></input>
                    </div>
                    <div>
                        <label>See It</label>
                        <input type="text" name="seeIt" value={this.state.seeIt} placeholder="See It" onChange={this.handleTextChange}></input>
                    </div>
                    <div>
                        <label>Name It</label>
                        <input type="text" name="nameIt" value={this.state.nameIt} placeholder="Name It" onChange={this.handleTextChange}></input>
                    </div>
                    <div>
                        <label>Do It</label>
                        <input type="text" name="doIt" value={this.state.doIt} placeholder="Do It" onChange={this.handleTextChange}></input>
                    </div>
                    <div>
                        <label>Action Step Short Text</label>
                        <input type="text" name="shortText" value={this.state.shortText} placeholder="Short Description" onChange={this.handleTextChange}></input>
                    </div>
                    <div>
                        <label>Action Step Long Text</label>
                        <input type="text" name="longText" value={this.state.longText} placeholder="Long Text Description" onChange={this.handleTextChange}></input>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default ObserveForm2
