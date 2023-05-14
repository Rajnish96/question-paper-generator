import { Alert } from 'bootstrap'
import { sendPasswordResetEmail } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from './fire/FirebaseCode'

export default function ForgetPassword({ history }) {
    const [email, setEmail] = useState()
    const [loading, setLoading] = useState(false)

    const submitHandlar = (e) => {
        e.preventDefault()
        setLoading(true)
        sendPasswordResetEmail(auth, email)
            .then((sucess) => {
                alert(sucess)
            })
            .catch((error) => {
               alert(error)
            });
    }
    return (<>
        <div className="container-fluid">
            <div className="row justify-content-evenly">
                <div className='col-md-3 text-center'>
                    {loading ? <div className="h2 text-danger">Loading...</div> :
                        <div className="h3 text-warning">Forget Password</div>}
                    <form onSubmit={submitHandlar}>
                        <input type="text" className="form-control"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoFocus
                        />
                        <button type="submit" disabled={!email} className="btn btn-primary my-3">Submit</button>
                    </form>
                </div>
            </div>
        </div>

    </>)

}
