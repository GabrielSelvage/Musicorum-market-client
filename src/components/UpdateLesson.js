import React from "react";
import { NavLink } from 'react-router-dom';
import { updateLesson, getLesson, getUser } from "../api";
import { toast } from "react-toastify";

class UpdateLesson extends React.Component {
    state = {
        id: "",
        name: "",
        imageUrl: "",
    };

    async componentDidMount() {
        const response = await getUser(this.props.match.params.id);
        this.setState({
            id: response.data._id,
            name: response.data.name,
            imageUrl: response.data.imageUrl,
        });
    }

    render() {
        const { name, imageUrl } = this.state;
        const { loggedInUser} = this.props;
        console.log(loggedInUser);
        return (
            <>
                <div className="body-addlesson">
                    <div className="container pos-form">
                        <div className="upload-lesson">
                            <br /><br />
                            <h1 className="title">Profile / Account Settings </h1>
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