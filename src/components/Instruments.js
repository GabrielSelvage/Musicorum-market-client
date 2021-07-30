import React from 'react';
import { getAllLessons } from '../api';
import { NavLink } from "react-router-dom";
import "./AllLessons.css";
class Instruments extends React.Component {
    state = {
        lessons: [],
        allLessons: [],
        beginnerLessons: [],
        intermediateLessons: [],
        advancedLessons: [],
        isBeginner: true,
        isIntermediate: true,
        isAdvanced: true,
        instrument: "",
    };

    async settingUpTheState() {

        const firstResponse = await getAllLessons();
        const instrument = this.props.match.params.id;
        let response;

        //Filtering the course type
        switch (instrument) {
            case 'violin':
                response = firstResponse.data.filter((lesson) => lesson.course === "violin");
                break;
            case 'guitar':
                response = firstResponse.data.filter((lesson) => lesson.course === "guitar");
                break;
            case 'piano':
                response = firstResponse.data.filter((lesson) => lesson.course === "piano");
                break;
        }


        //Creating arrays with each type of level
        const beginnerLessons = response.filter((lesson) => lesson.level === "beginner");
        const intermediateLessons = response.filter((lesson) => lesson.level === "intermediate");
        const advancedLessons = response.filter((lesson) => lesson.level === "advanced");
        const payedLessons = response.filter((lesson) => lesson.price > 0);
        const freeLessons = response.filter((lesson) => lesson.price === 0);
        this.setState({
            lessons: response,
            allLessons: response,
            beginnerLessons,
            intermediateLessons,
            advancedLessons,
            payedLessons,
            freeLessons,
            instrument,
        });
    }

    componentDidMount() {
        this.settingUpTheState();
    }



    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {

            this.settingUpTheState();
        };
    }

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
        const { instrument} = this.state;
        return (
            <div className="body-alllessons">
                <div className="container posicion-lessons">
                    <div className="list-lesson">
                        <br /><br />
                        <h1 className="title-lessons">{instrument.charAt(0).toUpperCase()+instrument.slice(1)} Lessons </h1>
                        <div className="div-lesson">
                            <div className="results">{this.state.lessons.length} results</div>
                        </div>
                        <img className="line1" src="/img/line-4@1x.png" />
                    </div>
                    <div className="row-lessons">
                        <div className="words-lessons">
                            <br /><br />
                            <h4 className="subtitles">Lessons Type</h4>
                            <br />
                            <div class="btn-lessons">
                                <button name="all" className="btn-all" onClick={this.handleButtonChange} >All</button>
                                <button name="payed" className="btn-payed" onClick={this.handleButtonChange} >Payed</button>
                                <button name="free" className="btn-free" onClick={this.handleButtonChange} >Free</button>
                            </div>
                            <br /><br />
                            <h4 className="subtitles">Lessons Level</h4>
                            <br />
                            <label>
                                <input
                                    name="isBeginner"
                                    type="checkbox"
                                    checked={this.state.isBeginner}
                                    onChange={this.handleCheckChange}
                                />
                                <span className="span-checkbox">Beginner</span>
                            </label>
                            <br />
                            <label>
                                <input
                                    name="isIntermediate"
                                    type="checkbox"
                                    checked={this.state.isIntermediate}
                                    onChange={this.handleCheckChange}
                                />
                                <span className="span-checkbox">Intermediate</span>
                            </label>
                            <br />
                            <label>
                                <input
                                    name="isAdvanced"
                                    type="checkbox"
                                    checked={this.state.isAdvanced}
                                    onChange={this.handleCheckChange}
                                />
                                <span className="span-checkbox">Advanced</span>
                            </label>
                        </div>
                        <div className="lessons-section">
                            <div className="card-lesson container">
                                <div className="row justify-content-between">
                                    {this.state.lessons.map(({ title, imagePreviewUrl, description, price, _id }) => {
                                        return (
                                            <>
                                                <div className="col-md-4">
                                                    <div className="card" >
                                                        <img className="card-img-top" src={imagePreviewUrl} alt={imagePreviewUrl} />
                                                        <div className="card-body">
                                                            <h5 className="card-title subtitles">{title}</h5>
                                                            <br />
                                                            <p className="card-text">{description}</p>
                                                            <br />
                                                            {price !== 0 ? (<p className="price">{price} €</p>) : (<p className="price">Free</p>)}
                                                            <br /><br />
                                                            <NavLink to={`/lesson-details/${_id}`}>
                                                                <button className="button-class">See more</button>
                                                            </NavLink>
                                                        </div>
                                                    </div>
                                                    <br /><br />
                                                </div>
                                            </>
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
export default Instruments;