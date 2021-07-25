import "./App.css";
import { Home } from "./components/Home";
import { AllLessons } from "./components/AllLessons";
import { Instruments } from "./components/Instruments";
//import AddLessons from "./components/AddProject";
import { BootstrapNavbar } from './components/NavBar';
// import LessonsDetails from "./components/LessonDetails";
// import UpdateLessons from "./components/UpdateLesson";
import Signup from "./components/Signup";
import Login from "./components/Login";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Route, Switch } from "react-router-dom";
import React from "react";
import Tags from "./components/CreateTags";
import { SearchPage } from "./components/SearchPage";
import { ShoppingCar } from "./components/ShoppingCar";
import AddLesson from "./components/AddLesson";


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
          <Route exact path="/lessons" component={AllLessons} />
          <Route exact path="/instruments" component={Instruments} />
          {/*<Route exact path="/lessons/:id" component={LessonDetails} />
          <Route exact path="/lessons/:id/edit" component={UpdateLesson} /> */}
          <Route exact path="/" component={Login}/>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/search" component={SearchPage} />
          <Route exact path="/shoppingCar" component={ShoppingCar}/>
          <Route exact path="/add-lesson" component={AddLesson} />
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