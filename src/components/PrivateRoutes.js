import React from "react";
import { loggedIn } from "../api";
import { Route, Redirect } from "react-router-dom";
import { toast } from "react-toastify";

//High order component
class PrivateRoute extends React.Component {
  state = {
    isLoading: true,
    isLoggedIn: false,
  };
  async componentDidMount() {
    const response = await loggedIn();
    if (response.data._id) {
      this.setState({
        isLoading: false,
        isLoggedIn: true,
      });
    } else {
      this.setState({
        isLoading: false,
        isLoggedIn: false,
      });
      toast.warning('You need to login to proceed❗️❗️❗️')
    }
  }
  render() {
    const { isLoggedIn, isLoading } = this.state;
    const { path, exact, component, render } = this.props;
    return isLoading ? null : isLoggedIn ? (
      <Route path={path} component={component} exact={exact} render={render}/>
    ) : (
      <Redirect to="/login" />
    );
  }
}
export default PrivateRoute;