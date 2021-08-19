import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ForgetPassword.module.css'
export default function ForgetPassword() {
    const [show, setShow] = React.useState(false)
    const [email, setEmail] = React.useState('')

    const divStyle = {
        background: "white",
        width: "100 %"
    }

    const submitForm = (e) => {
        e.preventDefault();
        setEmail('')
        console.log(email)
    }

    const inputEmailChangeHandler = (e) => {
        setEmail(e.target.value)
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-8">
                    <img alt="-" src="https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/demo-1/static/media/forgot-password-v2.92f01a1f.svg" width="90%" />
                </div>
                <div style={divStyle} className="col-md-4 p-4">
                    <div className={`${styles.extraDivHeight}`}></div>
                    <div className="p-md-5 p-3">
                        <form onSubmit={submitForm}>
                            <h4>Forget Password</h4>
                            <p>Enter your email and we'll send you instructions to reset your password</p>
                            <div className="form-group">
                                <lable htmlFor="exampleInputEmail1" className="small">Email</lable>
                                <div className="input-group">
                                    <div className="input-group-append">
                                        <span className="input-group-text">
                                            <i class="fas fa-user"></i>
                                        </span>
                                    </div>
                                    <input value={email} onChange={inputEmailChangeHandler} required id="exampleInputEmail1" placeholder="abc@example.com" aria-describedby="emailHelp" className={`form-control ${styles['form-control']}`} type="email" />

                                </div>
                                {/* <span id="emailHelp" className="form-text small text-muted">Please Fill Email </span> */}
                            </div>
                            <div className="form-group">
                                <input className="form-control btn btn-outline-success" type="submit" value="Sign in" style={{ background: "purple", color: "white" }} />
                            </div>
                            <div className="form-group">
                                <Link to="/" style={{ outline: "none", border: "none", textDecoration: "none", color: "black", boxShadow: "none" }} className="form-control text-center"> {`<`} Back To Login</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
