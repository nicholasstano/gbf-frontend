import React from 'react'
import './observe.scss'

const Observe = () => {
    return (
        <div className="observe">
            <div className="observeHeader">
                <p>Teacher: Smith</p>
                <p>Coach: Coapman</p>
            </div>
            <div className="observeTable">
                <thead>
                    <tr>
                        <th>GBF Move:</th>
                        <th>Score:</th>
                        <th>Notes:</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Routines and Procedures 101</td>
                        <td>3</td>
                        <td><input></input></td>
                    </tr>
                    <tr>
                        <td>Strong Voice</td>
                        <td>3</td>
                        <td><input></input></td>
                    </tr>
                    <tr>
                        <td>What to Do</td>
                        <td>4</td>
                        <td><input></input></td>
                    </tr>
                </tbody>
            </div>
            <div>
                <p>Lastest Action Steps:</p>
            </div>
        </div>
    )
}

export default Observe
