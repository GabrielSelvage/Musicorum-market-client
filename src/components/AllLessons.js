import React from 'react';
import "./AllLessons.css"

export function AllLessons() {
    return(
        <div className="body-alllessons">
            <div className="container posicion-lessons">
            <div className="list-lesson"> 
                <br/><br/> 
                <h1 className="title-lessons">Guitar Lessons </h1>
                    <div className="div-lesson">
                        <div className="results">121 results</div>
                    </div>
                    <img className="line1" src="/img/line-4@1x.png" />
                </div>
                <div className="row-lessons">
                <div className="words-lessons">
                <br/><br/>
                    <h4 href="#" className="subtitles">Lessons Type</h4>
                    <div class="btn-lessons">
                        <a href="/lessons">All</a>
                        <a href="/payed-lessons">Payed</a>
                        <a href="/free-lessons">Middle</a>
                    </div>
                    <a href="#" className="subtitles">ACCOUNT SETTINGS</a>
                    <a href="#" className="subtitles">MY LESSONS</a> 
                    <a href="/add-lesson" className="subtitles">UPLOAD LESSON</a>
                    <a href="#" className="subtitles">EDIT LESSON</a>
                </div>
                <div className="lessons-section">
                    <h2>Lessons page</h2>
                            <br></br><br></br><br></br><br></br><br></br>
                    </div>
                </div>
        </div>
    </div>
    )
}