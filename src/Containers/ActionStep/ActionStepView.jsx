import React, { Component } from 'react'

export class ActionStepView extends Component {

    state = {
        closeFeedback: true,
        closeLearn: true
    }

    toggleCloseFeedback = () => {
        this.setState({ closeFeedback: !this.state.closeFeedback })
    }

    toggleLearnFeedback = () => {
        this.setState({ closeLearn: !this.state.closeLearn })
    }

    render() {
        let currentActionSteps = this.props.feedback.map(fb =>
            <div className="currentActionSteps" key={fb.id}>
                <p>{fb.action_step.long_text}</p>
                <p>Date Assigned: {fb.action_step.date.slice(0, 10)}</p>
                <p>Skill: {fb.move.name.split(".")[1]}</p>
                <p>Grade: {fb.observation.score}</p>
                <p onClick={this.toggleLearnFeedback}> {this.state.closeLearn ? <>+</> : <>-</>} Learn</p>
                {this.state.closeLearn
                    ?
                    null
                    :
                    <div>
                        <p>Notes: {fb.observation.notes}</p>
                        <p>Comments: {fb.observation.comments}</p>
                    </div>
                }
                <p onClick={this.toggleCloseFeedback}> {this.state.closeFeedback ? <>+</> : <>-</>} Feedback</p>
                {this.state.closeFeedback
                    ?
                    null
                    :
                    <div>
                        <p>Praise: {fb.praise}</p>
                        <p>See It: {fb.see_it}</p>
                        <p>Name It: {fb.name_it}</p>
                        <p>Do It: {fb.do_it}</p>
                        <p>Quick Hit: {fb.quick_hits}</p>
                    </div>}
            </div>
        )
        return (
            <div>
                <h1>Current Action Steps</h1>
                {currentActionSteps}

            </div>
        )
    }
}

export default ActionStepView
