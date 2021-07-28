import React from "react";
import { updateSettings, getUser } from "../api";
import { toast } from "react-toastify";
import "./AllLessons.css"

class UpdateAccount extends React.Component {
  state = {
    email: "",
    password: "",
  };

  async componentDidMount() {
    const response = await getUser(this.props.match.params.id);
    this.setState({
      id: response.data._id,
      email: response.data.email,
      password: response.data.password,
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
    const { email, password } = this.state;
    return (
      <>
        <div className="body-addlesson">
          <div className="container pos-form">
            <div className="upload-lesson">
              <br /><br />
              <h1 className="title">Profile/Account Settings</h1>
              <div className="profile">
                <img className=" profile-avatar profile-img" src="/img/profile.jpg" alt="profile" />
                <div className="name-profile"></div>
              </div>
              <img className="line1" src="/img/line-53@1x.png" />
            </div>
            <div className="row-lesson">
              <div className="words-edit">
                <a href="/edit-profile" className="title-profile smart-layers-pointers">EDIT PROFILE</a>
                <a href="/account-settings" className="title-profile smart-layers-pointers">ACCOUNT SETTINGS</a>
                <img className="line2" src="/img/line-4@1x.png" />
                <a href="/my-lessons" className="title-profile smart-layers-pointers">MY LESSONS</a>
                <a href="/add-lesson" className="title-profile smart-layers-pointers">UPLOAD LESSON</a>
                <a href="/lesson/:id/edit" className="title-profile smart-layers-pointers">EDIT LESSON</a>
              </div>
              <div className="form-section">
                <h2>Teste</h2>
                <form onSubmit={this.handleFormSubmit} encType="multipart/form-data">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    onChange={this.handleChange}
                    value={email}
                  />
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    onChange={this.handleChange}
                    value={password}
                  />
                  <button type="submit" >Update</button>
                </form>
                <br></br><br></br><br></br><br></br><br></br>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default UpdateAccount;