import React from "react";
import { addLesson, uploadFile, getUser } from "../api";
import { toast } from "react-toastify";
import CreateTags from "../components/CreateTags";
import "./AddLesson.css";

class AddLessonTest extends React.Component {
    state = {
        id: "",
        title: "",
        description: "",
        course: "",
        imagePreviewUrl: "",
        videoUrl: "",
        level: "beginner",
        tags: [],
        price: 0,

    };

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
        const response = await getUser(this.props.match.params.id);

        const newLesson = {
            userId: response.data._id,
            imagePreviewUrl: responseImage.data.fileUrl,
            videoUrl: responseVideo.data.fileUrl,
            title: this.state.title,
            course: this.state.course,
            description: this.state.description,
            level: this.state.level,
            tags: this.state.tags,
            teacher: this.props.loggedInUser._id
        };
        await addLesson(newLesson);
        toast.success("Project created");
        this.props.history.push("/add-lessonTest");
    };



    render() {
        const { title, description, level, course, price } = this.state;
        return (
            <>
                <div className="body-addlesson">
                    <div className="container pos-form">
                        <form className="d-flex flex-column" style={{ width: "300px" }} onSubmit={this.handleFormSubmit} encType="multipart/form-data">
                            <label>Title</label>
                            <input
                                type="text"
                                onChange={this.handleChange}
                                name="title"
                                value={title}
                            />
                            <label>Description</label>
                            <textarea
                                type="text"
                                onChange={this.handleChange}
                                name="description"
                                value={description}>
                            </textarea>
                            <br />

                            <label>Course</label>
                            <input
                                type="text"
                                onChange={this.handleChange}
                                name="course"
                                value={course}
                            />

                            <label>Price</label>
                            <input
                                type="number"
                                onChange={this.handleChange}
                                name="price"
                                value={price}
                            />



                            <label>Level</label>
                            <select
                                onChange={this.handleChange}
                                name="level"
                                type="text"
                                value={level}
                            >
                                <option onChange={this.handleChange} value="beginner">Beginner</option>
                                <option onChange={this.handleChange} value="intermediate">Intermediate</option>
                                <option onChange={this.handleChange} value="advanced">Advanced</option>
                            </select>
                            <br />
                            <div>
                                <CreateTags handleTagsChange={this.handleTagsChange} />
                            </div>

                            <label>Image</label>
                            <input type="file" name="imagePreviewUrl" onChange={this.handleChangeFile} />
                            <br />

                            <label>Video</label>
                            <input type="file" name="videoUrl" onChange={this.handleChangeFile} />
                            <br />

                            <button type="submit">Create</button>

                        </form>
                    </div>
                </div>
            </>
        );
    }
}
export default AddLessonTest;