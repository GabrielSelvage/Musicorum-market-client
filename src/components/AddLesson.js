import React from "react";
import { AddLesson, uploadFile } from "../api";
import { toast } from "react-toastify";
import CreateTags from "../components/CreateTags";

class addLesson extends React.Component {
  state = {
    title: "",
    description: "",
    imageURL: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleFormSubmit = async (event) => {
    event.preventDefault();

    const uploadData = new FormData();
    uploadData.append("image", this.state.imageUrl);

    const response = await uploadFile(uploadData);

    const newClass = {
      imageUrl: response.data.fileUrl,
      title: this.state.title,
      description: this.state.description,
    };

    await addLesson(newClass);

    toast.success("Project created");
    this.props.history.push("/");
  };

  handleChangeFile = (event) => {
    this.setState({
      imageUrl: event.target.files[0],
    });
  };

  render() {
    const { title, description } = this.state;
    return (
      <>
        <h2>Add Project</h2>
        <form onSubmit={this.handleFormSubmit} encType="multipart/form-data">
          <label>Title</label>
          <input
            type="text"
            onChange={this.handleChange}
            name="title"
            value={title}
          />
          <label>Description</label>
          <input
            type="text"
            onChange={this.handleChange}
            name="description"
            value={description}
          />
          <label>Image</label>
          <input type="file" name="image" onChange={this.handleChangeFile} />
          <button type="submit">Create</button>
        <CreateTags />
        </form>
      </>
    );
  }
}

export default addLesson;
