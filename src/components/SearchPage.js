import React from 'react';
import { NavLink } from "react-router-dom";
import { getAllLessons } from '../api';
import "./MyLessons.css";
import "./Search.css"


class SearchPage extends React.Component {
    state = {
        searchResults: [],
        query: "",
    }

    async componentDidMount() {
        const response = await getAllLessons();
        //Spliting the query into an array of words
        const searchWords = this.props.location.search.slice(3).toLowerCase().split('+');

        //searching for the search words in the title lessons
        const resultsFromTitle = searchWords.map(word => (response.data.filter(lesson => lesson.title.toLowerCase().includes(word))));
        const resultsFromTitleConcat = [].concat.apply([], resultsFromTitle); //concatenating every result in one single array

        //searching for the search words in the description
        const resultsFromDescription = searchWords.map(word => (response.data.filter(lesson => lesson.description.toLowerCase().includes(word))));
        const resultsFromDescriptionConcat = [].concat.apply([], resultsFromDescription);//concatenating every result in one single array

        //combining every result found
        const allResults = resultsFromTitleConcat.concat(resultsFromDescriptionConcat);

        //filtering any result based on id
        const filterResults = Array.from(new Set(allResults.map(lesson => lesson.id))).map(id => allResults.find(lesson => lesson.id === id));

        this.setState({
            query: searchWords.join(' '),
            searchResults: filterResults,
        });

    }

    render() {
        const { searchResults, query } = this.state
        return (
            <div className="container upload-lesson body-mylessons body-search">
                <br></br>
                <h4 className="title">Results of {query}</h4>
                {searchResults.length ? (
                    <div className="mylessons-section">
                        <br></br>
                        <div className="card-lesson container">
                            <div className="row justify-content-between">
                                {searchResults.map(({ title, imagePreviewUrl, description, level, price, _id }) => {
                                    return (
                                        <div key={_id} className="col-md-4">
                                            <div className="card" >
                                                <img className="card-img-top" src={imagePreviewUrl} alt={imagePreviewUrl} />
                                                <div className="card-body">
                                                    <h5 className="card-title subtitles">{title}</h5>
                                                    <br />
                                                    <p className="card-text">{level}</p>
                                                    <br />
                                                    <p className="card-text">{description}</p>
                                                    <br />
                                                    {price !== 0 ? (<p className="price">{price} €</p>) : (<p className="price">Free</p>)}
                                                    <NavLink to={`/lesson-details/${_id}`}>
                                                        <button className="button-class">See more</button>
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                ) : (<p className="title">No search results</p>)}

                <br></br><br></br><br></br><br></br><br></br>
            </div>
        )

    }

}

export default SearchPage;

