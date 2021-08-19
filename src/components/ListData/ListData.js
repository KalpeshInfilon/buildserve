import React from 'react'
// LINK FOR REDIRECT
import { Link } from 'react-router-dom'
import axios from 'axios';

export default function ListData() {
    // let data = []
    const [data, setData] = React.useState([{}])
    React.useEffect(() => {
        ListData();
    }, [])

    const ListData = () => {
        axios.get('http://localhost:3636/field/list')
            .then(res => {
                console.log(res)
                setData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }
    // const dataJson = [
    //     { id: "1", name: "KALPESH", email: "kalpesh@gmail.com", mobile: "800808080" },
    //     { id: "2", name: "NEEL", email: "neel@gmail.com", mobile: "8787878777" },
    //     { id: "3", name: "JASMIN", email: "jasmin@gmail.com", mobile: "656565656" },
    //     { id: "4", name: "VISHAL", email: "vishal@gmail.com", mobile: "656565656" },
    //     { id: "5", name: "JANAK", email: "janak@gmail.com", mobile: "6767676767" }
    // ]

    return (
        <div className="container-fluid">
            <div className="col-md-6 offset-md-3 mt-4 p-3">
                <div className="p-md-4" style={{ background: "white" }}>
                    <h3 className="text-center">LIST DATA <Link to="/Add" className="btn btn-outline-warning float-right mb-3">Add Data</Link></h3>
                    <table className="table">
                        {/*TABLE HEADER FIELDS */}
                        <thead>
                            <tr>
                                {/* <th scope="col">#Id</th> */}
                                <th scope="col">Field_1</th>
                                <th scope="col">Field_2</th>
                                <th scope="col">Field_3</th>
                                <th scope="col">Field_4</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* MAPPING FOR LIST DATA */}
                            {data.map((el) => {
                                return (
                                    <tr>
                                        {/* <th scope="row">{el._id}</th> */}
                                        <td>{el.field1}</td>
                                        <td>{el.field2}</td>
                                        <td>{el.field3}</td>
                                        <td>{el.field4}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
