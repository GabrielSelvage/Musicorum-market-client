import React from "react";
import { NavLink } from 'react-router-dom';
import { updateUser, getUser, uploadFile } from "../api";
import { toast } from "react-toastify";
import "./AllLessons.css";

class EditProfile extends React.Component {
  state = {
    id: '',
    name: "",
    description: "",
    imageUrl: "",
  };

  async componentDidMount() {
    const response = await getUser(this.props.match.params.id);
    this.setState({
      id: response.data._id,
      name: response.data.name,
      description: response.data.description,
      imageUrl: response.data.imageUrl,
    });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };


  handleChangeFile = (event) => {
    this.setState({
      imageUrl: event.target.files[0],
    });
  };

  handleFormSubmit = async (event) => {
    event.preventDefault();

    const uploadData = new FormData();
    uploadData.append("file", this.state.imageUrl);
    const response = await uploadFile(uploadData);
    const updatedUser = {
      id: this.state.id,
      imageUrl: response.data.fileUrl,
      name: this.state.name,
      description: this.state.description,
    };

    await updateUser(updatedUser);

    toast.success("User updated");
    this.props.history.push(`/`);
  };




  render() {
    const { name, description, imageUrl } = this.state;
    const { loggedInUser } = this.props;
    console.log(loggedInUser);
    return (
      <>
        <div className="body-addlesson">
          <div className="container pos-form">
            <div className="upload-lesson">
              <br /><br />
              <h1 className="title">Profile/Edit Profile</h1>
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
                <NavLink to={`/my-lessons/${loggedInUser._id}`} className="title-profile smart-layers-pointers">MY LESSONS</NavLink>
                <NavLink to="/add-lesson" className="title-profile smart-layers-pointers">UPLOAD LESSON</NavLink>
                <NavLink to="/lesson/:id/edit" className="title-profile smart-layers-pointers">EDIT LESSON</NavLink>
              </div>
              <div className="form-section">
                <div className="d-flex flex-column" style={{ width: "300px" }}>
                  <form onSubmit={this.handleFormSubmit} encType="multipart/form-data">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="rectangle-form border-1px-black title-form"
                      onChange={this.handleChange}
                      value={name}
                    />
                    <br />
                    <br />
                    <input
                      type="text"
                      name="description"
                      placeholder="Description"
                      class="rectangle-form2 border-1px-black playfairdisplay-normal-gravel-16px title-form"
                      onChange={this.handleChange}
                      value={description}
                    />
                    <br />
                    <br />
                    <div class="input-file">
                      <input
                        type="file"
                        name="image"
                        onChange={this.handleChangeFile}
                      />
                    </div>
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

export default EditProfile;