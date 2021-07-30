import React from 'react';
import { NavLink } from "react-router-dom";
import { getAllLessons } from '../api';
import "./Search.css";


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
            <div className="container">
                <h4 className="subtitles">Results of {query}</h4>
                {searchResults.length ? (
                    <div>
                        <div className="row justify-content-between">
                            {searchResults.map(({ title, imagePreviewUrl, description, price, id }) => {
                                return (
                                    <div key={id} className="col-md-4">
                                        <div className="card" >
                                            <img className="card-img-top" src={imagePreviewUrl} alt={imagePreviewUrl} />
                                            <div className="card-body">
                                                <h5 className="card-title ">{title}</h5>
                                                <p className="card-text">{description}</p>
                                                {price !== 0 ? (<p>{price} €</p>) : (<p>FREE</p>)}
                                                <NavLink to="/">
                                                    <button >See more</button>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                ) : (<p>No search results</p>)}

            </div>
        )

    }

}

export default SearchPage;

