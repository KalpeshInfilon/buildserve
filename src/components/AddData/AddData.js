import React from 'react'
import styles from './AddData.module.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function AddData() {
    const [data, setData] = React.useState({ field1: "", field2: "", field3: "", field4: "" })
    const submitData = (e) => {
        e.preventDefault();
        console.log('data is', data);
        axios.post('http://localhost:3636/field/post', data)
            .then(res => {
                console.log('response is', res)
            })
            .catch(err => {
                console.log('error', err)
            })
        setData({ field1: "", field2: "", field3: "", field4: "" })
    }
    const inputChangeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    return (
        <div className="container-fluid">
            <div style={{ background: "white", borderRadius: "10px" }} className="col-md-4 offset-md-4 mt-3 p-5">
                <form onSubmit={submitData}>
                    <div className="form-group">
                        <h3 className="text-center">ADD DATA <Link to="/List" className="btn btn-outline-warning float-right">List Data</Link></h3>
                        <label className="small mb-0">Field 1 </label>
                        <input name="field1" value={data.field1} onChange={inputChangeHandler} type="text" required className={`form-control ${styles['form-control']}`} />
                    </div>
                    <div className="form-group">
                        <label className="small mb-0">Field 1 </label>
                        <input name="field2" value={data.field2} onChange={inputChangeHandler} type="text" required className={`form-control ${styles['form-control']}`} />
                    </div>
                    <div className="form-group">
                        <label className="small mb-0">Field 1 </label>
                        <input name="field3" value={data.field3} onChange={inputChangeHandler} type="text" required className={`form-control ${styles['form-control']}`} />
                    </div>
                    <div className="form-group">
                        <label className="small mb-0">Field 1 </label>
                        <input name="field4" value={data.field4} onChange={inputChangeHandler} type="text" required className={`form-control ${styles['form-control']}`} />
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                {/* <label className="small">Field 1 </label> */}
                                <input type="submit" style={{ borderRadius: "40px" }} className={`form-control btn btn-outline-success`} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                {/* <label className="small">Field 1 </label> */}
                                <input type="reset" style={{ borderRadius: "40px" }} className={`form-control btn btn-outline-info`} />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
