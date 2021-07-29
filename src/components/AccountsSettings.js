import React from "react";
import { NavLink } from 'react-router-dom';
import { updateSettings, getUser } from "../api";
import { toast } from "react-toastify";
import "./AllLessons.css";

class UpdateAccount extends React.Component {
  state = {
    id: "",
    name: "",
    email: "",
    description: "",
    imageUrl: "",
  };

  async componentDidMount() {
    const response = await getUser(this.props.match.params.id);
    this.setState({
      id: response.data._id,
      name: response.data.name,
      email: response.data.email,
      password: response.data.password,
      imageUrl: response.data.imageUrl,
    });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleFormSubmit = async (event) => {
    event.preventDefault();
    await updateSettings(this.state);
    toast.success("User updated");
    this.props.history.push(`/profile/${this.state.id}`);
  };


  render() {
    const { name, email, password, imageUrl } = this.state;
    return (
      <>
        <div className="body-addlesson">
          <div className="container pos-form">
            <div className="upload-lesson">
              <br /><br />
              <h1 className="title">Profile / Account Settings </h1>
              <div className="profile">
                <img className=" profile-avatar profile-img" src={imageUrl} alt="profile" />
                <div className="name-profile">{name}</div>
              </div>
              <img className="line1" src="/img/line-53@1x.png" />
            </div>
            <div className="row-lesson">
              <div className="words-edit">
                <NavLink to="/edit-profile" className="title-profile smart-layers-pointers">EDIT PROFILE</NavLink>
                <NavLink to="/account-settings" className="title-profile smart-layers-pointers">ACCOUNT SETTINGS</NavLink>
                <img className="line2" src="/img/line-4@1x.png" />
                <NavLink to="/my-lessons" className="title-profile smart-layers-pointers">MY LESSONS</NavLink>
                <NavLink to="/add-lesson" className="title-profile smart-layers-pointers">UPLOAD LESSON</NavLink>
                <NavLink to="/lesson/:id/edit" className="title-profile smart-layers-pointers">EDIT LESSON</NavLink>
              </div>
              <div className="form-section">
                <div className="d-flex flex-column" style={{ width: "300px" }}>
                  <form onSubmit={this.handleFormSubmit} encType="multipart/form-data">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="rectangle-form border-1px-black title-form"
                      onChange={this.handleChange}
                      value={email}
                    />
                    <br />
                    <br />
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="rectangle-form border-1px-black title-form"
                      onChange={this.handleChange}
                      value={password}
                    />
                    <br />
                    <br />
                    <div class="button-class">
                      <button class="upload-button" type="submit" >Update</button>
                    </div>
                  </form>
                  <br></br><br></br><br></br><br></br><br></br>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default UpdateAccount;