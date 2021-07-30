import React from "react";
import { NavLink, Redirect } from 'react-router-dom';
import { Trash, Edit, Trash2 } from 'react-feather';
import { getUser, loggedIn, getLesson } from "../api";
import "./MyLessons.css";
import "./AddLesson.css";

class MyLessons extends React.Component {
    state = {
        id: "",
        name: "",
        imageUrl: "",
        lessons: [],
        teacher: ""
    };

    async componentDidMount() {
        const responseUser = await getUser(this.props.match.params.id);
        const response = await getLesson(this.props.match.params.id);
        console.log(response);
        //Creating arrays with each type of level
        this.setState({
            id: responseUser.data._id,
            name: responseUser.data.name,
            imageUrl: responseUser.data.imageUrl,
            teacher: response.data.teacher,
            lessons: response.data
        });

    }

    render() {
        const { name, imageUrl } = this.state;
        const { loggedInUser} = this.props;
        console.log(loggedInUser);
        return (
            <>
                <div className="body-addlesson body-mylessons">
                    <div className="container pos-form">
                        <div className="upload-lesson">
                            <br /><br />
                            <h1 className="title">Profile / My Lessons </h1>
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
                            <div className="mylessons-section">
                                <div className="card-lesson container">
                                    <div className="row justify-content-between">
                                        {this.state.lessons.map(({ title, imagePreviewUrl, description, price, level, _id }) => {
                                            return (
                                                <div className="col-md-4">
                                                    <div className="card" >
                                                        <img className="card-img-top" src={imagePreviewUrl} alt={imagePreviewUrl} />
                                                        <div className="card-body">
                                                            <h5 className="card-title subtitles">{title}</h5>
                                                            <br />
                                                            <p className="card-text">{level}</p>
                                                            <br />
                                                            <p className="card-text">{description}</p>
                                                            <br />
                                                            {price !== 0 ? (<p className="price">{price} €</p>) : (<p className="price">Free</p>)}
                                                            <br />
                                                            <NavLink to={`/lesson-details/${_id}`}>
                                                                <button className="button-class">See more</button>
                                                            </NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                <br></br><br></br><br></br><br></br><br></br>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default MyLessons;