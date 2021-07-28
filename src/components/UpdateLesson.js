import React from "react";
import { updateLesson, getLesson } from "../api";
import { toast } from "react-toastify";

class UpdateLesson extends React.Component {
    //   state = {
    //     id: "",
    //     title: "",
    //     description: "",
    //   };

    //   async componentDidMount() {
    //     const response = await getLesson(this.props.match.params.id);
    //     this.setState({
    //       id: response.data._id,
    //       title: response.data.title,
    //       description: response.data.description,
    //     });
    //   }

    //   handleChange = (event) => {
    //     this.setState({
    //       [event.target.name]: event.target.value,
    //     });
    //   };

    //   handleFormSubmit = async (event) => {
    //     event.preventDefault();
    //     await updateLesson(this.state);
    //     toast.success("Lesson updated");
    //     this.props.history.push(`/lessons/${this.state.id}`);
    //   };

    render() {
        //const { title, description } = this.state;
        return (
            <>
                <div className="body-addlesson">
                    <div className="container pos-form">
                        <div className="upload-lesson">
                            <br /><br />
                            <h1 className="title">Profile/Edit Lesson </h1>
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

                                <br></br><br></br><br></br><br></br><br></br>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default UpdateLesson;