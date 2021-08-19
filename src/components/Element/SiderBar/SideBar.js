/*
    Date : 12/08/2021
    Name : Yash Gautambhai Sarvaiya
    purpose "Making Sidebar for Panel"

*/
import React from "react";

import logo from "./logo.png";
import Mainlogo from "./Main-logo-3.png";

import styles from "./SideBar.module.css";
const SideBar = (props) => {

  const [NewDiv, setNewDiv] = React.useState(false);
  const [newIconText, setnewIconText] = React.useState(false);

  const ToggleSetDiv = () => {
    props.sizeChange()
    setNewDiv(!NewDiv);
    setnewIconText(!newIconText);
  };
  const showText = () => {
    // setnewIconText(false);
    setHover(false)
  }


  const hideText = () => {
    // setnewIconText(true);
    setHover(true)

  }
  const [newHover, setHover] = React.useState(false)
  return (
    <>
      <div className="container-fluid p-0">
        <div onMouseEnter={showText} onMouseLeave={hideText} className={`${styles[NewDiv ? "sidebar-part-toggle" : "sidebar-part"]}`}>
          {/* <nav class={`${styles[ NewDiv ? "main-menu" : null]} p-0`}> */}
          <div className={`row ${styles["sidebar-top-inside"]}`}>
            <div className={`col-md-3`} style={{ padding: "0 0 0 5px" }}>
              <img
                className={`${styles["Main-logo-size"]}`}
                src={Mainlogo}
                alt="new"
              ></img>
            </div>

            <div className={"col-md-7"}>
              <img
                className={`${styles["logo-size"]}`}
                src={logo}
                alt="new"
              ></img>
            </div>

            <div className={`col-md-2 ${styles["icon-size"]}`}>
              <i
                className="fal fa-record-vinyl"
                onClick={() => {
                  ToggleSetDiv();
                }}
              ></i>
            </div>
          </div>

          <div className={`row ${styles["sidebar-section"]}`}>
            <div className={`${styles["sidebar-section-inside"]}`}>
              <ul>
                <li className="row">
                  <div className={`col-md-2`}>
                    <i class="fal fa-home-lg-alt"></i>
                  </div>
                  <div className={`col-md-8 pl-2`}>
                    <span>Dashboards</span>
                  </div>
                  <div className={`col-md-2 pl-2`}>
                    <i class="fal fa-chevron-right"></i>
                  </div>
                </li>
              </ul>
              {

                newIconText ?
                  newHover ? <div><i className={`fal fa-ellipsis-h ${styles['main-icon-text']}`}></i></div> :

                    <div className={`${styles["main-text"]}`}>APPS & PAGES </div>
                  :
                  <div className={`${styles["main-text"]}`}>APPS & PAGES </div>
              }
              <ul>
                <li className="row">
                  <div className={`col-md-2`}>
                    <i class="fal fa-envelope"></i>
                  </div>
                  <div className={`col-md-8 pl-2`}>
                    <span>Email</span>
                  </div>
                  <div className={`col-md-2 pl-2`}>
                    {/* <i class="fal fa-chevron-right"></i> */}
                  </div>
                </li>
                <li className="row">
                  <div className={`col-md-2`}>
                    <i class="fal fa-comment-alt"></i>
                  </div>
                  <div className={`col-md-8 pl-2`}>
                    <span>Chat</span>
                  </div>
                  <div className={`col-md-2 pl-2`}>
                    {/* <i class="fal fa-chevron-right"></i> */}
                  </div>
                </li>
                <li className="row">
                  <div className={`col-md-2`}>
                    <i class="fal fa-clipboard-check"></i>
                  </div>
                  <div className={`col-md-8 pl-2`}>
                    <span>Todo</span>
                  </div>
                  <div className={`col-md-2 pl-2`}>
                    {/* <i class="fal fa-chevron-right"></i> */}
                  </div>
                </li>
                <li className={`row`}>
                  <div className={`col-md-2`}>
                    <i class="fal fa-calendar-alt"></i>
                  </div>
                  <div className={`col-md-8 pl-2`}>
                    <span>Calender</span>
                  </div>
                  <div className={`col-md-2 pl-2`}>
                    {/* <i class="fal fa-chevron-right"></i> */}
                  </div>
                </li>
                <li className={`row`}>
                  <div className={`col-md-2`}>
                    <i class="fal fa-receipt"></i>
                  </div>
                  <div className={`col-md-8 pl-2`}>
                    <span>Invoice</span>
                  </div>
                  <div className={`col-md-2 pl-2`}>
                    <i class="fal fa-chevron-right"></i>
                  </div>
                </li>
                <li className={`row`}>
                  <div className={`col-md-2`}>
                    <i class="fal fa-shopping-cart"></i>
                  </div>
                  <div className={`col-md-8 pl-2`}>
                    <span>eCommerce</span>
                  </div>
                  <div className={`col-md-2 pl-2`}>
                    <i class="fal fa-chevron-right"></i>
                  </div>
                </li>
                <li className={`row`}>
                  <div className={`col-md-2`}>
                    <i class="fal fa-user"></i>
                  </div>
                  <div className={`col-md-8 pl-2`}>
                    <span>User</span>
                  </div>
                  <div className={`col-md-2 pl-2`}>
                    <i class="fal fa-chevron-right"></i>
                  </div>
                </li>
                <li className={`row`}>
                  <div className={`col-md-2`}>
                    <i class="fal fa-file"></i>
                  </div>
                  <div className={`col-md-8 pl-2`}>
                    <span>Pages</span>
                  </div>
                  <div className={`col-md-2 pl-2`}>
                    <i class="fal fa-chevron-right"></i>
                  </div>
                </li>
              </ul>
              {
                newIconText ?
                  newHover ? <div><i className={`fal fa-ellipsis-h ${styles['main-icon-text']}`}></i></div> :
                    <div className={`${styles["main-text"]}`}>USER INTERFACE </div>

                  // <div><i className={`fal fa-ellipsis-h ${styles['main-icon-text']}`}></i></div>
                  :
                  <div className={`${styles["main-text"]}`}>USER INTERFACE</div>
              }
              <ul>
                <li className={`row`}>
                  <div className={`col-md-2`}>
                    <i class="fal fa-text"></i>
                  </div>
                  <div className={`col-md-8 pl-2`}>
                    <span>Typography</span>
                  </div>
                  <div className={`col-md-2 pl-2`}>
                    {/* <i class="fal fa-chevron-right"></i> */}
                  </div>
                </li>
                <li className={`row`}>
                  <div className={`col-md-2`}>
                    <i class="fal fa-tint"></i>
                  </div>
                  <div className={`col-md-8 pl-2`}>
                    <span>Colors</span>
                  </div>
                  <div className={`col-md-2 pl-2`}>
                    {/* <i class="fal fa-chevron-right"></i> */}
                  </div>
                </li>
                <li className={`row`}>
                  <div className={`col-md-2`}>
                    <i class="fal fa-feather"></i>
                  </div>
                  <div className={`col-md-8 pl-2`}>
                    <span>Feather</span>
                  </div>
                  <div className={`col-md-2 pl-2`}>
                    {/* <i class="fal fa-chevron-right"></i> */}
                  </div>
                </li>
                <li className={`row`}>
                  <div className={`col-md-2`}>
                    <i class="fal fa-credit-card-blank"></i>
                  </div>
                  <div className={`col-md-8 pl-2`}>
                    <span>Cards</span>
                  </div>
                  <div className={`col-md-2 pl-2`}>
                    <i class="fal fa-chevron-right"></i>
                  </div>
                </li>
                <li className={`row`}>
                  <div className={`col-md-2`}>
                    <i class="fal fa-window-maximize"></i>
                  </div>
                  <div className={`col-md-8 pl-2`}>
                    <span>Components</span>
                  </div>
                  <div className={`col-md-2 pl-2`}>
                    <i class="fal fa-chevron-right"></i>
                  </div>
                </li>
                <li className={`row`}>
                  <div className={`col-md-2`}>
                    <i class="fal fa-plus-circle"></i>
                  </div>
                  <div className={`col-md-8 pl-2`}>
                    <span>Extensions</span>
                  </div>
                  <div className={`col-md-2 pl-2`}>
                    <i class="fal fa-chevron-right"></i>
                  </div>
                </li>
                <li className={`row`}>
                  <div className={`col-md-2`}>
                    <i class="fal fa-pager"></i>
                  </div>
                  <div className={`col-md-8 pl-2`}>
                    <span>Page Layouts</span>
                  </div>
                  <div className={`col-md-2 pl-2`}>
                    <i class="fal fa-chevron-right"></i>
                  </div>
                </li>
              </ul>
              {
                newIconText ?
                  newHover ? <div><i className={`fal fa-ellipsis-h ${styles['main-icon-text']}`}></i></div> :
                    <div className={`${styles["main-text"]}`}>USER INTERFACE</div>
                  // <div><i className={`fal fa-ellipsis-h ${styles['main-icon-text']}`}></i></div>
                  :
                  <div className={`${styles["main-text"]}`}>USER INTERFACE</div>
              }
              <ul>
                <li className={`row`}>
                  <div className={`col-md-2`}>
                    <i class="fab fa-wpforms"></i>
                  </div>
                  <div className={`col-md-8 pl-2`}>
                    <span>Forms elements</span>
                  </div>
                  <div className={`col-md-2 pl-2`}>
                    <i class="fal fa-chevron-right"></i>
                  </div>
                </li>
                <li className={`row`}>
                  <div className={`col-md-2`}>
                    <i class="fab fa-wpforms"></i>
                  </div>
                  <div className={`col-md-8 pl-2`}>
                    <span>Form Layout</span>
                  </div>
                  <div className={`col-md-2 pl-2`}>
                    {/* <i class="fal fa-chevron-right"></i> */}
                  </div>
                </li>
                <li className={`row`}>
                  <div className={`col-md-2`}>
                    <i class="fal fa-cube"></i>
                  </div>
                  <div className={`col-md-8 pl-2`}>
                    <span>Form Wizard</span>
                  </div>
                  <div className={`col-md-2 pl-2`}>
                    {/* <i class="fal fa-chevron-right"></i> */}
                  </div>
                </li>
                <li className={`row`}>
                  <div className={`col-md-2`}>
                    <i class="fal fa-badge-check"></i>
                  </div>
                  <div className={`col-md-8 pl-2`}>
                    <span>Form Validation</span>
                  </div>
                  <div className={`col-md-2 pl-2`}>
                    {/* <i class="fal fa-chevron-right"></i> */}
                  </div>
                </li>
                <li className={`row`}>
                  <div className={`col-md-2`}>
                    <i class="fab fa-wpforms"></i>
                  </div>
                  <div className={`col-md-8 pl-2`}>
                    <span>Form Repeater</span>
                  </div>
                  <div className={`col-md-2 pl-2`}>
                    {/* <i class="fal fa-chevron-right"></i> */}
                  </div>
                </li>
                <li className={`row`}>
                  <div className={`col-md-2`}>
                    <i class="fal fa-table"></i>
                  </div>
                  <div className={`col-md-8 pl-2`}>
                    <span>Bs Table</span>
                  </div>
                  <div className={`col-md-2 pl-2`}>
                    {/* <i class="fal fa-chevron-right"></i> */}
                  </div>
                </li>
                <li className={`row`}>
                  <div className={`col-md-2`}>
                    <i class="fal fa-th-large"></i>
                  </div>
                  <div className={`col-md-8 pl-2`}>
                    <span>Good Table</span>
                  </div>
                  <div className={`col-md-2 pl-2`}>
                    {/* <i class="fal fa-chevron-right"></i> */}
                  </div>
                </li>
              </ul>
              {
                newIconText ?
                  newHover ? <div><i className={`fal fa-ellipsis-h ${styles['main-icon-text']}`}></i></div> :
                    <div className={`${styles["main-text"]}`}>CHARTS & MAPS</div>

                  // <div><i className={`fal fa-ellipsis-h ${styles['main-icon-text']}`}></i></div>
                  :
                  <div className={`${styles["main-text"]}`}>CHARTS & MAPS</div>
              }
              <ul>
                <li className={`row`}>
                  <div className={`col-md-2`}>
                    <i class="fal fa-chart-pie-alt"></i>
                  </div>
                  <div className={`col-md-8 pl-2`}>
                    <span>Charts</span>
                  </div>
                  <div className={`col-md-2 pl-2`}>
                    <i class="fal fa-chevron-right"></i>
                  </div>
                </li>
                <li className={`row`}>
                  <div className={`col-md-2`}>
                    <i class="far fa-map"></i>
                  </div>
                  <div className={`col-md-8 pl-2`}>
                    <span>Leaflet</span>
                  </div>
                  <div className={`col-md-2 pl-2`}>
                    {/* <i class="fal fa-chevron-right"></i> */}
                  </div>
                </li>
              </ul>
              {
                newIconText ?
                  newHover ? <div><i className={`fal fa-ellipsis-h ${styles['main-icon-text']}`}></i></div> :
                    <div className={`${styles["main-text"]}`}>OTHERS</div>

                  // <div><i className={`fal fa-ellipsis-h ${styles['main-icon-text']}`}></i></div>
                  :
                  <div className={`${styles["main-text"]}`}>OTHERS</div>
              }
              <ul>
                <li className={`row`}>
                  <div className={`col-md-2`}>
                    <i class="fal fa-shield"></i>
                  </div>
                  <div className={`col-md-8 pl-2`}>
                    <span>Access Control</span>
                  </div>
                  <div className={`col-md-2 pl-2`}>
                    {/* <i class="fal fa-chevron-right"></i> */}
                  </div>
                </li>
                <li className={`row`}>
                  <div className={`col-md-2`}>
                    <i class="fal fa-bars"></i>
                  </div>
                  <div className={`col-md-8 pl-2`}>
                    <span>Menu Levels</span>
                  </div>
                  <div className={`col-md-2 pl-2`}>
                    <i class="fal fa-chevron-right"></i>
                  </div>
                </li>
                <li className={`row`}>
                  <div className={`col-md-2`}>
                    <i class="fal fa-eye-slash"></i>
                  </div>
                  <div className={`col-md-8 pl-2`}>
                    <span disable>Disabled Menu</span>
                  </div>
                  <div className={`col-md-2 pl-2`}>
                    <i class="fal fa-chevron-right"></i>
                  </div>
                </li>
                <li className={`row`}>
                  <div className={`col-md-2`}>
                    <i class="fal fa-life-ring"></i>
                  </div>
                  <div className={`col-md-8 pl-2`}>
                    <span>Raise Support</span>
                  </div>
                  <div className={`col-md-2 pl-2`}>
                    {/* <i class="fal fa-chevron-right"></i> */}
                  </div>
                </li>
                <li className={`row`}>
                  <div className={`col-md-2`}>
                    <i class="fal fa-file-alt"></i>
                  </div>
                  <div className={`col-md-8 pl-2`}>
                    <span>Documentation</span>
                  </div>
                  <div className={`col-md-2 pl-2`}>
                    {/* <i class="fal fa-chevron-right"></i> */}
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className={`row ${styles["sidebar-footer-part"]}`}>
            <div className={"col-md-10"}>
              <img
                className={`${styles["logo-size"]}`}
                src={logo}
                alt="new"
              ></img>
            </div>
            <div className={`col-md-2 ${styles["icon-size"]}`}>
              <i className="fal fa-record-vinyl"></i>
            </div>
          </div>
          {/* </nav> */}
        </div>
      </div>
    </>
  );
};

export default SideBar;
