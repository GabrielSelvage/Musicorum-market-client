import React from 'react';
import { getAllLessons } from '../api';
import { NavLink } from "react-router-dom";
import { Heart, ShoppingCart } from 'react-feather';
import "./AllLessons.css";

class AllLessons extends React.Component {
    state = {
        lessons: [],
        allLessons: [],
        beginnerLessons: [],
        intermediateLessons: [],
        advancedLessons: [],
        isBeginner: true,
        isIntermediate: true,
        isAdvanced: true,



    };

    async componentDidMount() {
        const response = await getAllLessons();
        //Creating arrays with each type of level
        const beginnerLessons = response.data.filter((lesson) => lesson.level === "beginner");
        const intermediateLessons = response.data.filter((lesson) => lesson.level === "intermediate");
        const advancedLessons = response.data.filter((lesson) => lesson.level === "advanced");
        const payedLessons = response.data.filter((lesson) => lesson.price > 0);
        const freeLessons = response.data.filter((lesson) => lesson.price === 0);

        this.setState({
            lessons: response.data,
            allLessons: response.data,
            beginnerLessons,
            intermediateLessons,
            advancedLessons,
            payedLessons,
            freeLessons,

        });
    };




    handleCheckChange = (event) => {
        this.setState((state) => {
            //Converting a "isSomething" to just "something"
            const level = event.target.name.slice(2).toLowerCase();

            if (this.state[event.target.name]) {
                return {
                    //filter the current level out
                    [event.target.name]: event.target.checked,
                    lessons: state.lessons.filter((lesson) => lesson.level !== level),
                }
            } else {
                return {
                    //add the current level back
                    [event.target.name]: event.target.checked,
                    lessons: state.lessons.concat(this.state[level + "Lessons"]),
                }
            }


        });
    };

    handleButtonChange = (event) => {
        console.log(event.target.name);
        this.setState((state) => {

            if (event.target.name === "payed") {
                return {
                    lessons: this.state.payedLessons,
                    isBeginner: true,
                    isIntermediate: true,
                    isAdvanced: true,
                }
            } else if (event.target.name === "free") {
                return {
                    lessons: this.state.freeLessons,
                    isBeginner: true,
                    isIntermediate: true,
                    isAdvanced: true,
                }
            } else {
                return {
                    lessons: this.state.allLessons,
                    isBeginner: true,
                    isIntermediate: true,
                    isAdvanced: true,
                }
            }

        });
    };

    render() {

        return (
            <div className="body-alllessons">
                <div className="container posicion-lessons">
                    <div className="list-lesson">
                        <br /><br />
                        <h1 className="title-lessons">Guitar Lessons </h1>
                        <div className="div-lesson">
                            <div className="results">{this.state.lessons.length} results</div>
                        </div>
                        <img className="line1" src="/img/line-4@1x.png" />
                    </div>
                    <div className="row-lessons">
                        <div className="words-lessons">
                            <br /><br />
                            <h4 className="subtitles">Lessons Type</h4>

                            <div class="btn-lessons">
                                <button name="all" className="btn-all" onClick={this.handleButtonChange} >All</button>
                                <button name="payed" className="btn-all" onClick={this.handleButtonChange} >Payed</button>
                                <button name="free" onClick={this.handleButtonChange} >Free</button>
                            </div>
                            <h4 className="subtitles">Lessons Level</h4>
                            <label>
                                <input
                                    name="isBeginner"
                                    type="checkbox"
                                    checked={this.state.isBeginner}
                                    onChange={this.handleCheckChange}
                                />
                                <span>Beginner</span>
                            </label>
                            <label>
                                <input
                                    name="isIntermediate"
                                    type="checkbox"
                                    checked={this.state.isIntermediate}
                                    onChange={this.handleCheckChange}
                                />
                                <span>Intermediate</span>
                            </label>
                            <label>
                                <input
                                    name="isAdvanced"
                                    type="checkbox"
                                    checked={this.state.isAdvanced}
                                    onChange={this.handleCheckChange}
                                />
                                <span>Advanced</span>
                            </label>

                        </div>

                        <div className="lessons-section">
                            <div className="card-lesson container">
                                <div className="row justify-content-between">
                                    {this.state.lessons.map(({ title, imagePreviewUrl, description, price, level, _id }) => {
                                        return (
                                            <div className="col-md-4">
                                                <div className="card" >
                                                    <img className="card-img-top" src={imagePreviewUrl} alt={imagePreviewUrl} />
                                                    <div className="card-body">
                                                        <h5 className="card-title ">{title}</h5>
                                                        <p className="card-text">{description}</p>
                                                        {price !== 0 ? (<p>{price} €</p>) : (<p>FREE</p>)}
                                                        <NavLink to={`/lesson/${_id}`}>
                                                            <button >See more</button>
                                                        </NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AllLessons;