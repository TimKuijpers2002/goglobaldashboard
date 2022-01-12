import React, {useEffect} from "react";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
import Location from "./Pages/Location";
import LocationSubmit from "./Pages/LocationSubmit";
import Profile from "./Pages/Profile";
import Report from "./Pages/Report";
import "antd/dist/antd.css";
import {Route, BrowserRouter as Router} from "react-router-dom";
import './App.css';
import POSTAdmin from "./Pages/PostAdmin";

function App() {
  useEffect(() => {
    let title = window.location.pathname
    document.title = title.substring(1);
  });

  const divider = "/";
  return (
    <Router>
      <Route path={divider} exact component={Home}/>
      <Route path={divider + "Admin"} exact component={Admin}/>
      <Route path={divider + "AdminCreate"} exact component={POSTAdmin}/>
      <Route path={divider + "Location"} exact component={Location}/>
      <Route path={divider + "LocationSubmit"} exact component={LocationSubmit}/>
      <Route path={divider + "Profile"} exact component={Profile}/>
      <Route path={divider + "Report"} exact component={Report}/>
    </Router>
  );
}

export default App;
