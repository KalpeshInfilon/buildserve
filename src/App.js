// import './node_modules/bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/css/bootstrap.css';
// import 'jquery/src/jquery';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.js";
import React from "react";
import Breadcrumb from "./components/Element/Breadcrumb/Breadcrumb";
import Sidebar from "./components/Element/SiderBar/SideBar";
import Header from "./components/Element/header/Header";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from "./components/Login/Login";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";
import NewRegister from "./components/NewRegister/NewRegister";
import AddData from "./components/AddData/AddData";
import ListData from "./components/ListData/ListData";
// import Animation from "./Animation";
function App() {
  const [size, setSize] = React.useState(false)
  const [data, setData] = React.useState()
  const changeSize = () => {
    setSize(!size)
  }

  React.useEffect(() => {
    setInterval(() => {
      setData(localStorage.getItem('user'))
    }, 1000)
  }, [data])
  return (
    <div className="container-fluid">
      <Router>
        {
          !data &&
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/Add" exact component={AddData} />
            <Route path="/List" exact component={ListData} />
            <Route path="/forgetPassword" exact component={ForgetPassword} />
            <Route path="/register" exact component={NewRegister} />
          </Switch>
        }
        {
          data &&
          <div className="row">
            <div className="" style={{ width: size ? "6.5%" : "21%" }}>
              <Sidebar sizeChange={changeSize} />
            </div>
            <div className="" style={{ width: size ? "90%" : "78%" }}>
              <Header />
              <Breadcrumb />
            </div>
          </div>
        }
        {/* <Redirect to='/' /> */}
        {/* <h1>HELLO</h1> */}
      </Router>
    </div>
  );
}

export default App;
