// Developer : "Kalpesh Khatik"
// Purpose: "Making BREADCRUMB For Admin Panel"

import React from 'react'
import { Link } from 'react-router-dom'

export default function Breadcrumb() {
    const [render, setRender] = React.useState(false)
    // RETURN CURRENT DATE
    const getDate = () => {
        var utc = new Date().toJSON().slice(0, 10)
        return utc
    }

    // RETURN FIRST PATH
    const pathFirst = () => {
        const pathFirst = window.location.href

        return pathFirst.split('/')[3]
    }

    // RETURN SECOND PATH
    const pathSecond = () => {
        const pathFirst = window.location.href
        console.log("object", pathFirst.split('/')[4])
        return pathFirst.split('/')[4]
    }

    // RE_RENDER FOR PATH AND BREADCRUMB VALUE CHANGE
    const renderFunction = () => {
        setRender(!render)
    }
    return (
        <div className="container-fluid p-0">
            {/* BREADCRUMB CLASS WITH AREA_LABLE */}
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb mr-3  ">
                    {/* BREADCRUMB ITEM */}
                    <Link onClick={renderFunction} to='/' className="breadcrumb-item" style={{ textDecoration: "none", color: "black" }}>Dashboard</Link>
                    {/* DASHBOARD CREADCRUMB */}
                    {/* <Link className="breadcrumb-item active" aria-current="page">Home</Link> */}
                    {pathFirst() && <Link to={`/${pathFirst()}`} onClick={renderFunction} className={`breadcrumb-item ${pathSecond() ? 'disabled' : 'active'}`} style={{ textDecoration: "none" }} aria-current="page">{pathFirst()}</Link>
                    }
                    {pathSecond() && <Link to={`/${pathFirst()}/${pathSecond()}`} onClick={renderFunction} className="breadcrumb-item active" style={{ textDecoration: "none" }} aria-current="page">{pathSecond()}</Link>
                    }

                    {/* RETURN CURRENT DATE BREADCRUMB */}
                    <li className="breadcrumb-item ">{getDate()}</li>
                </ol>
            </nav>
        </div>
    )
}
