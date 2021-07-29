import React from "react";
import { NavLink, Redirect } from 'react-router-dom';
import { Trash, Edit, Trash2 } from 'react-feather';
import { getUser, loggedIn, getLesson } from "../api";
import "./AddLesson.css";
import "./MyLessons.css"

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
        return (
            <>
                <div className="body-addlesson">
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
                                <NavLink to="/my-lessons" className="title-profile smart-layers-pointers">MY LESSONS</NavLink>
                                <NavLink to="/add-lesson" className="title-profile smart-layers-pointers">UPLOAD LESSON</NavLink>
                                <NavLink to="/lesson/:id/edit" className="title-profile smart-layers-pointers">EDIT LESSON</NavLink>
                            </div>
                            <div className="form-section">
                                <div className="mylessons-section">
                                    {this.state.lessons.map(({ title, imagePreviewUrl, description, price, level }) => {
                                        return (
                                            <div className="col-md-4">
                                                <div className="card-mylessons" >
                                                    <img class="card-img-top" src={imagePreviewUrl} alt={imagePreviewUrl} />
                                                    <div className="card-body">
                                                        <h2>{title}</h2>
                                                        <h5 className="card-title ">{level}</h5>
                                                        <p className="card-text">{description}</p>
                                                        {price !== 0 ? (<p>{price} €</p>) : (<p>"Free"</p>)}
                                                        <NavLink to="/">
                                                            <button >See more</button>
                                                        </NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}

                                    <br></br><br></br><br></br><br></br><br></br>
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