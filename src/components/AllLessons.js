import React from 'react';
import { getAllLessons } from '../api';
import { NavLink } from "react-router-dom";
import { Heart, ShoppingCart } from 'react-feather';
import "./AllLessons.css";

class AllLessons extends React.Component {
    state = {
        lessons: [],
    };

    async componentDidMount() {
        const response = await getAllLessons();
        this.setState({
            lessons: response.data,
        });
    }

    render() {

        return (
            <div className="body-alllessons">
                <div className="container posicion-lessons">
                    <div className="list-lesson">
                        <br /><br />
                        <h1 className="title-lessons">Guitar Lessons </h1>
                        <div className="div-lesson">
                            <div className="results">121 results</div>
                        </div>
                        <img className="line1" src="/img/line-4@1x.png" />
                    </div>
                    <div className="row-lessons">
                        <div className="words-lessons">
                            <br /><br />
                            <h4 className="subtitles">Lessons Type</h4>
                            <div class="btn-lessons">
                                <a href="/lessons">All</a>
                                <a href="/payed-lessons">Payed</a>
                                <a href="/free-lessons">Middle</a>
                            </div>
                            <h4 className="subtitles">Lessons Level</h4>
                            <label>
                                <input
                                    name="isGoing"
                                    type="checkbox"
                                    checked="something" //-> {this.state.isGoing}
                                    onChange="something" //->{this.handleInputChange}
                                />
                                <span>Beginner</span>
                            </label>
                            <label>
                                <input
                                    name="isGoing"
                                    type="checkbox"
                                    checked="something" //-> {this.state.isGoing}
                                    onChange="something" //->{this.handleInputChange}
                                />
                                <span>Intermediate</span>
                            </label>
                            <label>
                                <input
                                    name="isGoing"
                                    type="checkbox"
                                    checked="something" //-> {this.state.isGoing}
                                    onChange="something" //->{this.handleInputChange}
                                />
                                <span>Advanced</span>
                            </label>
                            <h4 className="subtitles">Lessons Length</h4>
                            <label>
                                <input
                                    name="isGoing"
                                    type="checkbox"
                                    checked="something" //-> {this.state.isGoing}
                                    onChange="something" //->{this.handleInputChange}
                                />
                                <span>- 15min</span>
                            </label>
                            <label>
                                <input
                                    name="isGoing"
                                    type="checkbox"
                                    checked="something" //-> {this.state.isGoing}
                                    onChange="something" //->{this.handleInputChange}
                                />
                                <span>15 - 30min</span>
                            </label>
                            <label>
                                <input
                                    name="isGoing"
                                    type="checkbox"
                                    checked="something" //-> {this.state.isGoing}
                                    onChange="something" //->{this.handleInputChange}
                                />
                                <span>30 - 60min</span>
                            </label>
                            <label>
                                <input
                                    name="isGoing"
                                    type="checkbox"
                                    checked="something" //-> {this.state.isGoing}
                                    onChange="something" //->{this.handleInputChange}
                                />
                                <span>+ 60min</span>
                            </label>
                        </div>
                        <div className="lessons-section">
                            <div className="card-lesson">
                                <p>teste</p>
                                {this.state.lessons.map((lesson) => {
                                    return (
                                        <li key={lesson._id}>
                                            <NavLink to={`/lessons/${lesson._id}`}>
                                                {lesson.title}
                                                {lesson.description}
                                            </NavLink>
                                        </li>
                                    );
                                })}
                                <img src="" alt="rectangle-lessons"></img>
                                <div className="subtitle-card">
                                    <p>15 students</p>
                                    <p>23m</p>
                                </div>
                                <h1>Learn how to play a chromatic scale on everys tons</h1>
                                <div className="subtitle-card">
                                    <p>Gabriel Selvage</p>
                                    <div>
                                        <Heart />
                                        <ShoppingCart />
                                    </div>
                                </div>
                            </div>
                            <br></br><br></br><br></br><br></br><br></br>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AllLessons;