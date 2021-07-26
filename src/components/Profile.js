import React from 'react';
import { getUser } from '../api';

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

    render(){
        const { id, name, email, description, imageUrl, myFavourites } = this.state;
        return(
            <div className="body-addlesson">
                <div className="container pos-form">
                <div className="upload-lesson"> 
                    <br/><br/> 
                    <h1 className="title">Profile </h1>
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
                        <img className="line2" src="/img/line-4@1x.png" />
                        <a href="#" className="title-profile smart-layers-pointers">MY LESSONS</a> 
                        <a href="/add-lesson" className="title-profile smart-layers-pointers">UPLOAD LESSON</a>
                        <a href="#" className="title-profile smart-layers-pointers">EDIT LESSON</a>
                    </div>
                    <div className="form-section">
                        <h2></h2>
                                <h2>{name}</h2>
                                {imageUrl && (
                                <img style={{ width: "100px" }} src={imageUrl} alt="user" />
                                )}
                                <p>{email}</p>
                                <p>{description}</p>
                                <p>{myFavourites}</p>
                                <br></br><br></br><br></br><br></br><br></br>
                        </div>
                    </div>
            </div>
        </div>
        )
    }

  }

  export default Profile;