import "./App.css";
import { Home } from "./components/Home";
import AllLessons from "./components/AllLessons";
import { AllInstruments } from "./components/AllInstruments";
//import AddClasses from "./components/AddProject";
import { BootstrapNavbar } from './components/NavBar';
// import ClassesDetails from "./components/ProjectDetails";
// import UpdateClasses from "./components/UpdateProject";
import Signup from "./components/Signup";
import Login from "./components/Login";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Route, Switch } from "react-router-dom";
import React from "react";
import Tags from "./components/CreateTags";


class App extends React.Component {
  state = {
    loggedInUser: null,
  };
  setLoggedInUser = (user) => {
    this.setState({
      loggedInUser: user,
    });
  };
  render() {
    return (
      <div className="App">
        <ToastContainer />
        <BootstrapNavbar loggedInUser={this.state.loggedInUser} />
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path={["/", "/lessons"]} component={AllLessons} />
          <Route exact path={["/", "/instruments"]} component={AllInstruments} />
          {/* <Route exact path="/projects/add" component={AddProject} />
          <Route exact path="/projects/:id" component={ProjectDetails} />
          <Route exact path="/projects/:id/edit" component={UpdateProject} /> */}
          <Route exact path="/signup" component={Signup} />
          <Route
            exact
            path="/login"
            render={(props) => {
              return <Login {...props} setLoggedInUser={this.setLoggedInUser} />;
            }}
          />
          <Route exact path="/tags" component={Tags}/>
        </Switch>
      </div>
    );
  }
}
export default App;