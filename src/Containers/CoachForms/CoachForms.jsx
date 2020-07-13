import React, { Component } from 'react'
import ActionStepForm from '../ActionStep/ActionStepForm'
import FeedbackForm from '../Feedback/FeedbackForm'
import ObserveForm from '../Observe/ObserveForm'
import { databaseUrl } from '../../config'

export class CoachForms extends Component {
    _isMounted = false;

    state = {
        teachers: [],
        teacherId: ""
    }

    componentDidMount() {
        this._isMounted = true;
        this.fetchTeachers()
    }

    fetchTeachers = () => {
        fetch(`${databaseUrl}/users`)
            .then(res => res.json())
            .then(users => {
                if (this._isMounted) {
                    this.setState({ teachers: users.filter(user => user.is_teacher) })
                    console.log(this.state)
                }
            })
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    handleTextChange = (event) => {
        this.setState({ [event.target.name]: parseInt(event.target.value) })
    }

    render() {
        console.log(this.state)
        return (
            <div>
                {this.state.teachers.length > 1 &&
                    <select name="teacherId" value={this.state.teacherId} onChange={this.handleTextChange} >
                        <option>Select A Teacher</option>
                        {this.state.teachers.map(teacher => <option key={teacher.teacher_name} value={teacher.id}>{teacher.teacher_name}</option>)}
                    </select>
                }
                {this.state.teacherId &&
                    <>
                        <ActionStepForm coachId={this.props.user.id} teacherId={this.state.teacherId} />
                        <FeedbackForm coachId={this.props.user.id} />
                        <ObserveForm coachId={this.props.user.id} />
                    </>
                }
            </div>
        )
    }
}

export default CoachForms
