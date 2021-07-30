import React from 'react';
import { NavLink } from 'react-router-dom';
import { getUser } from '../api';
import "./AddLesson.css";
import "./LessonDetails.css";
import "./Profile.css";

class Profile extends React.Component {
    state = {
        isLoading: true,
        isLoggedIn: false,
        id: "",
        name: "",
        email: "",
        description: "",
        imageUrl: "",
        myFavourites: "",
    }

    async componentDidMount() {
        const response = await getUser(this.props.match.params.id);

        this.setState({
            id: response.data._id,
            name: response.data.name,
            email: response.data.email,
            description: response.data.description,
            imageUrl: response.data.imageUrl,
            myFavourites: response.data.myFavourites,
            // user: this.props.loggedInUser,
        });
    }

    render() {
        const { id, name, email, description, imageUrl, myFavourites } = this.state;
        const { loggedInUser } = this.props;
        console.log(loggedInUser);
        return (
            <div className="body-addlesson">
                <div className="container pos-form">
                    <div className="upload-lesson">
                        <br /><br />
                        <h1 className="title">Profile </h1>
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
                            {(loggedInUser && loggedInUser.role === 'teacher') && (<NavLink to={`/my-lessons/${loggedInUser._id}`} className="title-profile smart-layers-pointers">MY LESSONS</NavLink>)}
                            {(loggedInUser && loggedInUser.role === 'teacher') && (<NavLink to="/add-lesson" className="title-profile smart-layers-pointers">UPLOAD LESSON</NavLink>)}
                            {(loggedInUser && loggedInUser.role === 'teacher') && (<NavLink to="/lesson/:id/edit" className="title-profile smart-layers-pointers">EDIT LESSON</NavLink>)}
                        </div>
                        <div className="form-section body-detail">
                            <div className=" profile-detail">
                                <div className="body-profile">
                                    <h1 className="name-user-profile">Name: {name}</h1>
                                    <div className="img-profile img-profile-detail">Image:
                                        {imageUrl && (
                                            <img style={{ width: "100px" }} src={imageUrl} alt="user" />
                                        )}
                                    </div>
                                    <p className="p-profile text-profile-detail">Email: {email}</p>
                                    <p className="p-profile text-profile-detail">Id: {id}</p>
                                    <p className="p-profile text-profile-detail">Description: {description}</p>
                                    <p className="p-profile text-profile-detail">My Favourites: {myFavourites}</p>
                                    <br></br><br></br><br></br><br></br><br></br>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Profile;