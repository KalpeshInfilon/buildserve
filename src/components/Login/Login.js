import React from 'react'
import styles from './Login.module.css'
import { Link } from 'react-router-dom'
export default function Login() {
    const [show, setShow] = React.useState(false)
    const [view, setView] = React.useState(false)
    const [checked, setChecked] = React.useState(false)
    const [check, setCheck] = React.useState(false)
    const [loginData, setLoginData] = React.useState({ username: "", password: "" })
    const divStyle = {
        background: "white",
        width: "100 %"
    }

    const showPassword = (e) => {
        e.preventDefault();
        console.log("sodj")
        setShow(!show)
    }
    React.useEffect(() => {
        const user = localStorage.getItem('username') ? atob(localStorage.getItem('username')) : ''
        const pass = localStorage.getItem('password') ? atob(localStorage.getItem('password')) : ''
        setLoginData({ username: user, password: pass })
        if (user || pass) {
            setView(true)
            setCheck(true)
            setChecked(true)
        }
    }, [])
    const submitForm = (e) => {
        e.preventDefault();
        console.log(loginData)
        if (checked || check) {
            localStorage.setItem('username', btoa(loginData.username))
            localStorage.setItem('password', btoa(loginData.password))
        }
        // else if (check === false) {
        //     console.log("gugugugugu")
        //     localStorage.removeItem('username');
        //     localStorage.removeItem('password');
        // }
        setLoginData({ username: "", password: "" })
        if (checked === false) {
            console.log("asasasas--------")
            localStorage.removeItem('username')
            localStorage.removeItem('password')
        }
    }

    const inputLoginHandler = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value })
    }
    const radio = (e) => {
        console.log("asasas", e.target.checked);
        setChecked(e.target.checked);
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-8">
                    <img alt="-" src="https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/demo-1/static/media/login-v2.da80012f.svg" width="90%" />
                </div>
                <div style={divStyle} className="col-md-4 p-4">
                    <div className="p-md-5 p-3">
                        <form onSubmit={submitForm}>
                            <h4>Welcome To Infilon <img src="https://cdn.statically.io/img/www.infilon.com/f=auto/wp-content/uploads/2018/05/favicon.png" alt="sds" /></h4>
                            <p>Please sign-in to your account and start the adventure</p>
                            <div className="form-group">
                                <lable htmlFor="exampleInputEmail1" className="small">Email</lable>
                                <div className="input-group">
                                    <div className="input-group-append">
                                        <span className="input-group-text">
                                            <i class="fas fa-user"></i>
                                        </span>
                                    </div>
                                    <input required value={loginData.username} id="exampleInputEmail1" name="username" onChange={inputLoginHandler} placeholder="Please Enter Your Email Address" aria-describedby="emailHelp" className={`form-control ${styles['form-control']}`} type="text" />

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
                                    <input required id="exampleInputPassword" value={loginData.password} name="password" onChange={inputLoginHandler} placeholder="Please Enter Your Password" aria-describedby="passwordHelp" className={`form-control ${styles['form-control']}`} type={show ? "text" : "password"} />
                                </div>
                                {/* <span id="passwordHelp" className="form-text small text-muted">Please Fill Password </span> */}
                            </div>
                            <div className="form-group">
                                {!view && <> <input name="remember" onChange={radio} className="input-control" type="checkbox" /> Remember Me </>}
                                {view && <><input defaultChecked name="remember" onChange={radio} className="input-control" type="checkbox" />  Remember Me</>}
                            </div>
                            <div className="form-group">
                                <input className="form-control btn btn-outline-success" type="submit" value="Sign in" style={{ background: "purple", color: "white" }} />
                            </div>
                            <div className="form-group">
                                <p>New on our platform<Link to="/register">?Create an account</Link></p>
                            </div>
                            <div className="form-group text-center">
                                <p>OR</p>
                            </div>
                            <div className="form-group text-center">
                                <p><Link to="/forgetPassword">Forget Password</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
