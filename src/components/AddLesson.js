import React from "react";
import { NavLink } from 'react-router-dom';
import { addLesson, uploadFile, getUser } from "../api";
import { toast } from "react-toastify";
import CreateTags from "../components/CreateTags";
import "./AddLesson.css";

class AddLesson extends React.Component {
    state = {
        id: "",
        title: "",
        description: "",
        course: "",
        imagePreviewUrl: "",
        videoUrl: "",
        level: "beginner",
        teacher: "",
        tags: [],
        price: 0,
        userId: '',
        userName: '',
        userImageUrl: ''
    };

    async componentDidMount() {
        const response = await getUser(this.props.match.params.id);
        this.setState({
            userId: response.data._id,
            userName: response.data.name,
            userImageUrl: response.data.imageUrl,
        });
    }


    handleTagsChange = (event) => {
        this.setState({
            tags: event,
        });
    };

    handleChange = (event) => {

        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleChangeFile = (event) => {
        this.setState({
            [event.target.name]: event.target.files[0],
        });
    };

    handleFormSubmit = async (event) => {
        event.preventDefault();
        const uploadDataImage = new FormData();
        const uploadDataVideo = new FormData();

        uploadDataImage.append("file", this.state.imagePreviewUrl);
        uploadDataVideo.append("file", this.state.videoUrl);

        const responseImage = await uploadFile(uploadDataImage);
        const responseVideo = await uploadFile(uploadDataVideo);

        const newLesson = {
            imagePreviewUrl: responseImage.data.fileUrl,
            videoUrl: responseVideo.data.fileUrl,
            title: this.state.title,
            course: this.state.course,
            description: this.state.description,
            level: this.state.level,
            tags: this.state.tags,
            price: this.state.price,
            teacher: this.props.loggedInUser._id
        };
        await addLesson(newLesson);
        toast.success("Project created");
        this.props.history.push("/my-lessons");
    };



    render() {
        const { userName, userImageUrl, title, description, level, course, price } = this.state;
        return (
            <>
                <div className="body-addlesson">
                    <div className="container pos-form">
                        <div className="upload-lesson">
                            <br /><br />
                            <h1 className="title">Profile / Account Settings </h1>
                            <div className="profile">
                                <img className=" profile-avatar profile-img" src={userImageUrl} alt="profile" />
                                <div className="name-profile">{userName}</div>
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
                            <form className="d-flex flex-column" style={{ width: "300px" }} onSubmit={this.handleFormSubmit} encType="multipart/form-data">
                                <div className="form-section">
                                    <input
                                        type="text"
                                        className="rectangle-form border-1px-black title-form"
                                        placeholder="Title"
                                        onChange={this.handleChange}
                                        name="title"
                                        value={title}
                                    />
                                    <br />
                                    <textarea
                                        type="text"
                                        class="rectangle-form2 border-1px-black playfairdisplay-normal-gravel-16px title-form"
                                        onChange={this.handleChange}
                                        name="description"
                                        placeholder="Description"
                                        value={description}>
                                    </textarea>
                                    <div className="small-form">
                                        <br />
                                        <input
                                            type="number"
                                            className="rectangle-form3 border-1px-black"
                                            onChange={this.handleChange}
                                            name="price"
                                            placeholder="Price"
                                            value={price}
                                        />
                                        <br />
                                        <input
                                            type="text"
                                            className="rectangle-form3 border-1px-black"
                                            onChange={this.handleChange}
                                            name="course"
                                            placeholder="Course"
                                            value={course}
                                        />
                                        <br />
                                        <select
                                            onChange={this.handleChange}
                                            className="select-class rectangle-form3 border-1px-black"
                                            name="level"
                                            type="text"
                                            placeholder="Level"
                                            value={level}
                                        >
                                            <option selected value="beginner">Level</option>
                                            <option onChange={this.handleChange} value="beginner">Beginner</option>
                                            <option onChange={this.handleChange} value="intermediate">Intermediate</option>
                                            <option onChange={this.handleChange} value="advanced">Advanced</option>
                                        </select>
                                        <br></br>
                                    </div>
                                    <div className="title-form">
                                        <div className="rectangle-form3 border-1px-black title-form">
                                            <CreateTags handleTagsChange={this.handleTagsChange} />
                                        </div>
                                    </div>
                                    <br /><br />
                                    <div className="final-form">
                                        <div class="input-file">
                                            <label for="imagePreviewUrl" /*className="labels-form"*/ >
                                                <input type="file" name="imagePreviewUrl" onChange={this.handleChangeFile} /*className="input-class"*/ />
                                                {/* <img src="/img/add-class2.png" alt="add-class" /> */}
                                                {/* Cover Image */}
                                            </label>
                                        </div>
                                        <br />
                                        <div class="input-file">
                                            {/* <label for="videoUrl" className="labels-form"><img src="/img/add-class2.png" alt="add-class" />Video Lesson</label> */}
                                            <input type="file" name="videoUrl" /*className="input-class"*/ onChange={this.handleChangeFile} />
                                        </div>
                                        <br></br><br />
                                        <button type="submit">
                                            <div class="button-class">
                                                <div class="upload-button">Upload</div>
                                            </div>
                                        </button>
                                    </div>
                                    <br></br><br></br><br></br><br></br><br></br>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default AddLesson;
