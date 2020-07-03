import React, { useState } from 'react'
import Registration from './Registration'
import Login from './Login'
export default function LoginPage() {

    const [login, toggleLogin] = useState(true)

    return (
        <div>
            {login ?
                <div><p>New Member?</p>
                    <p onClick={() => toggleLogin(!login)}>Click here to Register</p>
                </div>
                :
                <div>
                    <p>Already a member?</p>
                    <p onClick={() => toggleLogin(!login)}>Click here to Login</p>
                </div>
            }
            {login && login ? <Login /> : <Registration />}
        </div>
    )
}
