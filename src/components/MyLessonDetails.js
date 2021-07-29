import React from "react";
import { getLesson, deleteLesson } from "../api";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";

class MyLessonDetails extends React.Component {
  state = {
        id: "",
        name: "",
        imageUrl: "",
        lesson: [],
  };

  async componentDidMount() {
    const response = await getLesson(this.props.match.params.id);
    this.setState({
      id: response.data._id,
      name: response.data.name,
      description: response.data.description,
      imageUrl: response.data.imageUrl,
    });
  }

  handleDeleteLesson = async () => {
    await deleteLesson(this.state.id);
    toast.success("Lesson deleted.");
    this.props.history.push("/my-lessons");
  };

  render() {
    const { id, name, description, imageUrl } = this.state;
    return (
      <>
        <h2>{name}</h2>
        <p>{description}</p>
        {imageUrl && (
          <img style={{ width: "100px" }} src={imageUrl} alt="lesson" />
        )}
        <div>
          <button onClick={this.handleDeleteProject}>Delete</button>
          <button
            onClick={() => {
              this.props.history.push(`/projects/${id}/edit`);
            }}
          >
            Edit
          </button>
          <NavLink to={`/projects/${id}/edit`}>Edit</NavLink>
        </div>
      </>
    );
  }
}

export default MyLessonDetails;
