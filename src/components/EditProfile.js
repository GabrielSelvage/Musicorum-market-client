import React from "react";
import { updateUser, getUser, uploadFile } from "../api";
import { toast } from "react-toastify";
import "./AllLessons.css"

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
    this.props.history.push(`/profile/${this.state.id}`);
  };




  render() {
    const { name, description } = this.state;
    return (
      <>
        <div className="body-addlesson">
          <div className="container pos-form">
            <div className="upload-lesson">
              <br /><br />
              <h1 className="title">Profile/Edit Profile</h1>
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
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    onChange={this.handleChange}
                    value={name}
                  />
                  <label>Description</label>
                  <input
                    type="text"
                    name="description"
                    onChange={this.handleChange}
                    value={description}
                  />
                  <label>Image</label>
                  <input
                    type="file"
                    name="image"
                    onChange={this.handleChangeFile}
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

export default EditProfile;