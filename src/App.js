import "./App.css";
import { Home } from "./components/Home";
import AllLessons from "./components/AllLessons";
import { Instruments } from "./components/Instruments";
//import AddLessons from "./components/AddProject";
import BootstrapNavbar from './components/NavBar';
// import LessonsDetails from "./components/LessonDetails";
import UpdateLesson from "./components/UpdateLesson";
import { Signup } from "./components/Signup";
import { Login } from "./components/Login";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Route, Switch } from "react-router-dom";
import React from "react";
import Tags from "./components/CreateTags";
import { SearchPage } from "./components/SearchPage";
import { ShoppingCar } from "./components/ShoppingCar";
import Profile from './components/Profile';
import AddLesson from "./components/AddLesson";
import PrivateRoute from "./components/PrivateRoutes"
import AddLessonTest from "./components/AddLessonTest";
import { loggedIn } from "./api";
import MyLessons from "./components/MyLessons";
import AccountSettings from "./components/AccountsSettings";
import EditProfile from "./components/EditProfile";
import { BeTeacher } from "./components/BeTeacher";


class App extends React.Component {
  state = {
    loggedInUser: null,
  };
  setLoggedInUser = (user) => {
    this.setState({
      loggedInUser: user,
    });
  };
  //In case the page is refreshed I check if there's
  //an active session on the backend
  async componentDidMount() {
    const response = await loggedIn();
    if (!this.state.loggedInUser) {
      if (response.data._id) {
        this.setLoggedInUser(response.data);
      }
    }
  }

  render() {
    return (
      <div className="App">
        <ToastContainer />
        <BootstrapNavbar
          loggedInUser={this.state.loggedInUser}
          setLoggedInUser={this.setLoggedInUser} />
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/lessons" component={AllLessons} />
          <Route exact path="/instruments" component={Instruments} />
          {/*<Route exact path="/lessons/:id" component={LessonDetails} />*/}
          <PrivateRoute exact path="/lesson/:id/edit" component={UpdateLesson} />
          <PrivateRoute exact path="/my-lessons" component={MyLessons} />
          <PrivateRoute exact path="/account-settings" component={AccountSettings} />
          <PrivateRoute exact path="/edit-profile" component={EditProfile} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/beteacher" component={BeTeacher} />
          <Route exact path="/search" component={SearchPage} />
          <Route exact path="/shoppingCar" component={ShoppingCar} />
          <PrivateRoute path="/profile" component={Profile} />
          <Route exact path="/add-lesson"
            render={(props) => {
              return <AddLesson {...props} loggedInUser={this.state.loggedInUser} />;
            }}
          />
          <Route
            exact path="/add-lessonTest"
            render={(props) => {
              return <AddLessonTest {...props} loggedInUser={this.state.loggedInUser} />;
            }}
          />
          <Route
            exact
            path="/login"
            render={(props) => {
              return <Login {...props} setLoggedInUser={this.setLoggedInUser} />;
            }}
          />
          <Route exact path="/tags" component={Tags} />
        </Switch>
      </div>
    );
  }
}
export default App;