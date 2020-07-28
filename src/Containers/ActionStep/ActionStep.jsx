import React, { Component } from 'react'
import ActionStepView from './ActionStepView.jsx'
import { databaseUrl } from '../../config'
import './actionstep.scss'

export class ActionStep extends Component {
    _isMounted = false;

    state = {
        teachers: [],
        coachId: null
    }

    componentDidMount() {
        this._isMounted = true;
        this.setCoachId()
        this.fetchTeachers()
    }

    fetchTeachers = () => {
        let teacherIds;
        let teachers = []
        fetch(`${databaseUrl}/teacher_coaches`)
            .then(res => res.json())
            .then(teacherCoaches => {
                teacherIds = teacherCoaches.filter(tc => tc.coachId === this.props.user.id).map(t => t.teacherId)
                console.log(teachers)
            })
        fetch(`${databaseUrl}/users`)
            .then(res => res.json())
            .then(users => {
                teacherIds.forEach(id => teachers.find(teacher => {
                    console.log(teachers, teacherIds)
                    teacher.id = id
                    this.setState({ ...teachers, teachers: [teachers, ...teacher] })
                    teachers.push(this.state.teachers)
                }))
            })

        // fetch(`${databaseUrl}/users`)
        //     .then(res => res.json())
        //     .then(users => {
        //         if (this._isMounted && this.state.coachId) {
        //             this.setState({ teachers: users.filter(user => user.is_teacher) })
        //         }
        //     })
    }

    setCoachId = () => {
        if (this.props.user.is_coach) {
            this.setState({ coachId: this.props.user.id })
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        let feedback = [];
        if (this.props.user.is_teacher) {
            feedback = this.props.user.feedback.filter(feedback => !feedback.is_released)
            console.log(feedback)
        }
        else if (this.props.user.is_coach) {

        }
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {this.state.teachers.length > 1 &&
                        <select name="teacherId" value={this.state.teacherId} onChange={this.handleIdSelect} >
                            <option>Select A Teacher</option>
                            {this.state.teachers.map(teacher => <option key={teacher.teacher_name} value={teacher.id}>{teacher.teacher_name}</option>)}
                        </select>
                    }
                    <button>Submit</button>
                </form>
                action step jsx page
                < ActionStepView feedback={feedback} />
                {/* {currentActionSteps} */}
            </div >
        )
    }
}

export default ActionStep 