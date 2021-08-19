// Date :' 12/8/2021'
// Developer : "Kalpesh Khatik"
// Purpose: "Making Header For Admin Panel"
// getcssscan.com
import styles from './Header.module.css'
// import 'bootstrap/js/dist/tooltip';

import React from 'react'

export default function Header() {
    // const [dark,setDark]
    return (
        <div className={`container pl-0 ${styles.headerContainer}`}>
            <div className="m-3">
                <div className={`row p-2 ${styles.header}`}>

                    <div className={`col-md-6 float-left ${styles.dataHide}`}>
                        <div className={`row ${styles.dataHide}`}>
                            <div className={`mx-2 mt-1 ${styles.cursorpointerwithColor}`} data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={` ${styles.iconColor} ficon`}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            </div>
                            <div className={`mx-2 mt-1 ${styles.cursorpointerwithColor}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={` ${styles.iconColor} ficon`}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                            </div>
                            <div className={`mx-2 mt-1 ${styles.cursorpointerwithColor}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={` ${styles.iconColor} ficon`}><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
                            </div>
                            <div className={`mx-2 mt-1 ${styles.cursorpointerwithColor}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={` ${styles.iconColor} ficon`}><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                            </div >
                            <div className={`mx-2 mt-1 `} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={` ${styles.iconColor} ficon text-warning`}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    {/* <div className="dropdown-item"> */}
                                    {/* <label className="sr-only" for="inlineFormInputGroup">Username</label> */}
                                    {/* <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                            <input className="form-control" type="text" placeholder="Username" ></input>
                                            </div>
                                            </div>
                                         </div> */}
                                    {/* START ICON DROP DOWN */}

                                    <div className="dropdown-item px-1">
                                        <div className="form-control">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={` ${styles.iconColor} ficon`}><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                            {/* <input type="text" className="autocomplete-search form-control" placeholder="Search..." value="" /> */}
                                        </div>
                                    </div>
                                    <a className="dropdown-item" href="#11"><i className="far fa-envelope mr-2"></i> Email</a>
                                    <a className="dropdown-item" href="#22"><i className="fas fa-comment-alt-lines me-2"></i> Chat</a>
                                    <a className="dropdown-item" href="#33"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-75"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>  Todo</a>
                                    <a className="dropdown-item" href="#44"><i className="fal fa-calendar mr-2"></i> Calendar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-md-5">
                    </div> */}
                    <div className="col-md-5 offset-1 text-right">
                        <div className="row ml-3">
                            {/* </div> */}
                            {/* <svg version="1.1" baseProfile="full" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100%" height="10" fill="orange" />
                        <circle cx="20" cy="16" r="4" stroke="blue" stroke-width="1" fill="white" />
                        <rect width="100%" height="10" y="22" fill="green" />
                    </svg> */}

                            <img src="https://img.icons8.com/color/452/india.png" className={`mt-2`} width="5%" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" height="2%" alt="..." />
                            {/* <div className={`btn-group  ${styles.dataHide}`}> */}
                            <button type="button" className={`btn pl-1 ${styles.buttonFocus} ${styles.dataHide}`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                India
                                {/* INDIA DROP DOWN */}
                                <div className={`dropdown-menu ${styles.dropDown}`}>
                                    {/* <img src="https://img.icons8.com/color/452/india.png" width="1%" height="2%" alt="..." /> */}
                                    <a className="dropdown-item" href="#dssa">India</a>
                                    <a className="dropdown-item" href="#kiu">English</a>
                                    <a className="dropdown-item" href="#dfddsf">French</a>
                                    <a className="dropdown-item" href="#fsdfd">German</a>
                                    {/* <div className="dropdown-divider"></div> */}
                                </div>
                            </button>
                            {/* </div> */}
                            {/* <div className="text small text-center mx-2 mt-1" style={{ color: "gray" }}>
                        ENGLISH
                    </div> */}
                            <div className={`mx-2 mt-1 ${styles.cursorpointer} ${styles.dataHide} ${styles.cursorpointerwithColor}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={` ${styles.iconColor} ficon`}><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg >
                            </div >
                            <div className={`mx-2 mt-1 ${styles.cursorpointer} ${styles.cursorpointerwithColor}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={` ${styles.iconColor} ficon`}><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                            </div>

                            <div className={`mx-2 mt-1  ${styles.cursorpointer} ${styles.cursorpointerwithColor}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={` ${styles.iconColor} ficon`}><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg >
                                <span className={`badge-up badge badge-primary badge-pill ${styles.badgeSetting}`}>5</span>
                            </div >
                            <div>
                                <div className={`mx-2 mt-1 ${styles.cursorpointer}`} id="notification" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" className={` ${styles.iconColor} ficon`} stroke-linejoin="round"><path d=" M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg >
                                    <span className={`badge-up badge badge-danger badge-pill ${styles.badgeSetting}`}>5</span>
                                    {/* NOTIFICATION DROP DOWN */}
                                    <div className={`dropdown-menu ${styles.dropDownNotification}`} aria-labelledby="notification">
                                        <a className="dropdown-item" href="#23">Action</a>
                                        <a className="dropdown-item" href="#232">Another action</a>
                                        <a className="dropdown-item" href="#wes">Something else here</a>
                                    </div>
                                </div >
                            </div>
                            <div>
                                <div className={`btn-group ${styles.cursorpointer}`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <div className={`text small mx-2 mt-1 ${styles.dataHide}`}>
                                        <b>Johndoe</b> <br />
                                        Admin
                                    </div>
                                    <img style={{ borderRadius: "40px" }} src="https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/demo-1/static/media/avatar-s-11.1d46cc62.jpg" alt="avatarImg" height="40" width="40" />
                                    <span className={`${styles.onlineSymbol}`}></span>
                                    {/* PROFILE DROP DOWN */}
                                    <div className={`dropdown-menu ${styles.profileDropDown}`}>
                                        <a className={`dropdown-item ${styles.underProfile}`} href="#1"><i className="fal fa-user mr-2"></i> Profile</a>
                                        <a className={`dropdown-item ${styles.underProfile}`} href="#2"><i className="far fa-envelope mr-2"></i> Inbox</a>
                                        <a className={`dropdown-item ${styles.underProfile}`} href="#3"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-75 mr-2"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg> Tasks</a>
                                        <a className={`dropdown-item ${styles.underProfile}`} href="#4"><i className="fas fa-comment-alt-lines mr-2"></i> Chats</a>
                                        <div className="dropdown-divider"></div>
                                        <a className={`dropdown-item ${styles.underProfile}`} href="#5"><i className="far fa-cog mr-2"></i> Settings</a>
                                        <a className={`dropdown-item ${styles.underProfile}`} href="#6"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-75 mr-2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg> Pricing</a>
                                        <a className={`dropdown-item ${styles.underProfile}`} href="#7"><i className="fal fa-question-circle mr-2"></i> FAQ</a>
                                        <a className={`dropdown-item ${styles.underProfile}`} href="#8"><i className="fas fa-power-off mr-2" ></i> Logout</a>
                                    </div>
                                </div>
                            </div>
                        </div >
                    </div >
                </div >
            </div >
        </div >
    )
}
