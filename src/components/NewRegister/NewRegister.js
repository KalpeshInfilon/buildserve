import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NewRegister.module.css';
export default function NewRegister() {
    const [show, setShow] = React.useState(false)
    const [check, setCheck] = React.useState(false)
    const [userRegisterField, setUserRegisterField] = React.useState({ username: "", email: "", password: "" })

    const divStyle = {
        background: "white",
        width: "100 %"
    }

    const showPassword = (e) => {
        e.preventDefault();
        setShow(!show)
    }

    const inputChangeHandler = (e) => {
        setUserRegisterField({ ...userRegisterField, [e.target.name]: e.target.value })
    }
    const submitForm = (e) => {
        e.preventDefault();
        const id = document.getElementById('check');
        id.checked = false
        console.log("asasasassas", userRegisterField);
        console.log("-------------")
        setUserRegisterField({ username: "", email: "", password: "" })
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-8">
                    <img alt="-" src="https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/demo-1/static/media/register-v2.24c0a62e.svg" width="90%" />
                </div>
                <div style={divStyle} className="col-md-4 p-4">
                    <div className="p-md-5 p-3">
                        <form onSubmit={submitForm}>
                            <h4>New Register <img src="https://cdn.statically.io/img/www.infilon.com/f=auto/wp-content/uploads/2018/05/favicon.png" alt="sds" /></h4>
                            <p>Make your app management easy and fun!</p>
                            <div className="form-group">
                                <lable htmlFor="exampleInputEmail1" className="small">Username</lable>
                                <div className="input-group">
                                    <div className="input-group-append">
                                        <span className="input-group-text">
                                            <i class="fas fa-user"></i>
                                        </span>
                                    </div>
                                    <input onChange={inputChangeHandler} value={userRegisterField.username} name="username" required id="exampleInputEmail1" placeholder="John" aria-describedby="emailHelp" className={`form-control ${styles['form-control']}`} type="text" />

                                </div>
                                {/* <span id="emailHelp" className="form-text small text-muted">Please Fill Email </span> */}
                            </div>
                            <div className="form-group">
                                <lable htmlFor="exampleInputEmail1" className="small">Email</lable>
                                <div className="input-group">
                                    <div className="input-group-append">
                                        <span className="input-group-text">
                                            <i class="fas fa-user"></i>
                                        </span>
                                    </div>
                                    <input onChange={inputChangeHandler} name="email" value={userRegisterField.email} required id="exampleInputEmail1" placeholder="abc@example.com" aria-describedby="emailHelp" className={`form-control ${styles['form-control']}`} type="email" />

                                </div>
                                {/* <span id="emailHelp" className="form-text small text-muted">Please Fill Email </span> */}
                            </div>
                            <div className="form-group">
                                <lable htmlFor="exampleInputPassword" className="small">Password</lable>
                                <div className="input-group">
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            {!show && <i class="fa fa-eye" onClick={showPassword} aria-hidden="true"></i>}
                                            {show && <i onClick={showPassword} class="fas fa-eye-slash"></i>}
                                        </div>
                                    </div>
                                    <input onChange={inputChangeHandler} name="password" value={userRegisterField.password} required id="exampleInputPassword" placeholder="*********" aria-describedby="passwordHelp" className={`form-control ${styles['form-control']}`} type={show ? "text" : "password"} />
                                </div>
                                {/* <span id="passwordHelp" className="form-text small text-muted">Please Fill Password </span> */}
                            </div>
                            <div className="form-group">
                                <input id="check" required title="You Need To Agree" onChange={(e) => setCheck(e.target.checked)} className="input-control" defaultChecked={check} type="checkbox" /> I Agree to Privacy Policy {'&'} Terms
                            </div>
                            <div className="form-group">
                                <input className="form-control btn btn-outline-success" type="submit" value="Sign Up" style={{ background: "purple", color: "white" }} />
                            </div>
                            <div className="form-group">
                                <p>Already have an account?<Link to="/">?Sign in instead </Link></p>
                            </div>
                            <div className="form-group text-center small">
                                <p>OR</p>
                            </div>
                            <div className="form-group text-center">
                                {/* <p><Link to="/forgetPassword">Forget Password</Link></p> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
