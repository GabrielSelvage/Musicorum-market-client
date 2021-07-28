import React from "react";
import { Trash, Edit, Trash2 } from 'react-feather';
import "./AddLesson.css";
import "./MyLessons.css"

function MyLessons({ loggedInUser }) {
    return (
        <>
            <div className="body-addlesson body-mylessons">
                <div className="container pos-form">
                    <div className="upload-lesson">
                        <br /><br />
                        <h1 className="title">Profile/My Lessons </h1>
                        <div className="profile">
                            <img className=" profile-avatar profile-img" src="/img/profile.jpg" alt="profile" />
                            <div className="name-profile">
                                {loggedInUser ? (<p className="welcome">Welcome, {loggedInUser.name}</p>) : (<p></p>)}
                            </div>
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
                            <div className="mylessons-section">
                                <div className="card-mylessons">
                                    <img src="/img/rectangle-lesson.png" alt="rectangle-lessons"></img>
                                    <div className="subtitle-card-mylessons">
                                        <p>15 students</p>
                                        <p>23m</p>
                                    </div>
                                    <h1>Learn how to play a chromatic scale on everys tons</h1>
                                    <div className="subtitle-card">
                                        <p>Gabriel Selvage</p>
                                        <div>
                                            <Trash2 />
                                            <Edit />
                                        </div>
                                    </div>
                                </div>

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

export default MyLessons;