import React from 'react'
import './feedback.scss'

const Feedback = () => {
    return (
        <div className="feedbackForm">
            <div className="feedbackTeacherInformation">
                <h4>Teacher:
                    <select>
                        <option value="plum">Plum</option>
                        <option value="mustard">Mustard</option>
                        <option value="peacock">Peacock</option>
                    </select>
                </h4>
                <h4>Coach: Scarlet</h4>
            </div>
            <div className="feedbackForm">
                <form>
                    <div className="formTop">
                        <p>
                            <label>Praise:</label>
                            <input />
                        </p>
                        <p>
                            <label>Quick Hits:</label>
                            <input />
                        </p>
                    </div>
                    <h4>Action Step:</h4>
                    <input />
                    <h4>See It:</h4>
                    <input />
                    <h4>Name It:</h4>
                    <input />
                    <h4>Do It:</h4>
                    <input />
                </form>
            </div>
        </div>
    )
}

export default Feedback
