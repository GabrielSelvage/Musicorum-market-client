import React from "react";
import { signup } from "../api";
import { NavLink } from "react-router-dom";
import CreateTags from "./CreateTags";

class Signup extends React.Component {
  state = {
    username: "",
    password: "",
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await signup(this.state);
      this.props.history.push("/login");
    } catch (error) {
      return <h2>Not possible to signup</h2>
    }
  };
  render() {
    const { username, password } = this.state;
    return (
      <>
        <form onSubmit={this.handleFormSubmit}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            onChange={this.handleChange}
            value={username}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            value={password}
          />
          <button type="submit">Signup</button>
        </form>
        <CreateTags />
        <p>
          Already have an account? <NavLink to="/login">Login</NavLink>
        </p>
      </>
    );
  }
}
export default Signup;