import React from 'react';
import { getUser } from '../api';
import "./AddLesson.css"
import "./Profile.css"

class Profile extends React.Component {
    state = {
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
        });
    }

    

    render() {
        const { id, name, email, description, imageUrl, myFavourites } = this.state;
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
                            <a href="/edit-profile" className="title-profile smart-layers-pointers">EDIT PROFILE</a>
                            <a href="/account-settings" className="title-profile smart-layers-pointers">ACCOUNT SETTINGS</a>
                            <img className="line2" src="/img/line-4@1x.png" />
                            <a href="/my-lessons" className="title-profile smart-layers-pointers">MY LESSONS</a>
                            <a href="/add-lesson" className="title-profile smart-layers-pointers">UPLOAD LESSON</a>
                            <a href="/lesson/:id/edit" className="title-profile smart-layers-pointers">EDIT LESSON</a>
                        </div>
                        <div className="form-section">
                            <div className="body-profile">
                                <h1 className="name-user-profile">Name: {name}</h1>
                                <div className="img-profile">Image:
                                    {imageUrl && (
                                        <img style={{ width: "100px" }} src={imageUrl} alt="user" />
                                    )}
                                </div>
                                <p className="p-profile">Email: {email}</p>
                                <p className="p-profile">Id: {id}</p>
                                <p className="p-profile">Description: {description}</p>
                                <p className="p-profile">My Favourites: {myFavourites}</p>
                                <br></br><br></br><br></br><br></br><br></br>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Profile;