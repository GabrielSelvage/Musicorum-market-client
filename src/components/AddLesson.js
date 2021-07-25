import React from "react";
import { addLesson, uploadFile } from "../api";
import { toast } from "react-toastify";
import CreateTags from "../components/CreateTags";
import "./AddLesson.css";

class AddLesson extends React.Component {
  state = {
    title: "",
    description: "",
    price: "",
    course:"",
    teacher:"",
    level:"",
    tags:[],
    imageURL: "",
    preview: "",
    video: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleFormSubmit = async (event) => {
    event.preventDefault();

    const uploadData = new FormData();
    uploadData.append("image", this.state.imageURL);

    const response = await uploadFile(uploadData);

    const newLesson = {
        title: this.state.title,
        description: this.state.description,
        price: this.state.price,
        course: this.state.course,
        teacher: this.state.teacher,
        level: this.state.level,
        tags: this.state.tags,
        imageURL: response.data.imageURL,
        preview: response.data.preview,
        video: response.data.video,
    };

    await addLesson(newLesson);

    toast.success("Project created");
    this.props.history.push("/add-lesson");
  };

  handleChangeFile = (event) => {
    this.setState({
      imageURL: event.target.files[0],
      preview: event.target.files[0],
      video: event.target.files[0],
    });
  };

  render() {
    const { title, description, price , course, teacher, level, tags, imageURL, preview, video} = this.state;
    return (
            <div className="container pos-form">
            <form onSubmit={this.handleFormSubmit} method="POST" enctype="multipart/form-data" className="class-form">
                <input type="hidden" id="anPageName" name="page" value="upload-lesson" />
                <div className="upload-lesson">  
                  <h1 className="title">Profile / Upload CLass</h1>
                      <div className="profile">
                          <img className=" profile-avatar profile-img" src="/img/profile.jpg" alt="profile"/>
                          <div className="name-profile">Gabriel Santos</div>
                      </div>
                      <img className="line1" src="/img/line-53@1x.png" />
                </div>
                <div className="row-lesson">
                  <div className="words-edit">
                      <a href="#" className="title-profile smart-layers-pointers">EDIT PROFILE</a>
                      <a href="#" className="title-profile smart-layers-pointers">ACCOUNT SETTINGS</a>
                      <a href="#" className="title-profile smart-layers-pointers">PASSWORD</a>
                      <a href="#" className="title-profile smart-layers-pointers">SOCIAL PROFILES</a>
                      <a href="#" className="title-profile smart-layers-pointers">EMAIL NOTIFICATIONS</a>
                      <img className="line2" src="/img/line-4@1x.png" />
                      <a href="#" className="title-profile smart-layers-pointers">UPLOAD CLASS</a>
                      <a href="#" className="title-profile smart-layers-pointers">EDIT CLASS</a>
                  </div>
                <div className="form-section">
                            <input 
                                onChange={this.handleChange} 
                                name="title" 
                                placeholder="Title" 
                                type="text" 
                                className="rectangle-form border-1px-black title-form"
                                value={title}
                            />
                        <br/>
                            <textarea
                                class="rectangle-form2 border-1px-black playfairdisplay-normal-gravel-16px title-form"
                                name="description"
                                placeholder="Description"
                                type="text"
                                onChange={this.handleChange}
                                value={description}>
                            </textarea>
                    <div className="small-form">
                        <br/>
                            <input 
                                onChange={this.handleChange}
                                name="price" 
                                placeholder="Price" 
                                type="text" 
                                className="rectangle-form3 border-1px-black"
                                value={price}
                            />
                        <br/>
                            <input 
                                onChange={this.handleChange}
                                name="course" 
                                placeholder="Course" 
                                type="text" 
                                className="rectangle-form3 border-1px-black"
                                value={course}
                            />
                        <br/>
                            <input
                                onChange={this.handleChange}
                                name="teacher" 
                                placeholder="Teacher Name" 
                                type="text" 
                                className="rectangle-form3 border-1px-black"
                                value={teacher}
                            />
                        <br/>
                                <select 
                                    onChange={this.handleChange}
                                    name="level" 
                                    type="text" 
                                    className="select-class rectangle-form3 border-1px-black"
                                    value={level}
                                >
                                    <option value="" selected>Level</option>
                                    <option onChange={this.handleChange} value="beginner">Beginner</option>
                                    <option onChange={this.handleChange}value="intermediate">Intermediate</option>
                                    <option onChange={this.handleChange}value="advanced">Advanced</option>
                                </select>
                        <br></br>
                        </div>    
                            <div className="title-form">
                                <div className="rectangle-form3 border-1px-black title-form">
                                    <CreateTags 
                                        onChange={this.handleChange}
                                        value={tags} 
                                    />
                                </div>
                            </div>
                            <br/><br/>
                        <div className="final-form">
                            <div class="input-file">
                                    <label for="image" className="labels-form" >
                                        <img src="/img/add-class2.png" alt="add-class"/>
                                        <span>Cover Image</span>
                                    </label>
                                    <input 
                                        onChange={this.handleChange}
                                        type="file" 
                                        name="image" 
                                        id="image" 
                                        className="input-class"
                                        value={imageURL}
                                    />
                                </div>
                                <br/>
                                <div class="input-file">
                                    <label for="image" className="labels-form">
                                        <img src="/img/add-class2.png" alt="add-class"/>
                                        <span>Preview Lesson</span>
                                    </label>
                                    <input
                                        onChange={this.handleChange}
                                        type="file" 
                                        name="preview" 
                                        id="preview" 
                                        className="input-class"
                                        value={preview}
                                    />
                                </div>
                                <br/>
                            <div class="input-file">
                                    <label for="image" className="labels-form">
                                        <img src="/img/add-class2.png" alt="add-class"/>
                                        <span>Video Lesson</span>
                                    </label>
                                    <input 
                                        onChange={this.handleChange}
                                        type="file"
                                        name="image"
                                        id="image" 
                                        className="input-class"
                                        value={video}
                                    />
                                </div>
                            <br></br><br/>
                            <button type="submit" className="button-class">
                                <div class="button-class">
                                    <div class="upload-button">Upload</div>
                                </div>
                            </button>
                            </div>
                            <br></br><br></br><br></br><br></br><br></br>
                        </div>
                    </div>

          </form>
        </div>
    );
  }
}

export default AddLesson;
