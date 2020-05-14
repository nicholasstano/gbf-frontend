import React from 'react'
import './observe.scss'

const Observe = () => {
    return (
        <div className="observe">
            <div className="observeTeacherInformation">
                <h4>Teacher:
                    <select>
                        <option value="plum">Plum</option>
                        <option value="mustard">Mustard</option>
                        <option value="peacock">Peacock</option>
                    </select>
                </h4>
                <h4>Coach: Scarlet</h4>
            </div>
            <div className="observeHeader">
                <h4>GBF Move:</h4>
                <h4>Score:</h4>
                <h4>Notes:</h4>
            </div>
            <div className="observeBody">
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
                </div>
            </div>
            <div className="observeLatestActionSteps">
                <h4>Lastest Action Steps:</h4>
            </div>
        </div>
    )
}

export default Observe
