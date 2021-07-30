import React from 'react';
import { getLessonDetails } from '../api';
import VideoPlayer from 'react-video-js-player';
import "./LessonDetails.css"

class LessonDetails extends React.Component {
    state = {
        lesson: []
    }

    async componentDidMount() {
        const response = await getLessonDetails(this.props.match.params.id);

        this.setState({
            lesson: [response.data],
        });
    }

    render() {
        return (
            <div className="body-detail">
                {this.state.lesson.map(({ title, teacher, imagePreviewUrl, videoUrl, level, price, description }) => {
                    return (
                        <div className="container">
                            <div className="section1">
                                <div className="header-detail">
                                    <p className="title-detail">{title}</p>
                                    <p>By {teacher.name}</p>
                                </div>
                                <div className="row">
                                    <div className="div-video">
                                        <div className="col-7">
                                            <VideoPlayer
                                                src={videoUrl}
                                                poster={imagePreviewUrl}
                                                width="720"
                                                height="420"
                                                playbackRate={[0.5, 1, 1.5, 2]}
                                                className="video-detail"
                                            />
                                        </div>
                                    </div>
                                    <div className="card-detail">
                                        <h1 className="purshase-detail">Purshase Detail</h1>
                                        <br />
                                        <div className="text-card-detail">
                                            <p><strong className="title-small">Rating: </strong>4.8 Stars</p>
                                            <p><strong className="title-small">Subtitles: </strong>Spanish, Portuguese, English</p>
                                            <p><strong className="title-small">Level: </strong>{level}</p>
                                            {price !== 0 ? (<p className="title-detail">{price}€</p>) : (<p className="title-detail">Free</p>)}
                                        </div>
                                        <br />
                                        <button>
                                            <div class="button-class">
                                                <div class="upload-button">Add to Cart</div>
                                            </div>
                                        </button>
                                        <br /><br />
                                        <button>
                                            <div class="button-class2">
                                                <div class="upload-button2">Add to Favourites</div>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <br /><br />
                            <div className="section2">
                                <div className="description">
                                    <div className="title-small title-description">About the lesson</div>
                                    <div className="text-description">{description}</div>
                                </div>
                            </div>
                            <br /><br /><br /><br />
                            <div className="profile-detail">
                                <div className="img-profile-detail">
                                    <img src={teacher.imageUrl} alt={teacher.imageUrl} />
                                </div>
                                <div className="text-profile-detail">
                                    <p className="title-profile-detail">{teacher.name}</p>
                                    <br />
                                    <p>{teacher.description}</p>
                                </div>
                            </div>
                            <br /><br /><br /><br />
                        </div>

                    )
                })}

            </div>
        )
    }

};

export default LessonDetails;